---
title: Bubble Sort
description: Understanding Bubble Sort
date: Dec 18 2024
draft: false
---
Bubble sort is a straightforward sorting algorithm that works by repeatedly swapping adjacent elements if they are in the wrong order. With each iteration, the largest element “bubbles” up to its proper location. While simple to implement, it is not suited for large datasets due to its worst-case and average time complexity of O(n²).

### Complexity
- **Time Complexity**:
  - Best Case: **O(n)** (when the array is already sorted)
  - Worst Case: **O(n²)**
  - Average Case: **O(n²)**
- **Space Complexity**: **O(1)**

### How it Works:

1. Go through the array, one value at a time.
2. For each value, compare it with the next value.
3. If the value is higher than the next one, swap them so that the highest value comes last.
4. Repeat this process as many times as there are values in the array.

```cpp
void asc(vector<int> &v) {
  int n(v.size());
  for (int i = 0; i < n; i++) {
    bool swapped = false;
    for (int j = 0; j < n - i - 1; j++) {
      if (v[j] > v[j + 1]) {
        swap(v[j], v[j + 1]);
        swapped = true;
      }
    }
    if (!swapped)
      break;
  }
}

void desc(vector<int> &v) {
  int n(v.size());
  for (int i = 0; i < n; i++) {
    bool swapped = false;
    for (int j = 0; j < n - i - 1; j++) {
      if (v[j] < v[j + 1]) {
        swap(v[j], v[j + 1]);
        swapped = true;
      }
    }
    if (!swapped)
      break;
  }
}
```
