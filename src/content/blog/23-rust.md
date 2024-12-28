---
title: Rust
description: A dive into Rust Programming Language
date: Nov 24 2024
---

Rust is a modern, fast, and memory-safe programming language designed for performance and reliability. It’s widely used for system programming, web development, and embedded systems. This blog introduces some of the basics of Rust, including writing your first program, working with variables, and understanding its core features.

### Writing Your First Rust Program

A simple "Hello, World!" program in Rust looks like this:

```rust
fn main() {
    println!("Hello, world!");
}
```

### How to Compile and Run

1. **Install Rust:** Download and install Rust using [rustup](https://rustup.rs).
2. **Compile:** Save your code in a file, e.g., `main.rs`, and compile it using the `rustc` command:

   ```
   rustc main.rs
   ```

3. **Run:** Execute the compiled binary:

   ```
   ./main
   ```

### Variables in Rust

Rust variables are immutable by default but can be made mutable with the `mut` keyword.

```rust
fn main() {
    let x = 10; // Immutable variable
    let mut y = 20; // Mutable variable
    println!("x = {}, y = {}", x, y);
    y = 30; // Allowed because y is mutable
    println!("Updated y = {}", y);
}
```

### Declaration and Types

Rust uses strong typing and allows explicit or inferred type declarations.

```rust
fn main() {
    let integer: i32 = 42; // Explicit type
    let float = 3.14; // Type inferred as f64
    let boolean = true; // Type inferred as bool
    let character = 'R'; // Type inferred as char
    println!("{}, {}, {}, {}", integer, float, boolean, character);
}
```

### Conditionals

Rust supports conditional statements like `if`, `else if`, and `else`.

```rust
fn main() {
    let number = 10;
    if number > 0 {
        println!("Positive number");
    } else if number < 0 {
        println!("Negative number");
    } else {
        println!("Zero");
    }
}
```

### Loops

Rust provides three types of loops: `loop`, `while`, and `for`.

```rust
fn main() {
    // Infinite loop
    let mut count = 0;
    loop {
        count += 1;
        if count > 5 {
            break;
        }
        println!("Loop count: {}", count);
    }

    // While loop
    let mut x = 3;
    while x > 0 {
        println!("Countdown: {}", x);
        x -= 1;
    }

    // For loop
    for i in 1..5 { // Exclusive of 5
        println!("For loop iteration: {}", i);
    }
}
```

### Functions

Functions in Rust are defined using the `fn` keyword.

```rust
fn main() {
    greet("Rust");
    let sum = add(5, 10);
    println!("Sum is: {}", sum);
}

// Function with a parameter
fn greet(language: &str) {
    println!("Hello, {}!", language);
}

// Function with a return value
fn add(a: i32, b: i32) -> i32 {
    a + b // No semicolon for the return expression
}
```

### Conclusion

Rust’s syntax is clean and straightforward, making it an excellent choice for both beginners and experienced developers. Its focus on safety and performance ensures reliable and efficient programs. Explore more about Rust by experimenting with these concepts and building your own projects!
