---
title: Simplifying Deployment with Vite and GitHub Pages
description: Efficiently deploy your Vite app to GitHub Pages with a streamlined GitHub Actions workflow
date: Sep 11 2024
---

Deploying a static site can often seem daunting, but with Vite and GitHub Pages, it becomes a breeze. Here’s a step-by-step guide to setting up your Vite vanilla template for deployment using GitHub Pages, with an automated GitHub Actions workflow.

## Configure Your Vite Project

First, you'll need to adjust the `vite.config.js` to ensure your project builds correctly for GitHub Pages. Update your `vite.config.js` file to include the repository name in the `base` property:

```javascript
export default {
  base: "/<repo_name>/",
};
```

Replace `<repo_name>` with your actual repository name.

## Set Up GitHub Actions for Deployment

Create or modify your `.github/workflows/static.yml` file to define a workflow that automates deployment to GitHub Pages. Here's a simple workflow configuration:

```yml
name: Deploy static content to Pages

on:
  push:
    branches: ["master"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Set up Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: "npm"
      - name: Install dependencies
        run: npm ci
      - name: Set environment variable
        run: |
		    echo "SECRET_ONE=${{ secrets.SECRET_ONE }}" >> .env.local
		    echo "SECRET_TWO=${{ secrets.SECRET_TWO }}" >> .env.local
		    echo "SECRET_THREE=${{ secrets.SECRET_THREE }}" >> .env.local
      - name: Build
        run: npm run build
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: "./dist"
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

Replace `SECRET_ONE`, `SECRET_TWO`, and `SECRET_THREE` with your actual secret names.

## Add Environment Variables

Navigate to your repository’s settings:

- Go to `Settings > Secrets and variables > Actions`.
- Click `New repository secret` for each secret you want to add.
- Add secrets with the same name as used in `static.yml`.

## Commit Your Changes

Make sure to commit your `vite.config.js` and `static.yml` changes:

```bash
git add vite.config.js .github/workflows/static.yml
git commit -m "Configure Vite and GitHub Pages deployment"
git push origin master
```

With these steps, your Vite project is set up to automatically deploy to GitHub Pages with each push to the master branch, thanks to the powerful combination of Vite and GitHub Actions. Happy deploying

