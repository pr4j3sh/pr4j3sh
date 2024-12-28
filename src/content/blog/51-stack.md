---
title: Stack
description: A Dive into Stack data structure
date: Dec 16 2024
---

A **stack** is a linear data structure that follows the **Last In, First Out (LIFO)** principle. In a stack, the last element added (pushed) is the first one to be removed (popped). It is similar to a stack of plates, where you can only add or remove the top plate.

Stacks are used extensively in various algorithms and systems, such as expression evaluation, undo operations in applications, function call management, and more. Stacks can be implemented using arrays or linked lists, and their operations are simple but powerful.

### Stack Operations

A stack typically supports the following operations:

1. **Push:** Add an element to the top of the stack.
2. **Pop:** Remove the top element from the stack.
3. **Peek/Top:** View the top element without removing it from the stack.
4. **isEmpty:** Check if the stack is empty.
5. **Display:** Show the elements in the stack.

### Stack Using Linked List

While stacks can be implemented using arrays, using a linked list allows for dynamic memory allocation, meaning the size of the stack is not fixed. Each element in the stack is stored in a **node** that contains data and a reference (or pointer) to the next node.

Below is a C++ implementation of a stack using a singly linked list:

#### Example Code

```cpp
#include <iostream>
using namespace std;

// Node structure for the stack
struct Node {
    int data;
    Node* next;
};

// Function to create a new node
Node* createNode(int value) {
    Node* newNode = new Node();
    newNode->data = value;
    newNode->next = nullptr;
    return newNode;
}

// Function to push an element onto the stack
void push(Node*& top, int value) {
    Node* newNode = createNode(value);
    newNode->next = top; // Link the new node to the current top
    top = newNode; // Update the top pointer
    cout << value << " pushed onto the stack.\n";
}

// Function to pop an element from the stack
void pop(Node*& top) {
    if (top == nullptr) {
        cout << "Stack is empty. Cannot pop.\n";
        return;
    }
    Node* temp = top;
    top = top->next; // Move the top pointer to the next node
    cout << temp->data << " popped from the stack.\n";
    delete temp; // Free the memory of the popped node
}

// Function to display the stack elements
void display(Node* top) {
    if (top == nullptr) {
        cout << "Stack is empty.\n";
        return;
    }
    cout << "Stack elements (top to bottom): ";
    Node* temp = top;
    while (temp != nullptr) {
        cout << temp->data << " ";
        temp = temp->next;
    }
    cout << endl;
}

// Function to delete the entire stack
void deleteStack(Node*& top) {
    while (top != nullptr) {
        pop(top); // Repeatedly pop elements until the stack is empty
    }
    cout << "Stack deleted.\n";
}

int main() {
    Node* top = nullptr; // Initialize an empty stack

    // Push elements onto the stack
    push(top, 10);
    push(top, 20);
    push(top, 30);

    // Display the stack
    display(top);

    // Pop elements from the stack
    pop(top);
    display(top);

    // Delete the entire stack
    deleteStack(top);

    return 0;
}
```

### Explanation of the Code

1. **Node Structure:**  
   Each node in the stack contains two components: `data` (the value) and `next` (the pointer to the next node in the stack).

2. **Push Operation:**  
   The `push` function creates a new node, links it to the current top of the stack, and updates the `top` pointer to this new node.

3. **Pop Operation:**  
   The `pop` function removes the node at the top of the stack. It updates the `top` pointer to the next node and frees the memory of the popped node.

4. **Display Function:**  
   The `display` function traverses the stack from top to bottom and prints the values stored in each node.

5. **Delete Stack:**  
   The `deleteStack` function deletes all elements in the stack by repeatedly popping nodes until the stack is empty.

### Applications of Stacks

1. **Expression Evaluation:**  
   Stacks are often used to evaluate expressions, especially when dealing with postfix or infix expressions. Operators and operands are pushed onto the stack, and calculations are performed when operators are popped.

2. **Function Call Management (Call Stack):**  
   In programming languages, a call stack is used to keep track of function calls. When a function is called, its execution context is pushed onto the stack, and when it finishes, its context is popped off.

3. **Undo Mechanism:**  
   Applications like word processors use stacks to store changes. Each action (e.g., typing a word) is pushed onto the stack, and if the user wants to undo an action, the application pops the most recent action from the stack.

4. **Browser History:**  
   Stacks are used to manage the history of visited websites in a browser. The most recent page is pushed onto the stack, and the "Back" button pops the most recent page to navigate backward.

### Advantages of Stack

1. **Memory Efficiency:**  
   Stacks provide efficient memory usage since elements are added or removed dynamically, and only the most recent element is stored in memory.

2. **Simplicity:**  
   Stacks have a simple and intuitive LIFO structure, making them easy to implement and use.

3. **Constant Time Operations:**  
   Both `push` and `pop` operations are performed in constant time (O(1)), making stack operations fast.

### Limitations of Stack

1. **Limited Access:**  
   Stacks only allow access to the top element, making it difficult to retrieve or manipulate elements deeper in the stack.

2. **Fixed Size (in case of array-based implementation):**  
   If implemented using arrays, the size of the stack may need to be predefined, limiting the flexibility of the structure.

### Conclusion

The stack is a fundamental data structure that plays a critical role in many applications, from managing function calls to enabling efficient data processing in algorithms. Understanding how stacks work and implementing them in various ways—whether using arrays or linked lists—can provide a strong foundation for solving complex problems in computer science.
