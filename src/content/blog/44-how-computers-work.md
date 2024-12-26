---
title: How Computers Work
description: Know How These Non Living Beings Work
date: 27 Dec 2024
---

Computers have become an integral part of our lives, powering everything from personal gadgets to complex industrial systems. At the heart of every computer lies a simple yet powerful concept: the **fetch-decode-execute cycle**.

## Fetch-Decode-Execute Cycle

This cycle is the core process that drives a computer:

- **Fetch**: The CPU retrieves an instruction from memory.
- **Decode**: The instruction is interpreted to determine the necessary action.
- **Execute**: The action is carried out, often involving calculations or data movement.

## Components of the CPU

The CPU, often called the "heart" of the computer, consists of three main parts:

1. **Arithmetic Logic Unit (ALU)**: Performs all calculations and logical operations.
2. **Control Unit (CU)**: Manages and coordinates the activities of the CPU.
3. **Memory**: Temporary storage used during processing, including registers and cache.

## Memory Hierarchy

Memory is critical for a computer's operation, and it is organized into different types:

### Primary Memory

- **SRAM (Static RAM)**: Extremely fast but expensive and complex.
- **DRAM (Dynamic RAM)**: Slower and needs periodic refreshing (rewrites every 10ms).

### Secondary Memory

- **HDD (Hard Disk Drive)**: Data is stored in tracks and sectors. Tracks are loaded into a buffer memory (SRAM), and the required bits from sectors are read.

## The Problem with Computers

While CPUs execute instructions extremely fast (1 nanosecond), fetching data from memory is much slower (40 nanoseconds). This discrepancy, known as the memory latency issue, is a major bottleneck in computer performance.

## The Solution: Memory Hierarchy

To address this issue, designers focus on a combination of speed and capacity.

### Observations

Surveys of program behavior reveal that CPUs frequently access the same memory locations within short periods. This insight forms the basis for solutions.

### Approaches

1. **Cray Hierarchy**:

   - Utilize multiple memory types (e.g., cache, DRAM, HDD).
   - Leave memory management to programmers, who decide which data to move to faster memory.

2. **Hidden Hierarchy**:
   - Hardware automatically retrieves necessary data from slower memory into faster memory.

### Modern Memory Hierarchy

```
CPU -> Cache -> DRAM -> HDD
```

## Basic Cache Algorithm

The cache is a small, fast memory that bridges the gap between the CPU and slower memory. The process works as follows:

1. **Check Cache**:

   - If the data is found, return it.
   - If not, fetch the data from main memory, return it to the CPU, and save it in the cache.

2. **Replacement Strategies**:
   - **LRU (Least Recently Used)**: Replaces the least recently accessed data.
   - **FIFO/LRR (First In, First Out)**: Replaces the oldest data; cost-effective.
   - **Random**: Replaces a random entry; simple but less efficient.

## Conclusion

As technology advances, CPUs continue to execute logic faster, but memory latency remains a challenge. Effective memory management strategies, including advanced cache algorithms and memory hierarchies, are key to overcoming these limitations and ensuring seamless performance.
