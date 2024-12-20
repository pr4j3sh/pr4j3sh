---
title: JavaScript
description: A Dive into JavaScript
date: Dec 17 2024
draft: true
---
three pillars
- scopes
- objects
- types
JS is an implementation of the ECMAScript standard (version ES2019 as of this writing), which is guided by the TC39 committee and hosted by ECMA. It runs in browsers and other JS environments such as Node.js.

JS is a multi-paradigm language, meaning the syntax and capabilities allow a developer to mix and match (and bend and reshape!) concepts from various major paradigms, such as procedural, object-oriented (OO/classes), and functional (FP).

JS is a compiled language, meaning the tools (including the JS engine) process and verify a program (reporting any errors!) before it executes.

Values come in two forms in JS: primitive and object.

bigint (big-integer) primitive type, which is used for storing arbitrarily large numbers.
JS array indices are 0-based
In addition to strings, numbers, and booleans, two other primitive values in JS programs are null and undefined
final primitive value to be aware of is a symbol, Symbols are almost exclusively used as special keys on objects

arrays are a special type of object 
arrays can hold any value type, either primitive or object (including other arrays), even functions

Objects are an unordered, keyed collection of any various values. In other words, you access the element by a string location name (aka "key" or "property") rather than by its numeric position (as with arrays).

```js
typeof 42;                  // "number"
typeof "abc";               // "string"
typeof true;                // "boolean"
typeof undefined;           // "undefined"
typeof null;                // "object" -- oops, bug!
typeof { "a": 1 };          // "object"
typeof [1,2,3];             // "object"
typeof function hello(){};  // "function"
```

Converting from one value type to another, such as from string to number, is referred to in JS as "coercion".

https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/ch2.md#declaring-and-using-variables