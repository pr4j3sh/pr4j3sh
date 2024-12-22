---
title: Selection Sort
description: Understanding Selection Sort
date: Dec 21 2024
draft: false
---

Sorting algorithms are essential for arranging data efficiently. One of the fundamental algorithms is **Selection Sort**, which works by repeatedly selecting the smallest (or largest) element from an unsorted portion of the array and moving it to the sorted portion. Despite its simplicity, Selection Sort is not the most efficient choice for large datasets due to its time complexity of **O(n²)**.

### How Selection Sort Works

Selection Sort divides the array into two parts:

1. **Sorted part**: Initially empty, elements are added here one by one.
2. **Unsorted part**: Contains all elements initially and shrinks as elements are moved to the sorted part.

The algorithm repeatedly selects the smallest (or largest) element from the unsorted portion and swaps it with the first element in the unsorted section. This process continues until the array is fully sorted.

### Steps of the Algorithm

1. Start with the first element in the array.
2. Find the smallest (or largest, for descending order) element in the unsorted portion.
3. Swap this element with the first element in the unsorted portion.
4. Move the boundary of the sorted part one step forward.
5. Repeat until the entire array is sorted.

### Implementation in C++

#### Ascending Order

Here is the implementation of Selection Sort to sort in ascending order:

```cpp
void asc(vector<int> &v) {
  int n = v.size();
  for (int i = 0; i < n; i++) {
    int shortest = INT_MAX, idx = i;
    for (int j = i; j < n; j++) {
      if (v[j] < shortest) {
        shortest = v[j];
        idx = j;
      }
    }
    swap(v[i], v[idx]);
  }
}
```

#### Descending Order

To sort in descending order, the algorithm is modified to select the largest element instead:

```cpp
void desc(vector<int> &v) {
  int n = v.size();
  for (int i = 0; i < n; i++) {
    int largest = INT_MIN, idx = i;
    for (int j = i; j < n; j++) {
      if (v[j] > largest) {
        largest = v[j];
        idx = j;
      }
    }
    swap(v[i], v[idx]);
  }
}
```

### Key Characteristics

- **Time Complexity**: O(n²) for all cases (best, worst, and average) due to the nested loops.
- **Space Complexity**: O(1) as it sorts in place and requires no additional storage.
- **Stability**: Not stable, as equal elements may not retain their original relative order.
- **Simplicity**: Easy to understand and implement.

### Example Walkthrough

Consider the array: `[64, 25, 12, 22, 11]` to be sorted in ascending order.

1. **First Iteration**:

   - Find the smallest element: `11`.
   - Swap `11` with the first element: `[11, 25, 12, 22, 64]`.

2. **Second Iteration**:

   - Find the smallest in the remaining unsorted portion (`[25, 12, 22, 64]`): `12`.
   - Swap `12` with the second element: `[11, 12, 25, 22, 64]`.

3. **Third Iteration**:

   - Find the smallest in the remaining unsorted portion (`[25, 22, 64]`): `22`.
   - Swap `22` with the third element: `[11, 12, 22, 25, 64]`.

4. **Fourth Iteration**:
   - Find the smallest in the remaining unsorted portion (`[25, 64]`): `25`.
   - No swap needed: `[11, 12, 22, 25, 64]`.

The array is now sorted.

### When to Use Selection Sort

- **Small Datasets**: Due to its inefficiency on large datasets, it’s more suitable for small arrays or teaching purposes.
- **Memory Constraints**: Its in-place sorting is beneficial when additional memory usage is not an option.

### Conclusion

Selection Sort is a simple yet inefficient algorithm for large datasets. It provides an excellent starting point for understanding sorting algorithms and their mechanics. While modern applications typically use more efficient algorithms like Quick Sort or Merge Sort, Selection Sort remains a foundational concept in computer science.
