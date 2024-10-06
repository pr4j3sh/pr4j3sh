---
title: CPP Web Server
description: CRUD Operations in C++ Using CppRestSDK
date: Oct 07 2024
---
CRUD (Create, Read, Update, Delete) operations are the foundation of any RESTful API. In this blog, we will explore how to implement CRUD operations using the CppRestSDK in C++. The `cpprestsdk` library allows us to easily build RESTful services and handle HTTP requests and responses.

We will build an API with the following endpoints:
- **GET** `/api/read` – For reading data.
- **POST** `/api/create` – For creating data.
- **PUT** `/api/update/{id}` – For updating data by ID.
- **DELETE** `/api/delete/{id}` – For deleting data by ID.

Checkout [source code](https://github.com/prajeshElEvEn/archives/tree/master/src/cpp/web/server).
## Setting Up the Project

First, you need to have `cpprestsdk` installed. You can install it on Arch using yay:

```bash
yay -S cpprestsdk
```
> [Source](https://github.com/microsoft/cpprestsdk)

Next, create a project directory and set up the necessary files. Here’s an example `main.cpp` file that implements the CRUD operations.

## 1. Handling GET Requests (Read Operation)

The GET request is used to read data from the server. In this example, the `GET` request at `/api/read` will return a JSON message indicating the server status.

```cpp
void handler_get(http_request req) {
    json::value res;

    if (req.request_uri().path() == U("/api/read")) {
        res[U("message")] = json::value::string(U("server online"));
        req.reply(status_codes::OK, res);
    } else {
        res[U("error")] =
            json::value::string(req.request_uri().path() + U(" not found"));
        req.reply(status_codes::NotFound, res);
    }
}
```

This function checks the request URI path and, if it matches `/api/read`, it replies with a JSON response. Otherwise, it returns a 404 error.

## 2. Handling POST Requests (Create Operation)

The POST request is used to create new data. At the `/api/create` endpoint, we accept a JSON body and return it in the response.

```cpp
void handler_post(http_request req) {
    json::value res;

    if (req.request_uri().path() == U("/api/create")) {
        req.extract_json()
            .then([=](json::value body) {
                json::value res;
                res[U("body")] = body;
                req.reply(status_codes::OK, res);
            })
            .wait();
    } else {
        res[U("error")] =
            json::value::string(req.request_uri().path() + U(" not found"));
        req.reply(status_codes::NotFound, res);
    }
}
```

The function uses `req.extract_json()` to extract the JSON body from the request and sends it back in the response with a status code of `200 OK`.

## 3. Handling PUT Requests (Update Operation)

The PUT request is used to update existing data. We will extract the ID from the request URI, extract the JSON body, and return both in the response.

```cpp
void handler_put(http_request req) {
    json::value res;
    auto path = req.request_uri().path();

    vector<utility::string_t> path_segments = uri::split_path(uri::decode(path));

    if (path_segments.size() == 3 && path_segments[0] == U("api") &&
        path_segments[1] == U("update")) {
        auto id = path_segments[2];

        req.extract_json()
            .then([=](json::value body) {
                json::value res;
                res[U("id")] = json::value::string(id);
                res[U("body")] = body;
                req.reply(status_codes::OK, res);
            })
            .wait();
    } else {
        res[U("error")] = json::value::string(path + U(" not found"));
        req.reply(status_codes::NotFound, res);
    }
}
```

Here, the PUT request extracts an `id` from the URL (`/api/update/{id}`) and the request body, then returns both in the response.

## 4. Handling DELETE Requests (Delete Operation)

The DELETE request is used to remove data. This endpoint extracts the ID from the URL and returns it to confirm deletion.

```cpp
void handler_del(http_request req) {
    json::value res;
    auto path = req.request_uri().path();

    vector<utility::string_t> path_segments = uri::split_path(uri::decode(path));

    if (path_segments.size() == 3 && path_segments[0] == U("api") &&
        path_segments[1] == U("delete")) {
        auto id = path_segments[2];
        res[U("id")] = json::value::string(id);
        req.reply(status_codes::OK, res);
    } else {
        res[U("error")] = json::value::string(path + U(" not found"));
        req.reply(status_codes::NotFound, res);
    }
}
```

This handler checks for the correct URI format and responds with the deleted ID if valid, or a 404 error otherwise.

## 5. Setting Up the Main Function

The main function initializes the HTTP listener and supports all the above methods (GET, POST, PUT, DELETE). It also listens for incoming requests and keeps the server running.

```cpp
int main(int argc, char *argv[]) {
    uri_builder uri(U("http://127.0.0.1:8000"));
    auto addr = uri.to_uri().to_string();
    http_listener listener(addr);

    listener.support(methods::GET, handler_get);
    listener.support(methods::POST, handler_post);
    listener.support(methods::PUT, handler_put);
    listener.support(methods::DEL, handler_del);

    try {
        listener.open()
            .then([&listener]() {
                cout << "server running @ " << listener.uri().to_string() << endl;
            })
            .wait();

        string line;
        getline(cin, line); // Keep the server running
    } catch (const exception &e) {
        cerr << "server error: " << e.what() << endl;
    }
    return 0;
}
```

## Testing the API

You can test this API using `curl` or Postman.

- **Read**: `GET http://127.0.0.1:8000/api/read`
- **Create**: `POST http://127.0.0.1:8000/api/create` with a JSON body.
- **Update**: `PUT http://127.0.0.1:8000/api/update/{id}` with a JSON body.
- **Delete**: `DELETE http://127.0.0.1:8000/api/delete/{id}`

### Conclusion

In this blog, we covered how to implement CRUD operations using `cpprestsdk` in C++. These operations are the core of any RESTful service, and CppRestSDK makes it easy to handle them. You can expand this base to build more complex APIs tailored to your needs.