---
title: Prometheus
description: Monitoring with Prometheus
date: Jan 12 2025
---

Prometheus is a powerful, open-source monitoring and alerting toolkit designed to handle time-series data. It is widely used for tracking and analyzing application and system performance. This blog will cover its architecture, metric types, usage, and integration with Grafana to visualize metrics.

## Architecture

The Prometheus architecture is straightforward yet effective for monitoring:

```
Target --> Server <-- Grafana
              |
              |
             TSDB (Time Series Database)
```

- **Target**: Applications, servers, or services exposing metrics (usually via an HTTP `/metrics` endpoint).
- **Server**: The Prometheus server scrapes metrics from targets and stores them in its Time Series Database (TSDB).
- **TSDB**: Optimized for high-performance storage and querying of time-series data.
- **Grafana**: A visualization tool that connects to Prometheus to display data in interactive dashboards.

## Metric Types

Prometheus metrics fall into four main types, each serving a specific purpose:

### 1. **Gauges**

Metrics that can go up or down, representing a current state or value.

- Example: Memory usage, CPU usage.

**Methods:**

- `Set()` - Set the value.
- `Inc()` - Increment the value.
- `Dec()` - Decrement the value.
- `Add()` - Add an arbitrary amount.
- `Sub()` - Subtract an arbitrary amount.
- `SetToCurrentTime()` - Set the value to the current time.

### 2. **Counters**

Metrics that only increase, used to count events like HTTP requests.

- Example: Total number of HTTP requests made.

**Methods:**

- `Inc()` - Increment by 1.
- `Add()` - Increase by an arbitrary amount.

### 3. **Summaries**

Used to observe and calculate quantiles of event distributions.

- Example: Request duration (latency).

**Methods:**

- `Observe()` - Record a single observation.

> **Note:** Avoid averaging summaries, as it can lead to misleading results.

### 4. **Histograms**

Similar to summaries but calculate the distribution using pre-defined buckets.

- Example: Distribution of response times.

## Usage

To use Prometheus effectively, follow these steps:

### 1. **Set up Prometheus in your application**

Install a Prometheus client library in your app and expose a `/metrics` endpoint. Use this endpoint to export various metrics, such as gauges and counters, to Prometheus.

### 2. **Create `prometheus.yml` Configuration File**

Prometheus requires a configuration file to define scrape intervals and targets.

```yaml
global:
  scrape_interval: 5s

scrape_configs:
  - job_name: demo
    static_configs:
      - targets: ["host.docker.internal:5000"]
```

### 3. **Run Prometheus**

Start Prometheus with Docker:

```bash
docker run -d --name=prometheus -v ./prometheus.yml:/etc/prometheus/prometheus.yml -p 5001:9090 prom/prometheus
```

Prometheus will now scrape metrics from the targets defined in `prometheus.yml`.

### 4. **Visualize with Grafana**

- Install Grafana using Docker:

  ```bash
  docker run -d --name=grafana -p 5002:3000 grafana/grafana
  ```

- Add Prometheus as a data source in Grafana:
  - Go to **Configuration > Data Sources > Add Data Source**.
  - Select **Prometheus** and enter the URL: `http://<prometheus_host>:5001`.
- Create a dashboard to visualize your metrics.

## Why Prometheus?

- **Scalable and Reliable**: Designed for monitoring highly dynamic environments.
- **Efficient Storage**: Stores data in a compressed time-series format.
- **Extensible**: Easily integrates with tools like Grafana.
- **Alerting**: Built-in alerting capabilities to notify you of potential issues.

Prometheus, coupled with Grafana, offers a robust solution for monitoring applications and infrastructure. By understanding its architecture, metrics, and integration process, you can harness its full potential to ensure system reliability and performance. Start monitoring today and gain better insights into your systems!
