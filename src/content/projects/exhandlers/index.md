---
title: exhandlers
description: A Utility Middleware Package for Express.js
date: Nov 03 2024
demoURL: https://www.npmjs.com/package/exhandlers
repoURL: https://github.com/pr4j3sh/exhandlers
---
When building web applications using Express.js, handling common tasks such as error handling, logging, and API request management can become repetitive and time-consuming. To simplify this process, I created an npm package called **exhandlers**, which bundles several utility middlewares that make it easier to manage these core aspects of an Express.js application. 

In this blog post, I’ll walk you through the core features of **exhandlers**, explain the problem it solves, and show you how to use it in your Express applications.

## The Problem: Repetitive and Tedious Middleware Setup

As an Express.js developer, you often need to set up middleware to handle the following scenarios:

- **CORS (Cross-Origin Resource Sharing)**: Enabling your API to be accessed from different domains.
- **Request Logging**: Logging incoming requests for debugging and monitoring.
- **Async Error Handling**: Wrapping async routes in try-catch blocks to catch errors and handle them properly.
- **Error Handling**: Providing a standardized way to catch and respond to errors in your application.
- **Not Found**: Handling 404 errors for undefined routes.

Setting these up for each project or even each route can be cumbersome. This is where **exhandlers** comes in — a utility package that bundles these middlewares into one easy-to-use package, saving time and improving code consistency.

## **exhandlers** Solution

The **exhandlers** package provides a set of utility handlers that streamline Express.js middleware configuration. The package includes:

- **CORS Handler** (`corsHandler`): Easily enable Cross-Origin Resource Sharing in your application.
- **Log Handler** (`logHandler`): Logs incoming requests with method, URL, and timestamp for easy tracking.
- **Async Handler** (`asyncHandler`): Ensures async functions are properly wrapped to catch errors automatically.
- **Error Handler** (`errorHandler`): A centralized function to handle errors in a consistent manner across your app.
- **Not Found Handler** (`notFoundHandler`): Catches requests to undefined routes and returns a standardized 404 error response.

Together, these handlers solve the problem of boilerplate code, ensuring that your middleware setup is clean, consistent, and reusable.

## Key Features of **exhandlers**

### 1. **CORS Handler**
Cross-origin issues are common when building APIs, especially when frontend and backend are served from different domains. The `corsHandler` middleware handles this for you, so you don't have to manually configure it each time.

```javascript
const { corsHandler } = require('exhandlers');

app.use(corsHandler());
```

```.env
ALLOWED_ORIGINS="http://localhost:5000, http://localhost:8000"
```
> In a `.env` file put allowed origins as comma separated values in a string variable names `"ALLOWED_ORIGINS"`
### 2. **Log Handler**
Logging requests is crucial for monitoring and debugging. The `logHandler` middleware logs details about each incoming request — the method, URL, and timestamp — making it easy to track activity in your application.

```javascript
const { logHandler } = require('exhandlers');

app.use(logHandler);
```

### 3. **Async Handler**
When dealing with async functions, it’s easy to forget to handle errors properly. The `asyncHandler` middleware simplifies this by wrapping async routes and automatically catching errors, reducing the need for repetitive try-catch blocks.

```javascript
const { asyncHandler } = require('exhandlers');

app.get('/api/data', asyncHandler(async (req, res, next) => {
  // Async code here...
}));
```

### 4. **Error Handler**
Instead of manually setting up error-handling middleware for every route, the `errorHandler` middleware standardizes how errors are caught and responded to. It ensures that any unhandled errors are neatly formatted and sent to the client.

```javascript
const { errorHandler } = require('exhandlers');

app.use(errorHandler);
```

### 5. **Not Found Handler**
The `notFoundHandler` middleware helps catch any requests to undefined routes and sends a standardized 404 error response, preventing unnecessary confusion or unhandled requests.

```javascript
const { notFoundHandler } = require('exhandlers');

app.use(notFoundHandler;
```

## Why Should You Use **exhandlers**?

### **Simplifies Middleware Setup**
By consolidating multiple essential middlewares into one package, **exhandlers** removes the need to write boilerplate code for each new Express.js application. It streamlines the process, allowing you to focus on writing the logic for your app, not the repetitive setup tasks.

### **Improves Code Consistency**
Having a single, standardized approach to error handling, logging, and request management makes your codebase more maintainable. With **exhandlers**, you don’t have to worry about inconsistencies in how you handle requests or errors across different routes.

### **Faster Development**
With pre-configured solutions for common problems like CORS, logging, and error handling, **exhandlers** accelerates the development process. It gives you more time to focus on building features rather than configuring middleware.

## How to Install and Use **exhandlers**

1. **Installation**

First, install the package from npm:

```bash
npm install exhandlers
```

2. **Usage Example**

Here’s a quick example of how to use all the middlewares provided by **exhandlers** in an Express.js application:

```javascript
const express = require('express');
const { corsHandler, logHandler, asyncHandler, errorHandler, notFoundHandler } = require('exhandlers');

const app = express();

// Use middleware
app.use(corsHandler());
app.use(logHandler);

// Define your routes
app.get('/api/data', asyncHandler(async (req, res, next) => {
  // Simulate fetching data asynchronously
  const data = await getDataFromDatabase();
  res.json(data);
}));

// Catch all undefined routes
app.use(notFoundHandler);

// Error handling middleware
app.use(errorHandler);

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

```.env
ALLOWED_ORIGINS="http://localhost:5000, http://localhost:8000"
```
## Conclusion

In summary, **exhandlers** provides an easy and consistent way to manage common tasks in Express.js applications, such as handling CORS, logging requests, and managing errors. By reducing repetitive middleware code, it helps you build faster and cleaner applications, making development more efficient.

Try out **exhandlers** today and streamline your Express.js projects!