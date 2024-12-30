---
title: Event Loop
description: Asynchronous Programming in Javascript
date: Dec 30 2024
---

JavaScript is a **single-threaded, non-blocking, asynchronous, and concurrent language**. Here’s a quick breakdown of how it works:

- **Single-threaded**: JavaScript has one call stack, meaning it executes one task at a time.
- **Non-blocking**: Slow operations (e.g., I/O tasks) are delegated to Web APIs (browser) or C++ APIs (Node.js) and handled asynchronously.
- **Asynchronous**: Once these operations complete, their callbacks are queued for execution.

Key components include the **call stack**, **event loop**, **callback queue**, and **other APIs** like Web APIs (browser) or C++ APIs (Node.js). The **V8 engine** provides the heap (for memory) and call stack.

### Example

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Timeout Callback");
}, 1000);

console.log("End");
```

#### Explanation

1. **Synchronous Execution**:

   - `console.log("Start")` runs immediately and logs "Start".
   - `setTimeout` schedules a callback after 1000ms and delegates it to Web APIs.
   - `console.log("End")` runs next and logs "End".

2. **Callback Execution**:
   - After 1000ms, the callback is moved to the callback queue.
   - The event loop checks the call stack. If it’s empty, the callback is pushed to the call stack and executed.

#### Output

```
Start
End
Timeout Callback
```

This mechanism ensures JavaScript handles tasks efficiently while maintaining non-blocking behavior, making it ideal for scalable, responsive applications.
