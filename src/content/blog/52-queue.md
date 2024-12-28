---
title: Queue
description: A Dive into Stack data structure
date: Dec 16 2024
---

A **queue** is a linear data structure that follows the **First In, First Out (FIFO)** principle. In a queue, the first element that is added (enqueued) is the first one to be removed (dequeued). It is analogous to a line of people at a ticket counter, where the person who has been waiting the longest is served first.

Queues are essential in many computing applications, such as scheduling tasks, managing processes in operating systems, and handling requests in networking. They can be implemented using arrays or linked lists.

### Queue Operations

A queue typically supports the following operations:

1. **Enqueue:** Adds an element to the rear (end) of the queue.
2. **Dequeue:** Removes an element from the front of the queue.
3. **Peek/Front:** Views the front element without removing it from the queue.
4. **isEmpty:** Checks if the queue is empty.
5. **Display:** Shows the elements in the queue.

### Queue Using Linked List

While queues can be implemented using arrays, a linked list implementation allows for dynamic memory allocation, meaning the size of the queue can grow or shrink without predefined limits. Each element in the queue is stored in a **node**, which contains data and a reference (or pointer) to the next node.

Below is a C++ implementation of a queue using a linked list:

#### Example Code

```cpp
#include <iostream>
using namespace std;

// Node structure for the queue
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

// Enqueue function to insert an element at the end of the queue
void enqueue(Node*& front, Node*& rear, int value) {
    Node* newNode = createNode(value);
    if (rear == nullptr) {
        // If the queue is empty, both front and rear point to the new node
        front = rear = newNode;
    } else {
        rear->next = newNode; // Link the new node at the end
        rear = newNode; // Update the rear pointer
    }
    cout << value << " enqueued to the queue.\n";
}

// Dequeue function to remove an element from the front of the queue
void dequeue(Node*& front, Node*& rear) {
    if (front == nullptr) {
        cout << "Queue is empty. Cannot dequeue.\n";
        return;
    }
    Node* temp = front;
    front = front->next; // Move the front pointer to the next node
    if (front == nullptr) {
        rear = nullptr; // If the queue becomes empty, set rear to null
    }
    cout << temp->data << " dequeued from the queue.\n";
    delete temp; // Free memory of the dequeued node
}

// Function to display the queue elements
void display(Node* front) {
    if (front == nullptr) {
        cout << "Queue is empty.\n";
        return;
    }
    Node* temp = front;
    cout << "Queue elements (front to rear): ";
    while (temp != nullptr) {
        cout << temp->data << " ";
        temp = temp->next;
    }
    cout << endl;
}

// Function to delete the entire queue
void deleteQueue(Node*& front, Node*& rear) {
    while (front != nullptr) {
        dequeue(front, rear); // Continuously dequeue elements until the queue is empty
    }
    cout << "Queue deleted.\n";
}

int main() {
    Node* front = nullptr; // Front pointer of the queue
    Node* rear = nullptr; // Rear pointer of the queue

    // Enqueue elements
    enqueue(front, rear, 10);
    enqueue(front, rear, 20);
    enqueue(front, rear, 30);

    // Display the queue
    display(front);

    // Dequeue elements
    dequeue(front, rear);
    display(front);

    // Delete the entire queue
    deleteQueue(front, rear);

    return 0;
}
```

### Explanation of the Code

1. **Node Structure:**  
   Each node in the queue contains two components: `data` (the value) and `next` (the pointer to the next node in the queue).

2. **Enqueue Operation:**  
   The `enqueue` function creates a new node, links it to the current rear of the queue, and updates the `rear` pointer to the new node. If the queue is empty, both the `front` and `rear` pointers point to the new node.

3. **Dequeue Operation:**  
   The `dequeue` function removes the node at the front of the queue. It updates the `front` pointer to the next node in the queue. If the queue becomes empty after dequeuing, both `front` and `rear` pointers are set to `nullptr`.

4. **Display Function:**  
   The `display` function traverses the queue from front to rear and prints the values stored in each node.

5. **Delete Queue:**  
   The `deleteQueue` function deletes all elements in the queue by repeatedly dequeuing nodes until the queue is empty.

### Applications of Queues

1. **Task Scheduling:**  
   Queues are used in operating systems to manage processes and tasks. Processes are scheduled based on their arrival times and are executed in a first-come, first-served manner.

2. **Buffering:**  
   Queues are used in buffering systems, such as in printers or network communication, where data is processed in the order it arrives.

3. **Breadth-First Search (BFS):**  
   In graph traversal algorithms like BFS, a queue is used to explore nodes level by level, ensuring that nodes are processed in the correct order.

4. **Real-Time Data Processing:**  
   Queues are used in real-time systems like messaging systems, where incoming messages are processed in the order they arrive.

5. **Call Center Management:**  
   In call centers, queues are used to manage incoming calls. The first call that arrives is the first to be answered, ensuring fairness in the service.

### Advantages of Queue

1. **Efficient Management:**  
   Queues allow for efficient management of tasks or elements, ensuring that operations follow a fair order (FIFO).

2. **Simplicity:**  
   Queues are easy to implement and use, making them suitable for a wide range of applications.

3. **Dynamic Size:**  
   When implemented using linked lists, queues can grow or shrink dynamically without requiring a predefined size, unlike array-based implementations.

### Limitations of Queue

1. **Limited Access:**  
   Queues only allow access to the front and rear elements, so elements in the middle cannot be accessed directly.

2. **Fixed Size (in case of array-based implementation):**  
   If implemented using arrays, the size of the queue may need to be predefined, limiting its flexibility.

### Conclusion

The queue is a crucial data structure in computer science and has a wide range of applications in task management, scheduling, and real-time processing. Whether implemented with arrays or linked lists, queues provide an efficient and simple way to manage data in a first-come, first-served manner. Understanding queues and their operations is essential for solving problems related to order and fairness in various systems.
