Many times, we use things in our code simply because we’ve seen someone else do it or read that it’s the "right way"—without fully understanding why. This happens a lot with React hooks, especially with `useRef()`.

Most people know `useRef()` for its ability to access and manipulate DOM elements directly. But there’s more to `useRef()` than meets the eye. In this post, I’ll explain its broader use cases and how understanding its logic can help you use it effectively.

## The Core Idea of `useRef()`

When you use `useRef()`, you’re essentially working with a **persistent reference**. Unlike state, updating a ref doesn’t cause a component to re-render, which makes it ideal for cases where you need to track values between renders without triggering a re-render.

Let’s dive into an example to understand why `useRef()` can be so useful.

## Example: Handling "Stale" State in Event Handlers

Consider this scenario where you want to update a shape selection on a canvas. Take a look at the code below:

```javascript
canvas.on("selection:created", (e) => {
  const selectedObject = e.selected?.[0];
  if (selectedObject) {
    const shape = shapes.find((s) => s === selectedObject);
    setSelectedShape(shape);
  }
});
```

Now, suppose we have a function to add shapes to our canvas:

```javascript
function handleAddShape() {
  const id = uuidv4();
  const rect = addRect(id, "yellow");
  setShapes((prev) => [...prev, rect]);
}
```

In this example, every time a shape is selected on the canvas, the event updates the `selectedShape` state with the shape that has been selected.

### The Problem

The `shapes` array remains empty inside the event callback even if `shapes` has been updated with new shapes.

**Why does this happen?** When we register our event handler, the callback for that event has access to the `shapes` array as it was when the handler was first created. At that time, `shapes` was an empty array.

When `handleAddShape()` gets called, the `shapes` state updates and our component re-renders. However, the event listener on `canvas` doesn’t re-create itself with each render. It was created only once on component mount.

So, as our component re-renders, a new version of the `shapes` array is created. The original `shapes` array, which the canvas callback still references, is now outdated or “stale.” Each update to the state creates a new state value that the callback can’t access.

### The Solution: Using `useRef()` to Avoid Stale State

This is where `useRef()` can come to the rescue. If we define `shapes` as a ref instead of a state, it won’t cause the component to re-render each time we update `shapes`. Since refs don’t cause re-renders, they provide a consistent reference that remains available across renders.

Here’s the updated code using `useRef()`:

```javascript
const shapesRef = useRef([]);
canvas.on("selection:created", (e) => {
  const selectedObject = e.selected?.[0];
  if (selectedObject) {
    const shape = shapesRef.current.find((s) => s === selectedObject);
    setSelectedShape(shape || null);
  }
});

function handleAddShape() {
  const id = uuidv4();
  const rect = addRect(id, "yellow");
  shapesRef.current.push(rect);
}
```

Take a look at the image below for a visual comparison to help understand the difference between state and refs with respect to the above code sample.

![](https://i.ibb.co/VYgMy9b/useRef.png)
<br>

---

### Takeaway

You should use the `useRef()` hook when you want to persist the reference to an object or array without triggering re-renders. This allows the component to hold onto the reference without creating a new state object on each render, keeping everything in sync with event handlers or other parts of the component that don’t need to re-render.
