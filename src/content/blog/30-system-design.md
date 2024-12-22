---
title: System Design
description: A Dive into System Design
date: Dec 16 2024
draft: true
---
- recogninzing
	- system's components
	- their job
	- relationship between them
	- in order to satisfy a requirement
- taking a problem statement - breaking it down into smaller problems - building solution for each problem - building a combined solution that covers most of the major problem
- forms a double diamond 
```
               P
              / \
            /     \
        P1          P2
       /  \        /   \
     S1    S2    S3    S4
       \  /        \   /
        \            /
         S-----------S
```

iterative process that may involve multiple rounds of design, testing, and refinement

phase that focuses on high-level design of a software

system design
- understand your problem,audience, requirements
- identify the scope - boundaries
- research/analyze existing systems
- high-level design - components, relationships
- iterate over the design
- documentation
- monitor and improve

designing systems
-  use cases
- constraints
- high level design
- understading bottlenecks
- scaling

perrofmance vs scalability
Scalability is being able to handle large amounts of users/data/traffic. Performance is about speed.
 If you have a performance problem, your system is slow for a single user.
If you have a scalability problem, your system is fast for a single user but slow under heavy load.
cap theorem
- c - consistency
- a - availability
- p - partition tolerance

latency vs throughput
both measures of a system’s performance
Latency refers to the amount of time it takes for a system to respond to a request. Throughput refers to the number of requests that a system can handle at the same time