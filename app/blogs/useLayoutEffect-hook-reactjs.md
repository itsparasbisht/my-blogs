As React developers, we’re all familiar with the `useEffect()` hook, which we use in our components to perform side effects (e.g., data fetching, subscriptions).

However, `useLayoutEffect()` is a lesser-known hook that many of us have not used or may not even know the use cases for. In this post, I'll explain what `useLayoutEffect()` is and how it differs from `useEffect()`.

---

## Rendering vs. Repainting in React

Before diving into the differences between these hooks, it’s important to understand two key concepts: **render** and **repaint**.

- **Render in React:**  
   The process of generating a virtual description of your UI (via your components) and then reconciling it with the previous description.
  <br />

- **Repaint in the Browser:**  
   The process where the browser takes the current DOM, calculates the layout, and draws the updated UI on the screen.
  <br />

- **Not Always a 1:1 Relationship:**  
  A React render does not always directly cause a repaint. If nothing meaningful has changed, React might not update the DOM, or updates may be batched together before the browser repaints.

---

## Flow of Execution with `useEffect`

Consider the following code snippet:

```js
import React from "react";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    console.log("useEffect log");
  }, []);

  console.log("js log");

  return <div ref={() => console.log("ref log")}>App</div>;
}
```

**Expected Log Output:**

```
js log
ref log
useEffect log
```

**Execution Flow:**

1. **Component Function Call:**
   - `App()` is invoked, immediately logging `"js log"`.
   - The `useEffect` hook registers its callback to run **after** the browser paints.

---

2. **JSX Return & DOM Mounting:**
   - The component returns the `<div>`.
   - As the `<div>` mounts, its `ref` callback executes, logging `"ref log"`.
     <br />

---

3. **Post-Paint Phase:**
   - After the browser paints the UI, the `useEffect` callback runs, logging `"useEffect log"`.

---

## Flow of Execution with `useLayoutEffect`

Now, consider this code snippet:

```js
import React from "react";
import { useLayoutEffect } from "react";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    console.log("useEffect log");
  }, []);

  useLayoutEffect(() => {
    console.log("useLayoutEffect log");
  }, []);

  console.log("js log");

  return <div ref={() => console.log("ref log")}>App</div>;
}
```

**Expected Log Output:**

```
js log
ref log
useLayoutEffect log
useEffect log
```

**Execution Flow:**

1. **Render Phase:**
   - The component function runs.
   - Both `useEffect` (to run later) and `useLayoutEffect` (to run before paint) are registered.
   - It immediately logs: `"js log"`.

---

2. **DOM Commit:**
   - The returned JSX is committed to the DOM.
   - The `<div>` mounts, triggering its `ref` callback and logging `"ref log"`.

---

3. **Pre-Paint Phase:**
   - `useLayoutEffect` runs **before** the browser paints, logging `"useLayoutEffect log"`.

---

4. **Post-Paint Phase:**
   - `useEffect` runs **after** the browser has painted, logging `"useEffect log"`.

---

## Key Differences Between `useEffect` and `useLayoutEffect`

Based on the above code samples, here are the main differences:

- **When They Run:**

  - **`useLayoutEffect`:** Runs synchronously **after DOM mutations but before the browser paints**. Ensures updates are applied immediately, preventing any visual flicker.
    <br />

  - **`useEffect`:** Runs asynchronously **after the browser has painted**.
    - May cause a visible change if the effect updates the UI (e.g., causing a “jump”).

---

- **Impact on Rendering:**

  - **`useLayoutEffect`:** Ideal for DOM measurements or layout adjustments because it runs before the user sees the changes.
    <br />

  - **`useEffect`:** Suitable for side effects that do not directly impact the layout or that can be deferred until after the UI is visible.

---

- **Blocking Behavior:**

  - **`useLayoutEffect`:** Blocks the painting process until its callback completes, so use it carefully.
    <br/>

  - **`useEffect`:** Does not block the paint, allowing the UI to render immediately.

---

- **Log Order (from the examples):**
  - `"js log"`: Printed during the component’s synchronous execution.
  - `"ref log"`: Printed when the element is attached to the DOM.
  - `"useLayoutEffect log"`: Logged **before** the browser paints.
  - `"useEffect log"`: Logged **after** the browser paints.

---

## Visual Flow of Execution

Below is a visual representation of the execution flow:

![useLayoutEffect flow of execution](https://i.ibb.co/8g1cLyZJ/use-Layout-Effect-flow.png)

---

## Demo: See the Difference in Action

Try out the following demo code to observe the differences between `useEffect` and `useLayoutEffect`:

```js
import React, { useRef, useState, useEffect, useLayoutEffect } from "react";

export default function App() {
  const [useLayout, setUseLayout] = useState(false);

  return (
    <div style={{ padding: "20px", fontFamily: "monospace" }}>
      <h2>
        {useLayout
          ? "Using useLayoutEffect (No Visual Jump)"
          : "Using useEffect (Notice the Jump)"}
      </h2>
      <button onClick={() => setUseLayout((prev) => !prev)}>
        Toggle Effect Type
      </button>
      <div style={{ marginTop: "20px" }}>
        {useLayout ? <LayoutEffectComponent /> : <EffectComponent />}
      </div>
    </div>
  );
}

// Component using useEffect
function EffectComponent() {
  const refBox = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (refBox.current) {
      // Runs after the browser paints.
      // On the first paint, offset is 0; then it "jumps" to the measured width.
      setOffset(refBox.current.getBoundingClientRect().width);
    }
  }, []);

  return (
    <div style={containerStyle}>
      <div ref={refBox} style={referenceBoxStyle}>
        Reference Box (300px wide)
      </div>
      <div style={{ ...movedBoxStyle, transform: `translateX(${offset}px)` }}>
        Moved Box
      </div>
    </div>
  );
}

// Component using useLayoutEffect
function LayoutEffectComponent() {
  const refBox = useRef(null);
  const [offset, setOffset] = useState(0);

  useLayoutEffect(() => {
    if (refBox.current) {
      // Runs before the browser paints.
      // The moved box is rendered in the correct position immediately.
      setOffset(refBox.current.getBoundingClientRect().width);
    }
  }, []);

  return (
    <div style={containerStyle}>
      <div ref={refBox} style={referenceBoxStyle}>
        Reference Box (300px wide)
      </div>
      <div style={{ ...movedBoxStyle, transform: `translateX(${offset}px)` }}>
        Moved Box
      </div>
    </div>
  );
}

// Styles (without any transitions for clarity)
const containerStyle = {
  border: "1px solid #ccc",
  padding: "20px",
  position: "relative",
  height: "200px",
};

const referenceBoxStyle = {
  width: "300px",
  height: "100px",
  background: "lightblue",
  lineHeight: "100px",
  textAlign: "center",
};

const movedBoxStyle = {
  width: "100px",
  height: "100px",
  background: "orange",
  lineHeight: "100px",
  textAlign: "center",
  marginTop: "20px",
};
```

**Demo Output:**

![useLayoutEffect Demo](https://i.ibb.co/qMqRPP46/use-Layout-Effect-demo.gif)

---

## Conclusion

- **`useLayoutEffect`** is ideal for synchronously updating the DOM before the browser paints, ensuring a smooth UI without visual flicker.
- **`useEffect`** is best for side effects that can run after the UI has been rendered, keeping the initial paint fast.

Choose the appropriate hook based on your performance and UI update needs.

---
