---
title: Ruby Web Server
description: Creating a Web Server with Ruby on Rails
date: Oct 08 2024
---
In this blog, we'll walk through creating a simple web server using Ruby on Rails that handles basic CRUD operations with HTTP methods. This includes `GET`, `POST`, `PUT`, and `DELETE` requests.

## 1. Install Ruby on Rails

Before we begin, ensure that Ruby on Rails is installed. You can install it using the following command:
```bash
gem install rails
```

## 2. Create a New Rails Project

To start, create a new Rails project named `server` by running:
```bash
rails new server
```

This command sets up a basic Rails project.

## 3. Create API Controller

Next, we create a controller to handle our API requests. Navigate to `app/controllers` and create a file `api_controller.rb`:

```ruby
class ApiController < ApplicationController
  skip_before_action :verify_authenticity_token

  def get
    render json: {message: "online"}
  end

  def post
    body = params.require(:api)
    render json: {message: "create", body: body}
  end

  def put
    id = params[:id]
    body = params.require(:api)
    render json: {message: "update", body: body, id: id}
  end

  def delete
    id = params[:id]
    render json: {message: "delete", id: id}
  end
end
```

This controller defines methods to handle various HTTP requests:
- `get`: Responds with an "online" message.
- `post`: Accepts JSON data and returns it in the response.
- `put`: Accepts an ID and JSON data, then returns both.
- `delete`: Accepts an ID and returns it.

## 4. Configure Routes

Now, we map the routes for the API endpoints. Open `config/routes.rb` and add the following lines:

```ruby
Rails.application.routes.draw do
  get "api/read", to: 'api#get'
  post "api/create", to: 'api#post'
  put "api/update/:id", to: 'api#put'
  delete "api/delete/:id", to: 'api#delete'
end
```

These routes map the `GET`, `POST`, `PUT`, and `DELETE` requests to their respective controller actions.

## 5. Start the Server

Run the Rails server:
```bash
rails server
```

This starts the web server, which listens on `http://127.0.0.1:3000`.

## 6. Make Requests

You can now make requests to the following endpoints:

- **GET request**:
  ```bash
  curl http://127.0.0.1:3000/api/read
  ```
  Response:
  ```json
  { "message": "online" }
  ```

- **POST request**:
  ```bash
  curl -X POST -d "api[example]=data" http://127.0.0.1:3000/api/create
  ```
  Response:
  ```json
  { "message": "create", "body": { "example": "data" } }
  ```

- **PUT request**:
  ```bash
  curl -X PUT -d "api[example]=updated_data" http://127.0.0.1:3000/api/update/1
  ```
  Response:
  ```json
  { "message": "update", "body": { "example": "updated_data" }, "id": "1" }
  ```

- **DELETE request**:
  ```bash
  curl -X DELETE http://127.0.0.1:3000/api/delete/1
  ```
  Response:
  ```json
  { "message": "delete", "id": "1" }
  ```

With these steps, you've successfully created a web server using Ruby on Rails that handles basic API requests.