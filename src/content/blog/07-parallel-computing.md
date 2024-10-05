---
title: Understanding Parallel Computing
description: A Dive into GNU Parallel and Multithreading with OpenMP in C++
date: Oct 06 2024
---
Parallel computing is a form of computation where many calculations are performed simultaneously. By breaking tasks into smaller chunks and running them concurrently, parallel computing maximizes the use of resources, making programs faster and more efficient. In modern computing, parallelism is especially useful for complex data processing, machine learning, scientific simulations, and more.

This blog explores the basics of parallel computing, particularly using **GNU Parallel** and **multithreading** with **OpenMP** in C++.

Checkout [source code](https://github.com/prajeshElEvEn/archives/tree/master/src/cpp/multithreading)
## What is Parallel Computing?

Parallel computing involves dividing a larger problem into smaller, independent tasks that can be executed concurrently. This is achieved using multiple processors or threads. By utilizing parallelism, you can significantly reduce the time it takes to complete a task, as multiple parts of the task are being processed at the same time.

## Forms of Parallelism

There are two main types of parallelism:
1. **Data Parallelism**: Involves distributing subsets of data across multiple cores and performing the same operation on each subset simultaneously.
2. **Task Parallelism**: Involves dividing a task into sub-tasks, each of which can be executed on separate threads or processors.

## GNU Parallel: A Shell Tool for Parallel Processing

**GNU Parallel** is a command-line tool used to run shell commands in parallel. It’s a handy utility when you need to run multiple independent tasks at the same time, such as running batch jobs, converting files, or processing datasets.

### Example: Using GNU Parallel

```bash
parallel echo "Processing {}" ::: task1 task2 task3 task4
```

In the above command:
- `parallel` is the command for GNU Parallel.
- `echo "Processing {}"` is the operation that will be run in parallel for each task.
- `::: task1 task2 task3 task4` defines the tasks that will be processed concurrently.

This simple example shows how to run multiple tasks at once using GNU Parallel.

A more generic approach for running a command with parallel (say 10 times):

```bash
parallel -j 10 <cmd> ::: {1..10}
```
> Here the `<cmd>` runs 10 times

## Multithreading in C++ Using OpenMP

When writing C++ programs, **OpenMP (Open Multi-Processing)** is a popular API that allows easy implementation of parallelism by spawning multiple threads. It’s especially useful for shared-memory architectures, where threads share the same memory space but run on different cores.

### Including OpenMP (`omp.h`) in C++

OpenMP simplifies parallel programming by offering a set of compiler directives. In C++, the `omp.h` header provides functions for working with threads. You can instruct the compiler to parallelize specific sections of your code using `#pragma` directives.

### Example: Parallelizing a Loop with OpenMP

```cpp
#include <iostream>
#include <omp.h>

using namespace std;

int main() {
    int n = 100;
    int sum = 0;

    #pragma omp parallel for reduction(+:sum)
    for (int i = 0; i < n; ++i) {
        sum += i;
    }

    cout << "Sum: " << sum << endl;

    return 0;
}
```

In this example:
- The **`#pragma omp parallel for`** directive tells the compiler to parallelize the loop.
- The **`reduction(+:sum)`** clause ensures that the `sum` variable is correctly handled across different threads, combining the results from each thread.

### Compiling the Code with OpenMP

To compile a C++ program that uses OpenMP, you need to enable OpenMP in your compiler using the `-fopenmp` flag for GNU compilers.

```bash
g++ -fopenmp -o parallel_sum parallel_sum.cpp
```

## Benefits of Using OpenMP

- **Simplicity**: OpenMP allows you to add parallelism to existing code with minimal changes.
- **Scalability**: As the number of cores increases, the program scales efficiently.
- **Portability**: OpenMP is supported by many compilers, including GCC and Clang, making it portable across platforms.

### Example: Multithreading with OpenMP and `omp_get_thread_num`

You can also use OpenMP to create multiple threads and control what each thread does. Here's an example:

```cpp
#include <iostream>
#include <omp.h>

using namespace std;

int main() {
    #pragma omp parallel
    {
        int thread_id = omp_get_thread_num();
        cout << "Thread " << thread_id << " is running\n";
    }

    return 0;
}
```

In this case:
- **`omp_get_thread_num()`** returns the ID of the current thread.
- The **`#pragma omp parallel`** directive creates multiple threads that run concurrently.

## When to Use Parallel Computing?

Parallel computing is most useful when:
- The task involves large datasets or computationally intensive operations.
- You have multiple cores available on your system.
- Your application needs to process multiple independent tasks simultaneously (like batch processing, file conversions, or matrix operations).

## Conclusion

Parallel computing is essential for improving performance in modern applications. By leveraging tools like **GNU Parallel** for shell operations and **OpenMP** for C++ programs, you can implement parallelism with ease. OpenMP makes it particularly simple to add multithreading to your C++ code with minimal effort, allowing you to take full advantage of your CPU’s cores.

Whether you're working on scientific simulations, data analysis, or building high-performance applications, understanding and utilizing parallel computing will help you optimize your work efficiently.