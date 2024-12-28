---
title: Linked Lists
description: A Dive into Linked List data structure
date: Dec 16 2024
---

A **linked list** is a linear data structure where elements, called **nodes**, are stored in non-contiguous memory locations. Unlike arrays, linked lists allow for dynamic memory allocation, making them flexible in handling varying amounts of data. Each node in a linked list contains two parts: the **data** and a **reference (or pointer)** to the next node in the sequence.

Linked lists are widely used for applications that require efficient insertion and deletion of elements, as these operations can be performed in constant time.

### Types of Linked Lists

1. **Singly Linked List**
2. **Doubly Linked List**
3. **Circular Linked List**

### Singly Linked List

In a **singly linked list**, each node points to the next node in the sequence, and the last node points to `nullptr`. This structure allows for easy traversal in one direction.

#### Operations in Singly Linked List

- **Insertion:** Add a node at the end.
- **Traversal:** Print all the elements from head to the end.
- **Deletion:** Remove all nodes from the list.

#### Example Code

```cpp
#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
};

Node* createNode(int value) {
    Node* newNode = new Node();
    newNode->data = value;
    newNode->next = nullptr;
    return newNode;
}

void insertNode(Node*& head, int value) {
    Node* newNode = createNode(value);
    if (head == nullptr) {
        head = newNode;
    } else {
        Node* temp = head;
        while (temp->next != nullptr) {
            temp = temp->next;
        }
        temp->next = newNode;
    }
}

void traverseList(Node* head) {
    Node* temp = head;
    while (temp != nullptr) {
        cout << temp->data << " ";
        temp = temp->next;
    }
    cout << endl;
}

void deleteList(Node*& head) {
    Node* temp;
    while (head != nullptr) {
        temp = head;
        head = head->next;
        delete temp;
    }
    cout << "List deleted.\n";
}

int main() {
    Node* head = nullptr;
    insertNode(head, 10);
    insertNode(head, 20);
    insertNode(head, 30);
    traverseList(head);
    deleteList(head);
    return 0;
}
```

### Doubly Linked List

A **doubly linked list** is similar to a singly linked list, except each node has two pointers: one pointing to the next node and one pointing to the previous node. This structure allows traversal in both directions.

#### Operations in Doubly Linked List

- **Insertion:** Add a node at the end, with both next and previous pointers updated.
- **Traversal:** Print all elements both forward and backward.
- **Deletion:** Remove all nodes from the list, updating pointers accordingly.

#### Example Code

```cpp
#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
    Node* prev;
};

Node* createNode(int value) {
    Node* newNode = new Node();
    newNode->data = value;
    newNode->next = nullptr;
    newNode->prev = nullptr;
    return newNode;
}

void insertNode(Node*& head, int value) {
    Node* newNode = createNode(value);
    if (head == nullptr) {
        head = newNode;
    } else {
        Node* temp = head;
        while (temp->next != nullptr) {
            temp = temp->next;
        }
        temp->next = newNode;
        newNode->prev = temp;
    }
}

void traverseListForward(Node* head) {
    Node* temp = head;
    while (temp != nullptr) {
        cout << temp->data << " ";
        temp = temp->next;
    }
    cout << endl;
}

void traverseListBackward(Node* head) {
    Node* temp = head;
    while (temp->next != nullptr) {
        temp = temp->next;
    }
    while (temp != nullptr) {
        cout << temp->data << " ";
        temp = temp->prev;
    }
    cout << endl;
}

void deleteList(Node*& head) {
    Node* temp;
    while (head != nullptr) {
        temp = head;
        head = head->next;
        delete temp;
    }
    cout << "List deleted.\n";
}

int main() {
    Node* head = nullptr;
    insertNode(head, 10);
    insertNode(head, 20);
    insertNode(head, 30);
    traverseListForward(head);
    traverseListBackward(head);
    deleteList(head);
    return 0;
}
```

### Circular Linked List

A **circular linked list** is a variation where the last node in the list points back to the first node, forming a loop. This can be either a singly or doubly linked list, with a circular structure.

#### Operations in Circular Linked List

- **Insertion:** Add a node at the end, ensuring the last node points to the head.
- **Traversal:** Print all elements until the head is encountered again.
- **Deletion:** Remove all nodes from the list, ensuring the circular link is broken.

#### Example Code

```cpp
#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
};

Node* createNode(int value) {
    Node* newNode = new Node();
    newNode->data = value;
    newNode->next = nullptr;
    return newNode;
}

void insertNode(Node*& head, int value) {
    Node* newNode = createNode(value);
    if (head == nullptr) {
        head = newNode;
        newNode->next = head;
    } else {
        Node* temp = head;
        while (temp->next != head) {
            temp = temp->next;
        }
        temp->next = newNode;
        newNode->next = head;
    }
}

void traverseList(Node* head) {
    if (head == nullptr) {
        cout << "List is empty.\n";
        return;
    }
    Node* temp = head;
    do {
        cout << temp->data << " ";
        temp = temp->next;
    } while (temp != head);
    cout << endl;
}

void deleteList(Node*& head) {
    if (head == nullptr) {
        cout << "List is already empty.\n";
        return;
    }
    Node* temp = head;
    Node* nextNode;
    do {
        nextNode = temp->next;
        delete temp;
        temp = nextNode;
    } while (temp != head);
    head = nullptr;
    cout << "Circular linked list deleted.\n";
}

int main() {
    Node* head = nullptr;
    insertNode(head, 10);
    insertNode(head, 20);
    insertNode(head, 30);
    traverseList(head);
    deleteList(head);
    return 0;
}
```

### Advantages of Linked Lists

1. **Dynamic Size:** Unlike arrays, linked lists do not require a predefined size.
2. **Efficient Insertions/Deletions:** Insertion and deletion can be performed in constant time (O(1)) if the pointer to the node is known.
3. **Memory Efficient:** Memory is allocated only when needed, as opposed to arrays which require a fixed amount of memory upfront.

### Limitations of Linked Lists

1. **Sequential Access:** Linked lists are not efficient for random access; you must traverse from the head to access a specific node.
2. **Extra Memory:** Each node requires extra memory for storing the pointer/reference to the next node.

### Conclusion

Linked lists are powerful data structures that provide flexibility and efficiency for dynamic memory allocation and manipulation of data. Whether it’s a singly, doubly, or circular linked list, understanding how they work is essential for solving complex problems that require efficient insertions, deletions, and memory management.
