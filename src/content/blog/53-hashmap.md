---
title: Hashmap
description: A Dive into Hashmap data structure
date: Dec 16 2024
---

A **hash table** (also known as a **hash map**) is a data structure that provides efficient storage and retrieval of key-value pairs. It allows for **constant time complexity** (O(1)) on average for both **insertion** and **searching** operations, making it one of the most efficient data structures for certain use cases.

A hash table works by using a **hash function** to map keys to specific indices in an array (or table). The value associated with the key is stored at the calculated index. When you need to access a value, the hash function computes the index, and the value can be retrieved directly, providing very fast lookups.

### How Hash Tables Work

Hash tables consist of two main components:

1. **An array (or table):** This is where the data (key-value pairs) is stored.
2. **A hash function:** This function maps the key to an index in the array. A good hash function distributes the keys uniformly across the array to minimize collisions (when two keys hash to the same index).

However, **collisions** can still occur because multiple keys may hash to the same index. There are two primary strategies for handling collisions:

- **Chaining:** Each table index points to a linked list of entries that have the same hash value. In case of a collision, the new element is added to the linked list at that index.
- **Open Addressing:** When a collision occurs, the algorithm searches for the next available slot in the array to insert the new element.

In this blog, we’ll focus on **chaining** as the method for collision resolution.

### Operations in a Hash Table

A typical hash table supports the following operations:

1. **Insert (put):** Adds a key-value pair to the hash table.
2. **Delete (remove):** Removes a key from the hash table.
3. **Search (get):** Searches for a key and retrieves its corresponding value.
4. **Display:** Displays the contents of the hash table.

### Example Code: Hash Table Implementation

Here’s an example of a hash table implemented in C++ using **chaining** for collision handling:

```cpp
#include <iostream>
#include <vector>
using namespace std;

// Node structure for the linked list in each hash table bucket
struct Node {
    int key;
    Node* next;
};

// HashTable class
class HashTable {
private:
    vector<Node*> table; // Vector of pointers to linked lists (buckets)
    int size; // Size of the hash table

    // Hash function
    int hashFunction(int key) {
        return key % size;
    }

public:
    // Constructor
    HashTable(int tableSize) {
        size = tableSize;
        table.resize(size, nullptr); // Initialize buckets with null pointers
    }

    // Function to create a new node
    Node* createNode(int key) {
        Node* newNode = new Node();
        newNode->key = key;
        newNode->next = nullptr;
        return newNode;
    }

    // Insert a key into the hash table
    void insert(int key) {
        int index = hashFunction(key);
        Node* newNode = createNode(key);

        // Insert at the beginning of the linked list (chaining)
        newNode->next = table[index];
        table[index] = newNode;

        cout << "Inserted key " << key << " at index " << index << ".\n";
    }

    // Display the hash table
    void display() {
        cout << "Hash Table:\n";
        for (int i = 0; i < size; i++) {
            cout << i << ": ";
            Node* temp = table[i];
            while (temp) {
                cout << temp->key << " -> ";
                temp = temp->next;
            }
            cout << "nullptr\n";
        }
    }

    // Delete a key from the hash table
    void remove(int key) {
        int index = hashFunction(key);
        Node* temp = table[index];
        Node* prev = nullptr;

        // Search for the key in the bucket
        while (temp && temp->key != key) {
            prev = temp;
            temp = temp->next;
        }

        // Key not found
        if (!temp) {
            cout << "Key " << key << " not found in hash table.\n";
            return;
        }

        // Remove the key
        if (prev) {
            prev->next = temp->next;
        } else {
            table[index] = temp->next;
        }

        delete temp;
        cout << "Key " << key << " removed from the hash table.\n";
    }

    // Destructor to free memory
    ~HashTable() {
        for (int i = 0; i < size; i++) {
            Node* temp = table[i];
            while (temp) {
                Node* nextNode = temp->next;
                delete temp;
                temp = nextNode;
            }
        }
    }
};

int main() {
    // Create a hash table with 5 buckets
    HashTable hashTable(5);

    // Insert keys into the hash table
    hashTable.insert(10);
    hashTable.insert(20);
    hashTable.insert(15);
    hashTable.insert(25);
    hashTable.insert(30);

    // Display the hash table
    hashTable.display();

    // Remove a key
    hashTable.remove(15);

    // Display the hash table after deletion
    hashTable.display();

    return 0;
}
```

### Explanation of the Code

1. **HashTable Class:**

   - The class contains a vector of linked lists (`table`), where each linked list (bucket) stores keys that hash to the same index.
   - The `hashFunction` computes the index based on the key and the size of the table.
   - `insert` inserts a new key into the table, chaining the new key at the head of the list at the computed index.
   - `remove` searches for a key in the table and removes it if found.
   - The destructor cleans up the memory by deleting all nodes in the table.

2. **Chaining for Collision Handling:**

   - Each index in the table points to a linked list of nodes. If multiple keys hash to the same index, they are inserted into the linked list at that index.
   - This approach allows for efficient insertion and deletion, even if there are collisions.

3. **Displaying the Hash Table:**
   - The `display` function prints the contents of the hash table, showing the keys stored in each bucket.

### Applications of Hash Tables

1. **Database Indexing:**
   Hash tables are often used in databases to index data, allowing for fast retrieval based on a key.

2. **Caching:**  
   Hash tables are used in caching systems, where data can be stored and retrieved efficiently using keys.

3. **Symbol Tables in Compilers:**  
   Hash tables are used in compilers to store variable names and their associated values during the compilation process.

4. **Unique Data Storage:**  
   Hash tables provide a fast way to store unique data and check for duplicates, such as in sets.

5. **Distributed Systems:**  
   In distributed systems, hash tables are used for load balancing, where keys are mapped to different servers or resources.

### Advantages of Hash Tables

1. **Fast Access:**  
   On average, hash tables provide constant time (O(1)) access for insertions, deletions, and lookups.

2. **Efficient Storage:**  
   Hash tables can store large amounts of data efficiently, using space proportional to the number of elements in the table.

3. **Simple to Implement:**  
   With a good hash function, hash tables are relatively simple to implement and use.

### Disadvantages of Hash Tables

1. **Collision Handling Complexity:**  
   Although chaining handles collisions, it may lead to inefficiencies if there are too many collisions, as linked lists can grow large.

2. **Space Usage:**  
   Hash tables may require more memory than other data structures, especially if the table is sparsely populated.

3. **Dependence on Hash Function:**  
   The efficiency of a hash table heavily depends on the quality of the hash function. Poor hash functions can lead to clustering and performance degradation.

### Conclusion

Hash tables are one of the most powerful and efficient data structures for key-value mapping. With constant time complexity for most operations, hash tables offer a fast way to store and retrieve data. However, to achieve optimal performance, it's essential to choose an effective hash function and manage collisions appropriately. Whether used in databases, caches, or compilers, hash tables play a critical role in optimizing data retrieval and processing.
