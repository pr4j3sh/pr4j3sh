---
title: codengine
description: Multiple Programming Languages Execution Server
date: Aug 12 2024
demoURL: https://hub.docker.com/r/pr4j3sh/codengine
repoURL: https://github.com/pr4j3sh/codengine
draft: false
---
**Codengine** is a robust platform designed to compile and execute code in multiple programming languages effortlessly. Built on top of the [Codengine-Core](https://hub.docker.com/r/pr4j3sh/codengine-core) container, it simplifies the development and testing process by providing a ready-to-use API-driven solution for running code across a variety of languages.


## **Key Features**

- Supports 10 popular programming languages, including JavaScript, Python, Rust, and Java.  
- Containerized with Docker for consistent and reliable performance.  
- Easy-to-use REST API for submitting and executing code.  
- Lightweight, fast, and scalable for individual or team projects.  


## **Supported Languages**

Codengine supports the following programming languages:  

- JavaScript  
- TypeScript  
- Python  
- Java  
- Perl  
- Ruby  
- Rust  
- Lua  
- C++  
- C  


## **Getting Started**

### **Pre-requisites**

To use Codengine, ensure you have [Docker](https://www.docker.com/get-started/) installed on your system.


### **Running Codengine**

1. Pull and run the Codengine Docker container:  

   ```bash
   docker run -p 5000:5000 pr4j3sh/codengine:1.0.3
   ```

2. Codengine will start a server on `http://127.0.0.1:5000`.


## **How to Use Codengine**

Codengine exposes REST API endpoints for compiling and executing code. Here’s how you can use it:

### **Example Request**

Use `curl` to send a POST request to an API endpoint:  

```bash
curl -X POST http://127.0.0.1:5000/api/output/js \
-H "Content-Type: application/json" \
-d '{"code": "console.log(\"Hello, Codengine!\")"}'
```

### **Example Response**

```json
{
  "output": "Hello, Codengine!\n",
  "success": true
}
```


## **API Endpoints**

Each endpoint corresponds to a specific programming language. You can send raw code as a JSON payload to any of these endpoints:  

- `/api/output/js` - JavaScript  
- `/api/output/ts` - TypeScript  
- `/api/output/py` - Python  
- `/api/output/java` - Java  
- `/api/output/pl` - Perl  
- `/api/output/rb` - Ruby  
- `/api/output/rs` - Rust  
- `/api/output/lua` - Lua  
- `/api/output/cpp` - C++  
- `/api/output/c` - C  


## **JSON Payload Structure**

Every request to Codengine should include a JSON payload with the following structure:  

```json
{
  "code": "Your code here"
}
```


## **Why Choose Codengine?**

- **Ease of Use**: Quickly execute code with simple API calls.  
- **Multi-Language Support**: Run code in different programming languages on a single platform.  
- **Containerized Environment**: Built on Docker for consistency and portability.  
- **Flexible Integration**: Use Codengine in web apps, CI/CD pipelines, and more.  


## **References**

- [Codengine-Core on Docker Hub](https://hub.docker.com/r/pr4j3sh/codengine-core)  
- [Docker Documentation](https://docs.docker.com/)  
- [ExpressJS Documentation](https://expressjs.com/)  

Experience the simplicity of compiling and executing code with **Codengine**. Try it today.
