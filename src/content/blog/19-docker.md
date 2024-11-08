---
title: Docker
description: A Dive into Docker
date: Nov 09 2024
draft: true
---

- run

```bash
docker run <registry/image_name> <command>
```

```bash
docker run hello-world
```

```bash
docker run rancher/cowsay cowsay "wassup"
```

```bash
docker run --env POSTGRES_PASSWORD=eleven --publish 8080:5432
```

- connect using psql

```bash
psql -h localhost -p 8080 -U postgres
```

run flags
`--name`
`--env` or `-e`
`--publish` or `-p` -> `-p <host_port>:<container_port>`
`-d`
`--rm` - remove container on exit
`--interactive`
`--tty`
or use
`-it`

- list containers

```bash
docker ps -a
```

- start

```bash
docker start <container_id>
```

- rm

```bash
docker rm <container_id>
```

- attach - opens shell ig

```bash
docker attach <contaner_id>
```

- build

```
docker build --tag ubuntu-20-ip -<<EOF
∙ FROM ubuntu:20.04
∙ RUN apt update && apt upgrade -y && apt install iproute2 -y
∙ EOF
```
