---
title: "LXC: Linux Container"
description: Getting Started with LXD on Arch Linux
date: Nov 06 2024
---
LXD is a system container manager that provides a user-friendly way to create and manage Linux containers. While often confused with `LXC`, `LXD` offers more advanced features on top of `LXC` and provides a higher-level interface for managing containers. In this guide, we'll go through setting up and managing LXD on Arch Linux. 

## What is LXD vs. LXC?

There's often confusion between `LXC` and `LXD`. Essentially, `LXD` is built on top of `LXC`, providing an image management system, REST API, and several other enhancements. If you're interested in the details, check out this [discussion comparing LXD vs. LXC](https://discuss.linuxcontainers.org/t/comparing-lxd-vs-lxc/24).

## Installation on Arch Linux

To install LXD on Arch Linux, simply run:

```bash
sudo pacman -S lxd
```

For installation on other OS, refer to the official [Linux Containers documentation](https://linuxcontainers.org/lxc/downloads/) or do a quick search online.

For more Arch-specific information on LXD, refer to the [Arch Wiki](https://wiki.archlinux.org/title/LXD).

## Enabling and Starting LXD

Once installed, enable and start the LXD services:

```bash
sudo systemctl enable lxd.socket
sudo systemctl start lxd.service
```

## Configuring for Unprivileged Containers

To run unprivileged containers, which are generally safer, configure the following mappings:

```bash
sudo usermod -v 1000000-1000999999 -w 1000000-1000999999 root
```

This mapping allows the host to securely isolate container resources. Learn more about the differences between unprivileged and privileged containers on the [Arch Linux Wiki](https://wiki.archlinux.org/title/Linux_Containers).

After configuration, reboot your device:

```bash
reboot
```

## Initializing LXD

Now, initialize LXD with the following command, choosing the default prompts:

```bash
sudo lxd init
```

Add your user to the `lxd` group to manage containers without `sudo`:

```bash
sudo usermod -aG lxd $USER
```

Reboot once again:

```bash
reboot
```

## Managing Containers

With LXD set up, here are some basic commands to manage containers:

### Listing Containers and Images

To list all containers:

```bash
lxc list
```

To list available images, use the following:

```bash
lxc image alias list ubuntu:
```

```bash
lxc image alias list ubuntu: '18.04'
```

```bash
lxc image alias list images: 'alpine'
```

> `ubuntu` and `images` are two image repositories.
### Launching and Managing Containers

Launch a container with:

```bash
lxc launch <image_name> mycontainer
```

Get detailed information on a container:

```bash
lxc info mycontainer
```

Start and stop containers as follows:

```bash
lxc start mycontainer
lxc stop mycontainer
```

### Executing Commands and Accessing Containers

Run commands inside a container with:

```bash
lxc exec mycontainer <cmd>
```

For interactive access (e.g., opening a shell):

```bash
lxc exec mycontainer bash
```

### Copying and Deleting Containers

To create a copy of a container:

```bash
lxc copy mycontainer copycontainer
```

Delete a container with:

```bash
lxc delete mycontainer
```

## Working with Files and Snapshots

### SSH into a Container

To SSH into a container, push the SSH key first:

```bash
lxc file push /path/to/.ssh/authorized_keys mycontainer/root/.ssh/authorized_keys
```

Then SSH in:

```bash
ssh root@<ip_address>
```

### Pulling and Editing Files

To pull files from a container to your host:

```bash
lxc file pull mycontainer/path/from path/to
```

Edit files directly within a container:

```bash
lxc file edit mycontainer/path/to/file
```

### Snapshots and Restoration

To create a snapshot:

```bash
lxc snapshot mycontainer
```

Restore to a snapshot:

```bash
lxc restore mycontainer <snap_name>
```

Delete a snapshot:

```bash
lxc delete mycontainer/<snap_name>
```

> Find snapshots' names with `lxc info <container_name>`

## Conclusion

LXD is a powerful tool for container management, providing an efficient, user-friendly approach to Linux containers. Arch Linux users can leverage these commands and configurations to quickly set up, manage, and interact with containers. For advanced setups and options, consider diving deeper into the [LXD documentation](https://linuxcontainers.org/lxd/docs/master/) to unlock the full potential of your LXD environment.