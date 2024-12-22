---
title: Go Web Server
description: Building CRUD APIs with Go
date: Oct 07 2024
---

In this blog post, we will explore how to build a simple CRUD (Create, Read, Update, Delete) API using the Go programming language. This API will handle basic operations for managing data through HTTP requests. We will walk through the code step-by-step, explaining the components and functionality along the way.

Check out [source code](https://github.com/pr4j3sh/archives/tree/master/src/go/web/server)

## Prerequisites

Before we begin, make sure you have the following installed:

- **Go**: Download and install Go from [golang.org](https://golang.org/dl/).
- **A code editor**: Use any code editor of your choice, such as Visual Studio Code, GoLand, or even a simple text editor.

## Project Structure

We will create a single Go file named `server.go`, which will contain our API implementation. The project structure will look like this:

```
/your-project-directory
    ├── server.go
```

## The Code

Let's dive into the code. Below is the complete `server.go` file, which contains all the necessary handlers and the main function to run the server.

```go
package main

import (
 "encoding/json"
 "fmt"
 "net/http"
 "strings"
)

// Response structure for JSON responses
type Response struct {
 Message string `json:"message"`
 Body    string `json:"body"`
 Id      string `json:"id"`
}

// RequestBody structure for incoming requests
type RequestBody struct {
 Body string `json:"body"`
}
```

### 1. GET Handler

The GET handler responds to GET requests at `/api/read`. It sends a JSON response with a status message.

```go
// Handler for the GET request
func handlerGet(w http.ResponseWriter, r *http.Request) {
 if r.Method != http.MethodGet {
  http.Error(w, "invalid request method", http.StatusMethodNotAllowed)
  return
 }

 res := Response{Message: "online"}
 w.Header().Set("Content-Type", "application/json")
 if err := json.NewEncoder(w).Encode(res); err != nil {
  http.Error(w, "failed to encode response", http.StatusInternalServerError)
  return
 }
}
```

### 2. POST Handler

The POST handler handles POST requests at `/api/create`. It decodes the incoming JSON body and responds with a confirmation message.

```go
// Handler for the POST request
func handlerPost(w http.ResponseWriter, r *http.Request) {
 if r.Method != http.MethodPost {
  http.Error(w, "invalid request method", http.StatusMethodNotAllowed)
  return
 }

 var reqBody RequestBody

 if err := json.NewDecoder(r.Body).Decode(&reqBody); err != nil {
  http.Error(w, "invalid json", http.StatusBadRequest)
  return
 }

 res := Response{Message: "create", Body: reqBody.Body}
 w.Header().Set("Content-Type", "application/json")
 if err := json.NewEncoder(w).Encode(res); err != nil {
  http.Error(w, "failed to encode response", http.StatusInternalServerError)
 }
}
```

### 3. PUT Handler

The PUT handler processes PUT requests at `/api/update/{id}`. It updates a resource identified by the ID in the URL, responding with the updated message.

```go
// Handler for the PUT request
func handlerPut(w http.ResponseWriter, r *http.Request) {
 if r.Method != http.MethodPut {
  http.Error(w, "invalid request method", http.StatusMethodNotAllowed)
  return
 }

 id := strings.TrimPrefix(r.URL.Path, "/api/update/")

 var reqBody RequestBody

 if err := json.NewDecoder(r.Body).Decode(&reqBody); err != nil {
  http.Error(w, "invalid json", http.StatusBadRequest)
  return
 }

 res := Response{Message: "update", Body: reqBody.Body, Id: id}
 w.Header().Set("Content-Type", "application/json")
 if err := json.NewEncoder(w).Encode(res); err != nil {
  http.Error(w, "failed to encode response", http.StatusInternalServerError)
 }
}
```

### 4. DELETE Handler

The DELETE handler responds to DELETE requests at `/api/delete/{id}`. It responds with a confirmation message and the ID of the deleted resource.

```go
// Handler for the DELETE request
func handlerDel(w http.ResponseWriter, r *http.Request) {
 if r.Method != http.MethodDelete {
  http.Error(w, "invalid request method", http.StatusMethodNotAllowed)
  return
 }

 id := strings.TrimPrefix(r.URL.Path, "/api/delete/")

 res := Response{Message: "online", Id: id}
 w.Header().Set("Content-Type", "application/json")
 if err := json.NewEncoder(w).Encode(res); err != nil {
  http.Error(w, "failed to encode response", http.StatusInternalServerError)
  return
 }
}
```

### 5. Running the Server

In the `main` function, we set up the server to listen on `127.0.0.1:8000` and register our handlers for various endpoints. The `http.ListenAndServe` function starts the server, and it will continue running until it is stopped.

```go
// Main function to start the server
func main() {
 hostname := "127.0.0.1"
 port := "8000"
 address := fmt.Sprintf("%s:%s", hostname, port)

 message := fmt.Sprintf("server running @ http://%s", address)
 fmt.Println(message)

 http.HandleFunc("/api/read", handlerGet)
 http.HandleFunc("/api/create", handlerPost)
 http.HandleFunc("/api/update/", handlerPut)
 http.HandleFunc("/api/delete/", handlerDel)

 if err := http.ListenAndServe(address, nil); err != nil {
  fmt.Println("server error:", err)
 }
}
```

## Usage

Start the server by running the `go run` command:

```bash
go run server.go
```

## Testing the API

You can test the API using tools like **Postman** or **cURL**. Here are the example commands for testing the endpoints:

- **GET Request**:

  ```bash
  curl http://127.0.0.1:8000/api/read
  ```

- **POST Request**:

  ```bash
  curl -X POST http://127.0.0.1:8000/api/create -H "Content-Type: application/json" -d '{"body":"Hello, world!"}'
  ```

- **PUT Request**:

  ```bash
  curl -X PUT http://127.0.0.1:8000/api/update/1 -H "Content-Type: application/json" -d '{"body":"Updated message"}'
  ```

- **DELETE Request**:

  ```bash
  curl -X DELETE http://127.0.0.1:8000/api/delete/1
  ```

## Conclusion

In this blog post, we have built a simple CRUD API using Go, providing endpoints for creating, reading, updating, and deleting resources. The Go programming language, with its powerful built-in libraries, makes it easy to build efficient and high-performance web applications. You can extend this API further by integrating a database for persistent storage or adding authentication for security.

