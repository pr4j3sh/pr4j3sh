---
title: Git and Github
description: A Dive into Git and Github
date: Dec 12 2024
draft: false
---

Git and GitHub are powerful tools used for version control and collaboration in software development. In this guide, we will walk through essential Git commands, explain their functionality, and address common topics such as resolving merge conflicts, branching strategies, stashing, and more.

## Key Git Commands

### `git init`

This command initializes a directory as a Git repository, creating a `.git` directory to track your project.

### `git config`

Used to configure Git settings, such as user information and default behaviors.

### `git add <file>`

Stages changes to a file for committing, adding it to the "index."

### `git commit -m "<commit_message>"`

Commits changes to the repository, creating two objects: a tree object (which represents the file state) and a commit object with a commit hash stored in the `HEAD` file.

### `git log`

Shows a log of commits, providing information on commit history.

### `.gitignore`

This file stores patterns for files and directories that Git should ignore and not track.

### `git branch <branch_name>`

Creates a new branch with the specified name.

### `git checkout <branch_name>`

Switches to an existing branch.

### `git checkout -b <branch_name>`

Creates a new branch and switches to it immediately.

### `git branch -d <branch_name>`

Deletes a branch locally if it has already been merged.

### `git push origin -d <branch_name>`

Deletes a branch from the remote repository.

### `git branch -D <branch_name>`

Forcefully deletes a branch, even if it hasn't been merged.

### `git branch -m <old_branch_name> <new_branch_name>`

Renames a branch.

### `git merge <branch_name>`

Merges changes from the specified branch into the current branch.

## Resolving Git Merge Conflicts

### Example Conflict Resolution

Let's resolve a merge conflict between the `master` and `dev` branches.

```bash
# In master branch
echo "hi" >> README.md
git add README.md
git commit -m "updated README"

# Switch to dev branch
git checkout dev
echo "bye" >> README.md
git add README.md
git commit -m "updated README"

# Switch back to master and merge dev
git checkout master
git merge dev

# Resolve conflict using git mergetool
git mergetool
```

Choose the version you want to keep during the merge resolution.

### Conflict Example

When you want to add a new feature or fix a bug—no matter how big or small—you spawn a new branch to encapsulate your changes. During a conflict, the content is displayed as:

```plaintext
here is some content not affected by the conflict
<<<<<<< main
this is conflicted text from main
=======
this is conflicted text from feature branch
>>>>>>> feature branch;
```

The content before the `=======` marker is the receiving branch, and the part after is the merging branch.

### Resolve a Merge Conflict and Keep `dev` Branch Changes

1. Switch to the master branch:

   ```bash
   git checkout master
   ```

2. Modify a file (e.g., `file.txt`) and commit the change:

   ```bash
   echo "Change in master" > file.txt
   git add file.txt
   git commit -m "Change in master"
   ```

3. Switch to the dev branch:

   ```bash
   git checkout dev
   ```

4. Modify the same file (`file.txt`) differently and commit:

   ```bash
   echo "Change in dev" > file.txt
   git add file.txt
   git commit -m "Change in dev"
   ```

5. Switch back to master and merge dev:

   ```bash
   git checkout master
   git merge dev
   ```

   You’ll see a conflict message.
6. Use `git mergetool` to resolve the conflict:

   ```bash
   git mergetool
   ```

   Select the dev branch changes and save.
7. Complete the merge:

   ```bash
   git add file.txt
   git commit -m "Resolved conflict, keeping dev changes"
   ```

Now, your master branch has the dev changes.

## Git Merge Strategies

### Fast-Forward (FF) Merge

A fast-forward merge happens when the current branch is directly behind the feature branch.

**Before Merge:**

```
    A --- B --- C (main)
             \
              D --- E (feature)
```

**After Fast-Forward Merge:**

```
    A --- B --- C --- D --- E (main)
```

### No Fast-Forward (No-FF) Merge

A no-fast-forward merge creates a new merge commit.

**Before Merge:**

```
    A --- B --- C (main)
             \
              D --- E (feature)
```

**After No-FF Merge:**

```
    A --- B --- C ------- M (main)
             \         /
              D --- E (feature)
```

## Git Rebase

Rebasing maintains a linear commit history by replaying commits from one branch onto another.

**Before Rebase:**

```
main:    A --- B --- C
                   \
feature:            D --- E
```

**After Rebase:**

```
main:    A --- B --- C --- D' --- E'
```

## Stashing Changes

Git stash allows you to save changes temporarily and switch context quickly.

- Stash modified and staged files:

  ```bash
  git stash
  ```

- Stash untracked files as well:

  ```bash
  git stash -u
  ```

- Apply the most recent stash:

  ```bash
  git stash pop
  ```

## Resetting Changes

### `git reset`

- `--soft` keeps changes staged:

  ```bash
  git reset --soft HEAD~1
  ```

- `--mixed` resets commits and staged changes (default):

  ```bash
  git reset HEAD~1
  ```

- `--hard` resets all changes, including the working directory:

  ```bash
  git reset --hard HEAD~1
  ```

## Git Revert

`git revert` is a safe way to undo commits that have been pushed to the remote repository. It creates a new commit that undoes changes instead of moving the `HEAD`.

```bash
git revert <commit>
```

## Helpful Git Tools

### `git diff`

Shows the difference between various file states, allowing you to review changes.

### `git reflog`

Keeps a history of reference updates, allowing you to see all actions made in the repository, even those no longer visible in the history.

### `git bisect`

Helps identify which commit introduced a bug using binary search:

```bash
git bisect start
git bisect bad
git bisect good <commit_hash>
```

End the bisect process with:

```bash
git bisect reset
```

### `git worktree`

Allows you to work on multiple branches in different directories:

```bash
git worktree add <path> <branch_name>
```

### Git LFS (Large File Storage)

Git LFS tracks large files in your repository.

- Install Git LFS:

  ```bash
  git lfs install
  ```

- Track files (e.g., PNG files):

  ```bash
  git lfs track "*.png"
  ```

## Advanced Commands

- `git remote add origin <REMOTE_URL>`
- Use `git fetch` instead of `git pull` to avoid unintended merges.
- **Squash commits**: Combine commits into one for a clean history:

  ```bash
  git rebase -i HEAD~<number_of_commits>
  ```

- **Cherry-picking**: Apply a specific commit from one branch to another:

  ```bash
  git cherry-pick <commit_hash>
  ```

  Resolve conflicts if necessary and continue:

  ```bash
  git cherry-pick --continue
  ```

- **Amend last commit**: Edit the last commit:

  ```bash
  git commit --amend
  ```

- **Git patch**: An alternative to pull requests before PRs existed.
- **Submodules**: Use a repository within a repository:

  ```bash
  git submodule add <url>
  ```
