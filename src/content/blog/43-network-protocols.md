---
title: Network Protocols
description: Know About Some Protocols
date: 26 Dec 2024
draft: true
---

icmp - share diagnostic info

```
pint <ip>
```

telnet - less secure way to enter a device on port 23

```
telnet <ip>
```

ftp - share file - port 21

sftp - secure alt of ftp (ssh ftp)

system to access

```bash
sudo apt install vsftpd
sudo ufw allow 21
```

from system

```bash
sudo apt install ftp
```

ssh
system to access

```bash
sudo apte install openssh-server
```

from system

```
sudo apt install openssh-client
```

```
ssh user@ip
```

smb - server message block protocol
used for sharing files, printer
port 445
