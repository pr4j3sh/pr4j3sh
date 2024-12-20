---
title: Software Design
description: A Dive into Software Design
date: Dec 18 2024
draft: true
---
Clarity: The code should be easy to read and understand.
Simplicity: The code should be as simple as possible, avoiding unnecessary complexity.
Comments: Comments should be used sparingly and only when necessary to explain complex or non-obvious code.
Naming: Variables, functions, and classes should have meaningful and descriptive names.
Formatting: The code should be consistently formatted to improve readability.
Functionality: The code should be organized into small, single-purpose functions and classes.
Error handling: The code should handle errors in a consistent and predictable way.
Testing: The code should be testable and have a high test coverage.
Reusability: The code should be designed to be reusable and modular.
Performance: The code should be designed to be efficient and performant.

be consistent - using established design principles
variable naming - use _ as prefix for private vars, caps for constants
Code style refers to the conventions and guidelines used to format and structure code, such as naming conventions, commenting, and use of whitespace.
consistent indentation and code style can help to make the code more readable and understandable - improves maintability
camelCase, PascalCase, snake_case, and kebab-case.
design and implement small, focused components that serve a specific purpose
pure functions - takes args, return a val
Minimize Cyclomatic Complexity
 separating the application’s code from the framework’s code
 organization of the code into classes or files or components or modules
 business rules - core functionality
 If you have a performance problem, your system is slow for a single user.
If you have a scalability problem, your system is fast for a single user but slow under heavy load.
cap theorem
- c - consistency
- a - availability
- p - partition tolerance
Scalability is being able to handle large amounts of users/data/traffic. Performance is about speed.
