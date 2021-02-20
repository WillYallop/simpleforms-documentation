---
title: Setup
description: 'Empower your NuxtJS application with @nuxt/content module: write in a content/ directory and fetch your Markdown, JSON, YAML and CSV files through a MongoDB like API, acting as a Git-based Headless CMS.'
---

# Setup

- 🔗 [Installation](#installation)
- 🔗 [Basic Setup](#basic-setup)

## Installation

You can install Simpleforms.js in a variety of ways depedning on your projects setup.

<code-group>
  <code-block label="yarn" active>

  ```bash
  yarn add --exact simpleforms.js
  yarn add simpleforms.js
  ```

  </code-block>
  <code-block label="npm">

  ```bash
  npm install --save-exact simpleforms.js
  npm install simpleforms.js
  ```

  </code-block>
</code-group>

Once the library is installed you have to import to be able to create a new instance.

```javascript
import simpleForms from "simpleforms.js";
```

## Basic Setup

Each name field on the inputs bellow corresponds to a unique validation method. You can find a list of these and what they do on our [validation methods page](/guide/validation-methods), and you can even add your own custom ones as well.

**Important!** If you dont want an input to be validated, dont name your inputs anything with the **"_sf"** tag!

```html
<form id="myForm">
    <!-- Name Verification-->
    <label for="firstNameInp">First Name</label>
    <input id="firstNameInp" type="text" name="name_sf">
    <!-- Email Address Verification -->
    <label for="emailInp">Email Address</label>
    <input id="emailInp" type="text" name="email_sf">
    <!-- Submit Button -->
    <button type="submit">Submit</button>
</form>
```

Now you have your HTML in place, you will need to initialise a new instance in your Javascript. You do this by passing simpleforms the form element you wish to validate, along with your [config](/guide/config).

```javascript
let myForm = document.getElementById("myForm");

const contactForm = new simpleForms(myForm, {
  errorClass: "inpError",
  escapeValues: false
});
```

Now with your new instance, when you want to validation your form all you have to do is call the submit function. In this example we have the submit function wrapped within a event listern for the form submit event.

```javascript
myForm.addEventListener( "submit", function(event) {
  event.preventDefault();
  
  contactForm.submit()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log("Verification Failed!");
    console.log(error);
  });
});
```

For more exmaples on how to use Simpleforms.js features: checkout our [demos](/demo/counter) for a variety of setups.