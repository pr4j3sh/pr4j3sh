---
title: Kubernetes
description: A Dive Into Kubernetes
date: Jan 03 2025
---

Kubernetes is a powerful open-source platform for automating the deployment, scaling, and management of containerized applications. Designed for modern cloud-native environments, Kubernetes ensures reliability, efficiency, and scalability of your applications.

### What is Kubernetes?

Kubernetes is a **container orchestration system** that simplifies managing containers in production. It takes care of:

- **Automatic Deployments**: Ensures your application is always running the desired version.
- **Load Distribution**: Balances traffic across your application’s instances.
- **Auto Scaling**: Dynamically adjusts the number of running containers based on demand.
- **Monitoring & Health Checks**: Continuously monitors container health and ensures availability.
- **Replacement of Failed Containers**: Automatically replaces failing containers to maintain service continuity.

### Supported Container Runtimes

Kubernetes supports several container runtimes, including:

- **Docker**
- **CRI-O**
- **containerd**

### Core Concepts of Kubernetes

#### Pods

The **pod** is the smallest deployable unit in Kubernetes. A pod encapsulates one or more containers that share:

- **Shared Volumes** for persistent storage.
- **Shared IP Address** to enable seamless communication between containers.

**Pod Anatomy:**

```
Container
.                 Shared Volumes
.
.                 Shared IP Address
Container
```

> **Best Practices:**
>
> - One container per pod is the most common practice.
> - Each pod is tied to a single server.

#### Kubernetes Cluster

A Kubernetes cluster consists of multiple nodes:

- **Master Node**: Runs Kubernetes-specific services (control plane) to manage the cluster.
- **Worker Node**: Runs application containers.

Nodes can be located across multiple servers, enabling globally distributed clusters.

**Core Services on Nodes:**

- **kubelet**: Manages pods on a node.
- **kube-proxy**: Handles network communication.
- **Container Runtime**: Executes containerized applications.

### Kubernetes in Action

#### CLI Tool: kubectl

**kubectl** is the command-line interface for managing Kubernetes clusters.

#### Setting Up a Local Cluster with Minikube

Minikube is a tool for running Kubernetes locally. Common commands include:

```
minikube status
minikube start
minikube ip
```

Access the cluster:

```
ssh -i ~/.minikube/machines/minikube/id_rsa docker@<minikube_ip>
```

Inspect the cluster:

```
kubectl cluster-info
kubectl get nodes
```

### Managing Pods

**Creating a Pod:**

```
kubectl run <pod_name> --image=<image_name>
kubectl run nginx --image=nginx
```

**Describing a Pod:**

```
kubectl describe pod <pod_name>
```

**Deleting a Pod:**

```
kubectl delete pod <pod_name>
```

### Deployments

Deployments provide a way to manage replicas and updates for your application.

**Create a Deployment:**

```
kubectl create deployment nginx-deployment --image=nginx
```

**Scale a Deployment:**

```
kubectl scale deployment nginx-deployment --replicas=5
```

### Exposing Services

Services expose your application to external traffic.

**Expose a Deployment:**

```
kubectl expose deployment nginx-deployment --port=8080 --target-port=80
```

**Using NodePort:**

```
kubectl expose deployment nginx-deployment --type=NodePort --port=5000
```

**Using LoadBalancer:**

```
kubectl expose deployment nginx-deployment --type=LoadBalancer --port=5000
```

### Updating Deployments

**Update the Image:**

```
kubectl set image deployment nginx-deployment nginx=nginx:latest
```

**Check Rollout Status:**

```
kubectl rollout status deploy nginx-deployment
```

### Automating with YAML

Define your resources in YAML files for repeatability.

**Sample `deployment.yaml`:**

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx-deployment
  template:
    metadata:
      labels:
        app: nginx-deployment
    spec:
      containers:
        - name: nginx-deployment
          image: nginx:1.21
          ports:
            - containerPort: 80
```

**Sample `service.yaml`:**

```yaml
apiVersion: v1
kind: Service
metadata:
  name: nginx-service
spec:
  selector:
    app: nginx-service
  ports:
    - protocol: TCP
      port: 80
      targetPort: 80
  type: LoadBalancer
```

**Apply Configurations:**

```
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
```

**Delete Resources:**

```
kubectl delete -f deployment.yaml -f service.yaml
```

### Conclusion

Kubernetes revolutionizes how applications are deployed and managed, making it a must-have tool for developers embracing containerization. By understanding its core concepts and commands, you can harness its full potential for building scalable, reliable, and efficient applications.
