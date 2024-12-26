---
title: Ansible
description: A Dive into Ansible
date: Dec 24 2024
draft: true
---

open source, command-line IT automation software application written in Python
can configure systems, deploy software, and orchestrate advanced workflows to support application deployment, system updates, and more
uses OpenSSH for transport, and uses a human-readable language
files are known as playbooks

Ansible architecture

```
-------------------------------------------------   --------
|                                               |   |      |
| ansible automation engine                     |<--| CMDB |
|                                               |   |      |
|             -------------------------------   |   --------
|             |                             |   |
| inventory<->| Modules     APIs    Plugins |   |
|             |                             |   |   ---------
|             | Playbook                    |   |   |       |
|             |                             |   |-->| Hosts |
|             -------------------------------   |   |       |
|                                               |   ---------
|                                               |
-------------------------------------------------
```

inventory - list of ip addresses
modules are core files - they run
apis - for cli and server ops
plugins - extra functionality
cmdb - stores configs
hosts - machines connected via ssh

format of playbook

```
---
hosts

variables

tasks

handlers
```

eg:

```yml
---
- hosts: webservers
  tasks:
    - name: install apache2
      apt: name=apache2 update_cache=yes state=latest

  notify:
    - restart apache2

  handlers:
    - name: restart apache2
      service: name=apache2 state=restarted
```

> `apt` and `service` are modules, kind of like linux pkgs

orchestration
getting all the resources ready, connected and running

provisioning
coding, testing, deployment stage

control machine -> host machines

it is a push based arch

lab setup

- install ansible
  > on arch

```bash
sudo pacman -S ansible
```
