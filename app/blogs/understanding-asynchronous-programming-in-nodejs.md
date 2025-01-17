## NodeJS

Node.js is a powerful, single-threaded JavaScript runtime designed for building server-side applications. While it operates on a single thread by design, Node.js is optimized to handle multiple threads for CPU-intensive tasks, ensuring smooth and non-blocking performance.

To help visualize how Node.js manages asynchronous operations, I’ve created the diagrams below. It offers a quick reference for revisiting the concept, but I encourage you to dive deeper into how Node.js orchestrates async tasks.

Node.js has two major components

- v8: JavaScript runtime
- libuv: C library that provides support for asynchronous I/O
  based on event loops.

cmd > `node index.js`

- when we run a file in node a main thread is created

---

### Main thread

This thread executes the code in this order:

- Top-level code: It executes module imports, object definitions, and variable declarations.
- Event Callbacks: Event callbacks get registered.
- Event Loop: The event loop is started to manage asynchronous operations.

### Thread pool

In addition to the main thread, Node.js utilizes a thread pool provided by libuv. These threads handle CPU-intensive tasks such as:

- File system operations (fs)
- Encryption
- Compression

By default, the thread pool contains four threads. However, it can be configured to include up to a maximum of 128 threads.

---

### Callback prioritization

The diagram below illustrates callback prioritization in Node.js:

![](https://i.ibb.co/qstpLRs/event-loop.png)
<br>

Node.js handles tasks through two primary systems:

**OS Handles:** Asynchronous, non-blocking tasks like network I/O,
timers, and non-blocking DNS lookups, thread management.

**libuv Thread Pool Handles:** Blocking or CPU-intensive tasks like file I/O,
blocking DNS lookups, cryptography, and compression.

---

### Life cycle of code execution in NodeJS

The following diagram showcases the life cycle of code execution in Node.js:

![](https://i.ibb.co/nz3VTZ2/node-task.png)

[Link to the diagrams](https://excalidraw.com/#json=iWVWJHpCfY__7d8Omaj3D,poeoXobigV1NTyTpJhx4AQ)
