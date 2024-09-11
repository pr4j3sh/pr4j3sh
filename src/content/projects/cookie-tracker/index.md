---
title: Cookie Tracker Tool
description: A Simple Solution for Data Collection and Facebook Pixel Integration
date: Sep 11 2024
demoURL: https://prajesheleven.github.io/cookie-tracker/
repoURL: https://github.com/prajeshElEvEn/cookie-tracker
---
In today's digital age, collecting user data and tracking interactions is crucial for optimizing marketing strategies and enhancing user engagement. In this blog post, we’ll dive into a powerful yet simple tool that combines form-based data collection with Facebook Pixel tracking—allowing you to collect user information efficiently and track it with Meta's analytics platform.

## What Is the Cookie Tracker Tool?

The Cookie Tracker Tool is designed to collect user data from a form and save this information in cookies for later use. Additionally, it integrates Facebook Pixel tracking to monitor page views and gather insights into user interactions on your website.

### Key Features

- **Form Data Collection**: Capture essential user information such as name, email, and phone number directly from a form.
- **Cookie Storage**: Save user data in cookies for persistent storage and future reference.
- **Facebook Pixel Integration**: Automatically include Facebook Pixel tracking for detailed analytics on user interactions.

## How Does It Work?

### 1. Form Creation and Data Handling

The tool starts by dynamically adding a form to the webpage where users can enter their name, email, and mobile number. When the form is submitted, the data is captured and stored in cookies using JavaScript.

Here’s a quick look at the code responsible for this functionality:

```javascript
document.querySelector("#app").innerHTML = `
  <div>
    <h1>User Data</h1>
    <form autocomplete="off">
      <label for="name">Name</label>
      <input id="name" type="text"/>
      <label for="email">Email</label>
      <input id="email" type="email"/>
      <label for="phone">Mobile No.</label>
      <input id="phone" type="tel"/>
      <input type="submit"/>
    </form>
  </div>
  ${tracker}
`;

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const phone = document.querySelector("#phone").value;

  document.cookie = `name=${name}; path=/;`;
  document.cookie = `email=${email}; path=/;`;
  document.cookie = `phone=${phone}; path=/;`;

  alert("Form data saved to cookies.");
});
```

This code sets up a form and saves the input data as cookies upon submission. An alert confirms that the data has been successfully saved.

### 2. Facebook Pixel Tracking

The tool also includes Facebook Pixel tracking through `tracker.js`, which helps in monitoring page views and user behavior. This script initializes the Facebook Pixel with your unique Pixel ID and starts tracking interactions.

Here’s the core of the tracking code:

```html
export default `
<!-- Facebook Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '${import.meta.env.VITE_PIXEL_ID}');
  fbq('track', 'PageView');
</script>
<noscript>
  <img height="1" width="1" style="display:none" 
       src="https://www.facebook.com/tr?id=${import.meta.env.VITE_PIXEL_ID}&ev=PageView&noscript=1"/>
</noscript>
<!-- End Facebook Pixel Code -->
`;
```

This script loads the Facebook Pixel library and sends page view events to Meta’s analytics platform. Ensure that your Pixel ID is stored in a `.env` file for proper initialization.

## Getting Started

To use the Cookie Tracker Tool:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/prajeshElEvEn/cookie-tracker
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Code**:
   ```bash
   npm run dev
   ```

This will set up the tool and start tracking user interactions on your website.

## Conclusion

The Cookie Tracker Tool is a straightforward yet powerful solution for collecting user data and integrating Facebook Pixel tracking. By combining these functionalities, you can enhance your marketing strategies with valuable insights into user behavior. Try it out and see how it can improve your data collection and tracking efforts!