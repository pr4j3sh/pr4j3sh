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

- building a volume
```bash
docker volume create myvolume 
```
- mount volume
```bash
docker run -it --rm --mount source=myvolume,destination=/path/to/dir/ ubuntu:20.04
```
- list volumes
```bash
docker volume ls
```
- remove a vol
```bash
docker volume rm <name/id>
```
- prune unused volumes
```bash
docker volume prune
```
- mount type bind
```bash
docker run -it --rm --mount type=bind,source=/path/in/host,destination=/path/in/container ubuntu:20.04
```
- can also use `-v`
```bash
docker run -it --rm -v path/on/host:/path/on/container ubuntu:20.04
```