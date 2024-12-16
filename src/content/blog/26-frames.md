---
title: Building frames
description: How I built frames
date: Oct 29 2024
draft: false
---
### What is Frames?

**Frames** is a tool that helps developers skip tedious setup and focus on building their products. With ready-to-use templates, custom CSS built using Tailwind, and pre-integrated utilities, Frames allows you to get started with minimal effort. Simply run a single command to generate a project from your chosen template and you're all set. Whether you need a C++, Rust, or JavaScript package, an Express server backend, or a React/Vanilla JS frontend, Frames has you covered. All templates come with detailed documentation, allowing you to quickly understand how to get the most out of them.

### Get Started with Frames

To get started with Frames, simply use the following command:

```bash
npm create @pr4j3sh/frames@latest <template_name> myproject
```

This will automatically clone the specified template from GitHub and set up your project with all necessary dependencies, environment files, and configurations.

### Components of Frames

Frames includes several key components designed to simplify the development process:
- **CLI**: A simple command-line interface to quickly set up projects with minimal input.
- **UI**: Custom CSS built with Tailwind, providing a consistent and responsive design across all templates.
- **Docs**: Comprehensive documentation that guides you through using Frames and its templates.
- **Templates**: A wide variety of pre-configured templates for different use cases, including backend servers, frontend apps, and more.

### How Frames Leverages GitHub for Templates

Frames simplifies your development by automating the process of cloning project templates directly from GitHub. These templates, which I’ve handcrafted, span a wide variety of use cases to help you get started faster:

- **Backend Templates**: Includes templates like an **Express server** for building REST APIs and other server-side applications.
- **Frontend Templates**: Includes ready-to-go setups for **React** and **Vanilla JS** to help you quickly start building user interfaces.
- **Package/Library Templates**: If you're building a **C++, Rust, or C** package or a **JavaScript library**, there's a template tailored for that too.

And with more templates on the way, Frames will continue to expand its offerings to cover even more use cases.

### Underlying Logic of Frames

At its core, Frames is all about automating tedious setup tasks. Here’s how it works:

1. **Cloning the Template**: When you run the Frames command, it first clones the GitHub repository of your chosen template. This is done using a simple `git clone` command, which fetches the project from GitHub and prepares it for use:

   ```javascript
   const repoUrl = `https://github.com/pr4j3sh/${repo}.git`;
   execSync(`git clone ${repoUrl} ${projectName}`, { stdio: "inherit" });
   ```

2. **Changing to the Project Directory**: Once cloned, Frames automatically navigates into the newly created project directory:

   ```javascript
   if (projectName !== ".") {
     chdir(projectName);
   }
   ```

3. **Cleaning Up Unnecessary Files**: To ensure your project is clean, Frames removes unnecessary files such as `.git` folders, license files, and Docker configurations:

   ```javascript
   const rm = [".git", ".github", "LICENSE", "Dockerfile"];
   rm.forEach((item) => {
     if (existsSync(item)) {
       rmSync(item, { recursive: true, force: true });
     }
   });
   ```

4. **Installing Dependencies**: If the template includes a `package.json`, Frames will automatically install all dependencies:

   ```javascript
   if (existsSync("package.json")) {
     execSync(`npm i`, { stdio: "inherit" });
   }
   ```

5. **Environment Setup**: If there is an `.env.example` file in the template, Frames renames it to `.env`, so you're all set up with the right environment variables:

   ```javascript
   if (existsSync(".env.example")) {
     renameSync(".env.example", ".env");
   }
   ```

6. **Providing Commands to Run**: Finally, Frames checks the project’s structure and provides the necessary commands to start the project. Whether it's an **npm run** for a Node.js project, **cargo run** for a Rust app, or **make run** for a C/C++ project, Frames ensures you know how to get your project running:

   ```javascript
   if (existsSync("package.json")) {
     console.log("  npm run dev");
   } else if (existsSync("Cargo.toml")) {
     console.log("  cargo run");
   } else if (existsSync("Makefile")) {
     console.log("  make run");
   }
   ```

With these automated steps, Frames saves you from setting up projects manually, letting you focus on building and coding.
