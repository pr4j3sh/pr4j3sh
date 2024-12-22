---
title: Publishing NPM Package
description: Publish an npm Package with GitHub CI/CD
date: Nov 06 2024
---

Publishing an npm package can significantly enhance your JavaScript project by making it reusable and shareable with other developers. This guide will cover the essentials, from setting up two common types of npm packages to configuring GitHub Actions for automated publishing.

## Types of npm Packages

1. **CLI (Command Line Interface) Apps**:  
   CLI tools allow users to interact with your application from the command line. For example, [**bingehub**](https://github.com/pr4j3sh/bingehu) is a CLI tool that lets users browse movies, series, and anime. CLI tools use the `bin` field in `package.json` to specify the entry file and require making the file executable.

2. **Handler Libraries**:  
   Libraries or handlers export reusable functions and modules. These packages are used programmatically within other applications and typically use simple exports. For instance, [**exhandlers**](https://github.com/pr4j3sh/exhandler) exports utility middlewares for Express.js, making it easy to integrate pre-built handlers in Express apps.

## Creating an Entry File for CLI Apps

To create a CLI app, your entry file (e.g., `index.js`) needs to be configured to run directly from the command line. Here’s how:

1. **Define `bin` in `package.json`**:

   ```json
   "bin": {
     "bingehub": "./index.js"
   }
   ```

   This tells npm to treat `index.js` as the main executable file for `bingehub`.

2. **Add a Shebang to `index.js`**:  
   Add the following line at the top of your entry file to ensure it uses Node.js:

   ```javascript
   #!/usr/bin/env node
   ```

3. **Make the File Executable**:  
   Run the following command to make `index.js` executable:

   ```bash
   chmod +x index.js
   ```

### Example `package.json` for CLI App

```json
{
  "name": "bingehub",
  "version": "1.0.6",
  "description": "A CLI tool to browse movies, series, and anime.",
  "main": "index.js",
  "type": "module",
  "bin": {
    "bingehub": "./index.js"
  },
  "scripts": {
    "test": "echo \"Running tests...\" && exit 0",
    "build": "echo \"Build completed.\"",
    "start": "node .",
    "dev": "node --watch ."
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/pr4j3sh/bingehub.git"
  },
  "keywords": ["CLI", "movies", "series", "anime", "bingehub"],
  "author": "Prajesh Pratap Singh <prajesh.eleven118@gmail.com> (https://pr4j3sh.vercel.app/)",
  "license": "MIT",
  "dependencies": {
    "axios": "^1.7.7",
    "inquirer": "^11.0.2",
    "nanospinner": "^1.1.0"
  }
}
```

## Setting Up a Handler Library

Handler libraries like **exhandlers** export reusable code, such as middleware functions, that other applications can import and use.

### Example `package.json` for Handler Library

Here’s an example of the configuration for **exhandlers**:

```json
{
  "name": "exhandlers",
  "description": "Utility middlewares for working with ExpressJs",
  "version": "1.0.5",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Running tests...\" && exit 0",
    "build": "echo \"Build completed.\"",
    "dev": "node ."
  },
  "keywords": [
    "express",
    "expressjs",
    "handlers",
    "middlewares",
    "server",
    "backend",
    "nodejs"
  ],
  "author": "Prajesh Pratap Singh <prajesh.eleven118@gmail.com> (https://pr4j3sh.vercel.app/)",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/pr4j3sh/exhandlers.git"
  },
  "bugs": {
    "url": "https://github.com/pr4j3sh/exhandlers/issues"
  },
  "homepage": "https://github.com/pr4j3sh/exhandlers#readme",
  "dependencies": {
    "cors": "^2.8.5"
  }
}
```

> Read more about naming your package [here](https://docs.npmjs.com/package-name-guidelines)

## Publishing Your npm Package

### 1. Set Up an npm Account and Token

1. **Create an Account on npm**: Go to [npmjs.com](https://www.npmjs.com/) and create an account if you haven’t already.
2. **Generate an npm Token**: In your npm account settings, generate a classic token to authenticate publishing. Copy this token and save it securely.

### 2. Login Locally and Publish Manually (Optional)

If you want to test publishing before setting up CI/CD, log in locally and publish with the following commands:

```bash
npm login
npm publish --access public
```

## Automating Publishing with GitHub CI/CD

GitHub Actions allows you to automate publishing when a new release is created, making the process seamless and reliable.

### 1. Configure GitHub Secrets

In your GitHub repository:

- Go to **Settings > Secrets and variables > Actions**.
- Add a new secret named `NPM_TOKEN` and paste your npm token here.

### 2. Create a GitHub Action Workflow

Add a file `.github/workflows/npm-publish.yml` in your repository with the following contents:

```yaml
name: Node.js Package

on:
  release:
    types: [created]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm test

  publish-npm:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          registry-url: https://registry.npmjs.org/
      - run: npm ci
      - run: npm publish --access public
        env:
          NODE_AUTH_TOKEN: ${{secrets.NPM_TOKEN}}
```

This workflow does the following:

- Runs tests and checks on each release.
- Automatically publishes the package to npm when a new GitHub release is created.

### 3. Test the Automation

- Push your code to GitHub.
- Create a new release on GitHub. The workflow will automatically run, and if successful, your package will be published to npm.

## Conclusion

Using GitHub Actions with npm makes it easier to maintain and publish your packages. With a CI/CD setup, you can automate repetitive tasks, ensuring your package is always up-to-date and available for users with each new release.

