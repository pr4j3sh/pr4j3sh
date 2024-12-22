---
title: Version Control System
description: Understanding How Git Works Behind the Scenes
date: Nov 18 2024
draft: false
---

Version Control Systems (VCS) like Git are essential tools for developers. They help manage code changes, collaborate efficiently, and maintain project versions. This post explains how Git works under the hood, focusing on its core components and actions.

## What is Version Control?

A **Version Control System (VCS)** helps manage code changes and track project history. With VCS, you can:

- **Track Changes**: Record every change with details (author, timestamp, and message).
- **Collaborate**: Work with multiple developers without conflicts.
- **Manage Versions**: Roll back to previous versions or create new ones.

Git is the most popular distributed VCS, known for its speed, flexibility, and branching support.

Checkout [vcs source code](https://github.com/pr4j3sh/vcs) implemented in `javascript` for better understanding.

## How Git Works

### 1. **Repository (`git init`)**

When you run `git init`, Git initializes a repository, turning your project folder into a Git-managed directory. Git stores project history in the `.git` folder.

This creates:

```
.git/
    objects/        # Stores project data (files, commits, etc.)
```

### 2. **Staging Area (`git add`)**

`git add .` stages changes for the next commit. Here's what happens behind the scenes:

- **Hashing**: Each file gets a unique hash based on its content.
- **Compression**: Files are compressed and stored in the `.git/objects/` directory.
- **Index**: The **index file** maps file paths to their hashes.

Example structure:

```
.git/
    objects/
        12/3456789abc12345     # Blob (compressed file content)
    index                        # Maps paths to hashes and metadata
```

**Index File Example (JSON)**:

```json
{
  "file.txt": {
    "hash": "123456789abcdef0123456789abcdef0123456789",
    "path": "file.txt",
    "stage": 0
  }
}
```

### 3. **Committing Changes (`git commit`)**

`git commit` creates two objects:

1. **Tree Object**: A snapshot of the directory structure, linking to file content (blobs).
2. **Commit Object**: Contains metadata, references the tree object, and tracks parent commits.

Example structure after a commit:

```
.git/
    objects/
        3f/4a832ffb4dc1f987    # Tree (directory snapshot)
        7b/55a2ccff14db4130    # Commit (commit metadata)
```

**Tree Object Example (JSON)**:

```json
{
  "tree": {
    "file.txt": "123456789abcdef0123456789abcdef0123456789"
  }
}
```

**Commit Object Example (JSON)**:

```json
{
  "commit": {
    "message": "Initial commit",
    "author": "Dev <dev@example.com>",
    "timestamp": "2024-12-07T12:00:00Z",
    "parent": null,
    "tree": "3f4a832ffb4dc1f987"
  }
}
```

## Conclusion

Git is a powerful tool for managing code, enabling version tracking, collaboration, and project history management. By understanding its internal workings—objects, indices, and commits—you can better utilize Git's full potential. Whether working solo or in a team, Git helps you stay organized and in control of your code.

