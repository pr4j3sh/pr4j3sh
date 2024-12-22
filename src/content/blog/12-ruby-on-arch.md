---
title: Ruby on Arch Linux
description: Install Ruby via rbenv on Arch Linux
date: Oct 08 2024
---

Installing Ruby using `rbenv` is a recommended way to manage multiple versions of Ruby efficiently, especially on Arch Linux. With `rbenv`, you can seamlessly switch between Ruby versions without interfering with the system’s default setup. This guide will walk you through installing `rbenv` and setting up Ruby on your Arch system.

### 1. Install `rbenv`

To start, install `rbenv` using `yay`, the AUR helper for Arch-based systems. `rbenv` manages multiple versions of Ruby by switching between them as needed.

```bash
yay -S rbenv
```

### 2. Install `ruby-build`

`ruby-build` is an `rbenv` plugin that simplifies installing Ruby versions. It provides the `rbenv install` command to compile and install different Ruby versions.

```bash
yay -S ruby-build
```

### 3. Configure Shell Integration

To ensure `rbenv` works correctly in your shell, you need to add it to your shell's startup script. For `bash`, add the following to your `~/.bashrc`:

```bash
# Add rbenv to bash so that it loads automatically
eval "$(rbenv init - bash)"
```

Then, reload the shell configuration:

```bash
source ~/.bashrc
```

### 4. List Available Ruby Versions

To see the list of available Ruby versions, use the following command:

```bash
rbenv install -l
```

This will display a list of Ruby versions, including stable releases and pre-releases. You can choose a version from this list to install.

### 5. Install Ruby

Once you have chosen the Ruby version to install, run the following command. For example, to install Ruby 3.2.5:

```bash
rbenv install 3.2.5
```

After installation, set this version as your default Ruby version with:

```bash
rbenv global 3.2.5
```

### 6. Verify the Ruby Installation

To confirm that Ruby is installed and working correctly, check the version:

```bash
ruby -v
```

You should see the installed Ruby version (e.g., `ruby 3.2.5`) displayed in your terminal.

With these steps, you've successfully installed Ruby using `rbenv` on Arch Linux. You can now use Ruby for your projects without affecting system-level settings. Happy coding

