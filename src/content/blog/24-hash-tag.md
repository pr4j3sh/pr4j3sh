---
title: Building hash-tag
description: How I built hash-tag
date: Nov 24 2024
draft: false
---

When building the `hash-tag` parser in Rust, the goal was to create a high-performance Markdown-to-HTML converter with seamless integration into JavaScript via WASM. Below, we explore the key logic behind the parser, with code snippets to explain how it handles various Markdown elements.

#### 1. **Line-by-Line Parsing**

The first step in parsing Markdown is breaking the input text into individual lines. The `get_lines` function takes care of this:

```rust
fn get_lines(md: &str) -> Vec<String> {
    let mut lines: Vec<String> = Vec::new();
    let mut line = String::from("");
    for c in md.chars() {
        if c == '\n' {
            if !line.is_empty() {
                lines.push(line.clone());
            }
            line.clear();
        } else {
            line.push(c);
        }
    }
    if !line.is_empty() {
        lines.push(line);
    }
    lines
}
```

This function processes the Markdown string, splitting it into lines based on the newline character `\n`, which is crucial for handling different block elements like headings, lists, and paragraphs.

#### 2. **Handling Block Elements**

The parser recognizes various Markdown syntax, such as headings, blockquotes, and lists. Each line is inspected to identify these elements.

- **Headings** are identified by the number of `#` characters at the beginning of a line:

```rust
if j == 0 && c == '#' {
    let count_hash = l.chars().filter(|&c| c == '#').count();
    let line = process_line(&l[count_hash + 1..]);
    let line = format!("<h{count_hash}>{line}</h{count_hash}>");
    html.push_str(&line);
}
```

Here, the `count_hash` represents the heading level (e.g., `#` for `<h1>`, `##` for `<h2>`). The rest of the line is processed using `process_line`, which handles inline elements like bold and italics.

- **Lists** (both ordered and unordered) are recognized by the first character in the line:

```rust
if j == 0 && c == '-' {
    if !tag_ul {
        html.push_str("<ul>");
    }
    tag_ul = true;
    let line = process_line(&l[2..]);
    let line = format!("<li>{line}</li>");
    html.push_str(&line);
}
```

This snippet checks for the unordered list syntax (lines starting with `-`). It starts a new `<ul>` tag if it hasn't already and adds each list item inside `<li>` tags.

#### 3. **Inline Elements: Code, Bold, Italics, and Links**

Inline elements such as code snippets, bold text, italics, and links are handled in the `process_line` function. Here's how the parser handles some of these:

- **Code Snippets** are wrapped in `<code>` tags when enclosed by backticks:

```rust
if c == '`' {
    tag_code = !tag_code;
    if tag_code {
        line.push_str("<code>");
    } else {
        line.push_str("</code>");
    }
}
```

- **Bold and Italic Text** are detected by consecutive `*` or `_` characters:

```rust
if c == '*' {
    if chars.peek() == Some(&'*') {
        chars.next();
        tag_b = !tag_b;
        if tag_b {
            line.push_str("<b>");
        } else {
            line.push_str("</b>");
        }
    }
}
```

- **Links** are processed by recognizing the Markdown link syntax (`[text](url)`):

```rust
if c == '[' {
    let mut text = String::new();
    while let Some(&next) = chars.peek() {
        if next == ']' {
            chars.next();
            break;
        }
        text.push(next);
        chars.next();
    }
    if chars.peek() == Some(&'(') {
        let mut url = String::new();
        while let Some(&next) = chars.peek() {
            if next == ')' {
                chars.next();
                break;
            }
            url.push(next);
            chars.next();
        }
        line.push_str(&format!("<a class=\"link\" href=\"{url}\" target=\"_blank\">{text}</a>"));
    } else {
        line.push('[');
        line.push_str(&text);
        line.push(']');
    }
}
```

#### 4. **Closing Tags**

The parser also ensures proper closing of HTML tags like unordered and ordered lists. The `close_list_tags` function takes care of this:

```rust
fn close_list_tags(tag_ul: &mut bool, tag_ol: &mut bool, html: &mut String) {
    if *tag_ul {
        html.push_str("</ul>");
        *tag_ul = false;
    }
    if *tag_ol {
        html.push_str("</ol>");
        *tag_ol = false;
    }
}
```

Before adding new elements like lists or blockquotes, it checks if the current list tags need to be closed.

#### 5. **Final Parsing: Putting It All Together**

The main parsing logic happens in the `parse` function. It processes each line and constructs the corresponding HTML:

```rust
#[wasm_bindgen]
pub fn parse(md: String) -> String {
    let mut html = String::from("");
    let lines: Vec<String> = get_lines(&md);

    for l in lines.iter() {
        // Parsing logic for headings, lists, blockquotes, etc.
    }
    html
}
```

This function calls `get_lines` to split the Markdown text into lines and processes each line based on its syntax.

### Conclusion

Building `hash-tag` involved creating a robust logic that can interpret and convert various Markdown syntax into valid HTML. By breaking down the Markdown into lines, detecting block elements (like headings and lists), and processing inline elements (such as links and bold text), we were able to create a highly efficient parser. This Rust-based implementation is designed for speed and can be easily integrated into JavaScript via WASM, enabling web developers to quickly convert Markdown to HTML.
