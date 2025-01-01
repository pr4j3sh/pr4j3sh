---
title: MySQL
description: A Dive into MySQL
date: Dec 17 2024
draft: true
---

### **Introduction**

SQL (Structured Query Language) is the backbone of any relational database management system (RDBMS). Whether you're managing databases for a web application or analyzing data, knowing the essential SQL commands is crucial. Let's dive into the commands you need to know, organized by functionality.

### **Setting Up Your Environment**

For a LAMP stack, install MySQL and manage it efficiently with tools like phpMyAdmin:

```bash
yay -S mysql
```

Once installed, start the MySQL CLI:

```bash
mysql
```

### **Working with Databases**

#### Show All Databases

```sql
SHOW DATABASES;
```

#### Create a New Database

```sql
CREATE DATABASE mydb;
```

#### Delete a Database

```sql
DROP DATABASE mydb;
```

### **Managing Tables**

#### Show Tables in the Current Database

```sql
SHOW TABLES;
```

#### Describe a Table's Structure

```sql
DESCRIBE table_name;
```

#### Create a Table

```sql
CREATE TABLE student (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(20) NOT NULL,
  major VARCHAR(20) DEFAULT 'undecided'
);
```

#### Drop a Table

```sql
DROP TABLE student;
```

#### Modify Table Structure

Add a column:

```sql
ALTER TABLE student ADD age INT;
```

Drop a column:

```sql
ALTER TABLE student DROP age;
```

### **Inserting and Updating Data**

#### Insert Data into a Table

```sql
INSERT INTO student (id, name, major) VALUES (1, 'Jack', 'Biology');
```

#### Update Data

```sql
UPDATE student SET major = 'Physics' WHERE id = 1;
```

#### Delete Data

```sql
DELETE FROM student WHERE id = 1;
```

### **Querying Data**

#### Select Data

```sql
SELECT * FROM student;
SELECT name, major FROM student;
```

#### Filter Data

```sql
SELECT * FROM student WHERE major = 'Biology';
SELECT * FROM student WHERE id > 2;
```

#### Order Data

```sql
SELECT * FROM student ORDER BY name ASC;
```

#### Limit Results

```sql
SELECT * FROM student LIMIT 5;
```

### **Advanced Features**

#### Aggregation

```sql
SELECT major, COUNT(*) FROM student GROUP BY major;
```

#### Wildcards

```sql
SELECT * FROM student WHERE name LIKE 'J%'; -- Names starting with J
```

#### Joining Tables

```sql
SELECT a.id, a.name, b.major
FROM table_a a
JOIN table_b b ON a.id = b.a_id;
```

#### Combining Queries

```sql
SELECT name FROM student_a
UNION
SELECT name FROM student_b;
```

### **Conclusion**

SQL is a powerful tool for managing and interacting with data. This guide provides the foundational commands you need to start building, querying, and optimizing your databases. Keep practicing, and you'll become proficient in no time.
