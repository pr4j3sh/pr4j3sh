---
title: Insertion Sort
description: Understanding Insertion Sort
date: Dec 20 2024
draft: false
---

Insertion sort is a simple and intuitive algorithm that builds a sorted array one element at a time. Inspired by the way we organize playing cards, it works efficiently for small or nearly sorted datasets. Below is the implementation of insertion sort in both ascending and descending order using C++.

### Complexity

- **Time Complexity**:
  - Best Case: **O(n)**
  - Worst Case: **O(n^2)**
  - Average Case: **O(n^2)**
- **Space Complexity**: **O(1)**

### Key Steps of Insertion Sort

1. Start from the second element; the first element is considered sorted.
2. Pick the current element from the unsorted portion.
3. Compare it with elements in the sorted portion and shift them if necessary.
4. Insert the element into its correct position.
5. Repeat for all elements in the array.

```cpp
void asc(vector<int> &v) {
  int n = v.size();

  for (int i = 1; i < n; i++) {
    int key = v[i];
    int j = i - 1;

    for (; j >= 0 && v[j] > key; j--) {
      v[j + 1] = v[j];
    }
    v[j + 1] = key;
  }
}

void desc(vector<int> &v) {
  int n = v.size();

  for (int i = 1; i < n; i++) {
    int key = v[i];
    int j = i - 1;

    for (; j >= 0 && v[j] < key; j--) {
      v[j + 1] = v[j];
    }
    v[j + 1] = key;
  }
}
```
