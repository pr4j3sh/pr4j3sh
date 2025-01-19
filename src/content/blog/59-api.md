---
title: API
description: Application Program Interface
date: Jan 18 2025
draft: true
---

Mechanism that enables two software components to communicate with each other using a set of definitions and protocols

what does an api look like

```
https://dogapi.dog/api/v2/facts
```

> is a REST api, uses HTTPS protocol, gives off JSON data

let's try getting data off of the api

```bash
curl https://dogapi.dog/api/v2/facts
```

types of apis we'll cover

- http
- websocket
- soap
- grpc
- ftp
- library

http includes

- graphql
  query language for apis and a runtime for executing those queries
  developed by facebook
  no under fetching, over fetching
  fetch only the data required
  graphql service is created by defining types and fields and a function for each field
  on the client side we just make a query

  ```graphql
  {
    user {
      name
    }
  }
  ```

  ```json
  {
    "data": {
      "user": {
        "name": "Prajesh"
      }
    }
  }
  ```

  schemas and types
  object types

  ```
  type Foo {
    bar: String!
    foos: [Bars!]!
  }
  ```

  `String` is a scalar type
  `Foo` is a object type
  `bar` is a field of `Foo`
  `String!` means non null type - will always supposed to return a value
  `[Bars!]!` is a non null list

  every object type can have zero or more arguments

- rest
