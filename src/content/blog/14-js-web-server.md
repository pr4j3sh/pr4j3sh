---
title: JavaScript Web Server
description: Creating a Web Server with Express in Node.js
date: Oct 08 2024
---
In this blog, we will create a simple web server using Express.js that handles basic CRUD (Create, Read, Update, Delete) operations. Let’s walk through each step with code examples for each operation.

Check out [source code](https://github.com/pr4j3sh/archives/tree/master/src/js/server/server)
## 1. Install Node.js and Express

First, ensure that Node.js is installed on your system. Then, set up a new project by running the following commands:

```bash
mkdir server
cd server
npm init -y
```

Next, install Express using npm:

```bash
npm install express
```

## 2. Create the Web Server

Create a file named `server.js` in your project directory and add the following code:

```javascript
const express = require("express");

const port = 8000;
const hostname = "127.0.0.1";

const server = express();

server.use(express.json());
```

This sets up the Express server and enables it to handle JSON requests.

## 3. CRUD Operations

Now, let's implement each of the CRUD operations.

### 3.1. **READ Operation (`GET /api/read`)**

The `GET` request is used to retrieve data. In this case, we are simply returning a message indicating that the server is online.

```javascript
server.get("/api/read", (req, res) => {
  try {
    res.status(200).json({ message: "online" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: `${error.message}` });
  }
});
```

### 3.2. **CREATE Operation (`POST /api/create`)**

The `POST` request is used to create new data. Here, we accept a `body` parameter from the request and return it in the response.

```javascript
server.post("/api/create", async (req, res) => {
  try {
    const { body } = req.body;
    res.status(200).json({ message: "create", body });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: `${error.message}` });
  }
});
```

### 3.3. **UPDATE Operation (`PUT /api/update/:id`)**

The `PUT` request is used to update existing data. We accept an `id` as a parameter in the URL and a `body` in the request payload. Both are returned in the response after the update.

```javascript
server.put("/api/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req.body;
    res.status(200).json({ message: "update", body, id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: `${error.message}` });
  }
});
```

### 3.4. **DELETE Operation (`DELETE /api/delete/:id`)**

The `DELETE` request is used to remove existing data. We accept an `id` parameter in the URL and return a message confirming the deletion.

```javascript
server.delete("/api/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).json({ message: "delete", id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: `${error.message}` });
  }
});
```

## 4. Starting the Server

Now, let’s start the server using the following code:

```javascript
server.listen(port, hostname, () => {
  console.log(`server running @ http://${hostname}:${port}`);
});
```

To run the server, use the command:
```bash
node server.js
```

## 5. Making CRUD Requests

Once the server is running, you can test the CRUD operations using `curl` or tools like Postman.

### **GET Request:**
```bash
curl http://127.0.0.1:8000/api/read
```
Response:
```json
{ "message": "online" }
```

### **POST Request:**
```bash
curl -X POST -H "Content-Type: application/json" -d '{"body":"data"}' http://127.0.0.1:8000/api/create
```
Response:
```json
{ "message": "create", "body": "data" }
```

### **PUT Request:**
```bash
curl -X PUT -H "Content-Type: application/json" -d '{"body":"updated data"}' http://127.0.0.1:8000/api/update/1
```
Response:
```json
{ "message": "update", "body": "updated data", "id": "1" }
```

### **DELETE Request:**
```bash
curl -X DELETE http://127.0.0.1:8000/api/delete/1
```
Response:
```json
{ "message": "delete", "id": "1" }
```

## Conclusion

This blog demonstrated how to set up a basic web server using Express.js and implement CRUD operations. You can build upon this example to create more complex APIs for your web applications.