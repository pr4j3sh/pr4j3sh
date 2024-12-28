---
title: JavaScript
description: A Dive into JavaScript
date: Dec 17 2024
---

JavaScript (JS) is one of the most versatile and widely used programming languages today. As an implementation of the ECMAScript standard, it enables interactive web development and runs in various environments, including browsers and Node.js. With its multi-paradigm nature, JavaScript allows developers to use procedural, object-oriented, and functional programming approaches seamlessly.

### Writing Your First JavaScript Program

A simple "Hello, World!" in JavaScript:

```javascript
console.log("Hello, World!");
```

To run this, include it in an HTML file using `<script>` or use a JavaScript runtime like Node.js:

```bash
node hello.js
```

### The Three Pillars of JavaScript

#### Scopes

Scope defines where variables and functions can be accessed. JavaScript has two main types of scope:

- **Global Scope:** Variables declared outside any function or block are globally accessible.
- **Local Scope:** Variables declared inside a block (using `let` or `const`) or a function are limited to that context.

```javascript
let globalVar = "I am global";
function demo() {
  let localVar = "I am local";
  console.log(globalVar); // Accessible
  console.log(localVar); // Accessible
}
console.log(globalVar); // Accessible
// console.log(localVar); // Error: Not defined
```

#### Objects

Objects in JavaScript are unordered collections of key-value pairs, allowing access by keys.

```javascript
let obj = { name: "JS", type: "language" };
console.log(obj.name); // "JS"
console.log(obj["type"]); // "language"
```

Arrays are a special type of object, using numeric indices to access values:

```javascript
let arr = [1, "hello", true];
console.log(arr[0]); // 1
console.log(typeof arr); // "object"
```

#### Types

JavaScript values are categorized into two types:

- **Primitive Types:** Number, String, Boolean, Null, Undefined, BigInt, and Symbol.
- **Objects:** Includes arrays, functions, and custom objects.

```javascript
console.log(typeof 42); // "number"
console.log(typeof "abc"); // "string"
console.log(typeof null); // "object" (historical bug)
console.log(typeof [1, 2, 3]); // "object"
console.log(typeof function () {}); // "function"
```

JavaScript also supports **coercion**, which is the conversion of one type to another:

```javascript
let num = "42";
let converted = Number(num); // Explicit coercion
console.log(+"42"); // Implicit coercion
```

### Conditionals

Conditionals in JavaScript use `if`, `else if`, and `else`.

```javascript
let value = 10;
if (value > 0) {
  console.log("Positive number");
} else if (value < 0) {
  console.log("Negative number");
} else {
  console.log("Zero");
}
```

### Loops

JavaScript provides `for`, `while`, and `do-while` loops.

```javascript
// For loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// While loop
let x = 5;
while (x > 0) {
  console.log(x);
  x--;
}

// Do-while loop
let y = 3;
do {
  console.log(y);
  y--;
} while (y > 0);
```

### Functions

Functions in JavaScript are defined using the `function` keyword or as arrow functions.

```javascript
// Function declaration
function greet(name) {
  return `Hello, ${name}!`;
}

// Arrow function
const add = (a, b) => a + b;

console.log(greet("JavaScript")); // Hello, JavaScript!
console.log(add(5, 10)); // 15
```

### Additional Features

- **BigInt:** Supports arbitrarily large numbers:

  ```javascript
  let bigNumber = 123456789012345678901234567890n;
  console.log(typeof bigNumber); // "bigint"
  ```

- **Symbols:** Unique and immutable values, often used as object keys:

  ```javascript
  let sym = Symbol("key");
  console.log(typeof sym); // "symbol"
  ```

### Conclusion

JavaScript is a dynamic, multi-paradigm language that continues to evolve with new features and standards. Its focus on flexibility, combined with its rich ecosystem, makes it a cornerstone of modern web development. Understanding its foundational concepts such as scopes, objects, and types is key to mastering this powerful language.
