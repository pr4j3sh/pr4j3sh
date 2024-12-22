---
title: hash-tag
description: Markdown to HTML Parser
date: Nov 24 2024
demoURL: https://crates.io/crates/hash-tag
repoURL: https://github.com/pr4j3sh/hash-tag
draft: false
---

hash-tag is a Markdown to HTML Parser written in `rust`, built with WASM, for direct use in `JavaScript`.

### **Introduction**

Markdown is the go-to format for creating structured content with minimal syntax. However, turning Markdown into usable HTML can be tricky without the right tools. Enter **hash-tag**—a high-performance Markdown-to-HTML parser designed with Rust for speed and built with WebAssembly (WASM) for seamless integration into JavaScript environments.

### **Key Features**

- **Comprehensive Markdown Support**: Parses:
  - Headings (`#`, `##`, etc.)
  - Blockquotes (`>`)
  - Inline code (`` ` ``) and code blocks
  - Paragraphs
  - Links
  - Bold (`**`), italics (`*`)
  - Unordered (`-`) and ordered lists (`1.`)
- **Output Visualization**: Preview rendered HTML using the [Frames UI](https://pr4j3sh.github.io/ui/).

## **Getting Started**

### **Using `cargo`**

Install **hash-tag** via Cargo to leverage its power in Rust environments.

#### Installation

```bash
cargo install hash-tag
```

#### Commands

1. **Convert Markdown to HTML**:

   ```bash
   hash-tag path/to/file.md
   ```

   > Generates `index.html`.

2. **Specify Output File**:

   ```bash
   hash-tag path/to/file.md -o path/to/file.html
   ```

3. **Preview Output**:

   ```bash
   hash-tag path/to/file.md -v path/to/view.html
   ```

   > Opens the rendered file using [Frames UI](https://pr4j3sh.github.io/ui/).

### **Using `npm`**

For JavaScript developers, integrate **hash-tag** directly into your projects using NPM.

#### Setup

1. Create a Node.js environment:

   ```bash
   mkdir test
   cd test
   npm init -y
   ```

2. Add `"type": "module",` to your `package.json`.

3. Install the [hash-tag](https://www.npmjs.com/package/@pr4j3sh/hash-tag) NPM package:

   ```bash
   npm install @pr4j3sh/hash-tag
   ```

#### Example

Create an `index.js` file with the following code:

```javascript
import * as wasm from "@pr4j3sh/hash-tag";

const html = wasm.parse("## heading 2\n");
console.log(html);
```

Run the script:

```bash
node index.js
```

**Output**:

```html
<h2>heading 2</h2>
```

## **References**

- [Rust Documentation](https://www.rust-lang.org/learn/get-started)
- [wasm-bindgen](https://github.com/rustwasm/wasm-bindgen)
- [wasm-pack](https://github.com/rustwasm/wasm-pack)
- [Frames UI](https://pr4j3sh.github.io/ui/)
- [Frames on GitHub](https://github.com/pr4j3sh/frames)

Hash-tag bridges the gap between Markdown simplicity and HTML flexibility, empowering developers to integrate Markdown parsing efficiently into modern workflows.
