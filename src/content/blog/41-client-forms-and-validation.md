---
title: Forms and Validations
description: Client side forms and their validations
date: Dec 23 2024
draft: true
---

Client side forms and their validations is going to be two parts, where first we'll talk about how to create and validate in vanilla js and then step up to use it in a framework/library such as react js.

this is how you should access form and it's values

```js
const loginForm = document.querySelector('form[name="loginForm"]');
loginForm.addEventListener("submit", handleLogin);

function handleLogin(e) {
  e.preventDefault();
  const { email, password } = e.target.elements;
  const values = {
    email: email.value,
    password: password.value,
  };

  console.log(values);
}
```

this is how you should access any individual form element

```js
const password = document.querySelector('input[name="password"]');
```
