---
title: Docker
description: A Dive into Docker
date: Nov 09 2024
draft: false
---
Docker is a powerful tool that allows you to package and run applications in containers, which are lightweight, portable environments that run consistently on any system. Here’s a quick guide to some commonly used Docker commands and flags.

#### 1. **Running a Docker Container**

To run a Docker container, use the following syntax:

```bash
docker run <registry/image_name> <command>
```

For example, to run a basic hello-world container:

```bash
docker run hello-world
```

To use a fun example with the Rancher `cowsay` image:

```bash
docker run rancher/cowsay cowsay "wassup"
```

To set environment variables and map ports:

```bash
docker run --env POSTGRES_PASSWORD=eleven --publish 8080:5432
```


#### 2. **Connecting to a Database Container with psql**

If you're running a Postgres container, you can connect to it using `psql`:

```bash
psql -h localhost -p 8080 -U postgres
```


#### 3. **Common Docker Run Flags**

Here are some commonly used flags when running a container:

- `--name`: Assign a name to the container.
- `--env` or `-e`: Set environment variables (e.g., database passwords).
- `--publish` or `-p`: Map ports (e.g., `-p 8080:5432`).
- `-d`: Run the container in detached mode (in the background).
- `--rm`: Remove the container after it stops.
- `--interactive`: Keep the container running interactively.
- `--tty`: Allocate a TTY for the container (typically used with `-it`).
  
To run interactively, you can combine `-it`:

```bash
docker run -it ubuntu bash
```


#### 4. **Listing Containers**

To list all containers (running or stopped):

```bash
docker ps -a
```


#### 5. **Starting and Stopping Containers**

To start a stopped container:

```bash
docker start <container_id>
```

To remove a container:

```bash
docker rm <container_id>
```


#### 6. **Attaching to a Container**

You can attach to a running container and interact with it:

```bash
docker attach <container_id>
```


#### 7. **Building a Custom Docker Image**

You can create a custom Docker image by specifying a `Dockerfile` inline:

```bash
docker build --tag ubuntu-20-ip -<<EOF
FROM ubuntu:20.04
RUN apt update && apt upgrade -y && apt install iproute2 -y
EOF
```


#### 8. **Working with Docker Volumes**

Volumes are used to persist data or share data between containers. To create a volume:

```bash
docker volume create myvolume
```

To mount the volume to a container:

```bash
docker run -it --rm --mount source=myvolume,destination=/path/to/dir/ ubuntu:20.04
```

To list volumes:

```bash
docker volume ls
```

To remove a volume:

```bash
docker volume rm <name/id>
```

To prune unused volumes:

```bash
docker volume prune
```


#### 9. **Mounting Bind Volumes**

You can mount directories from the host system directly into the container using a bind mount:

```bash
docker run -it --rm --mount type=bind,source=/path/in/host,destination=/path/in/container ubuntu:20.04
```

Alternatively, you can use `-v` for the same purpose:

```bash
docker run -it --rm -v path/on/host:/path/on/container ubuntu:20.04
```


These are just a few of the many commands and flags that Docker offers. By learning these basics, you'll be able to start using Docker more effectively and simplify your container management tasks. Happy containerizing