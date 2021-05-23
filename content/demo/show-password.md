---
title: Counter
description: 'Empower your NuxtJS application with @nuxt/content module: write in a content/ directory and fetch your Markdown, JSON, YAML and CSV files through a MongoDB like API, acting as a Git-based Headless CMS.'
---

# Show Password Demo

- 🔗 [Demo](#demo)
- 🔗 [Code](#code)
- 🔗 [Limitations](#limitations)

## Demo

This demo makes use of the toggle password visibility feature. If enabled, and you have the HTML in place, when clicking a predefined button, the password and password repeat input (if it exists), will swap from type password to text.

<form id="spForm" class="formCon">
    <!-- Name validation--> 
    <label for="spFirstNameInp">First Name</label>
    <input class="inputStyle" id="spFirstNameInp" type="text" name="name_sf">
    <!-- Email Address validation -->
    <label for="spEmailInp">Email Address</label>
    <input class="inputStyle"  id="spEmailInp" type="text" name="email_sf">
    <!-- Password validation -->
    <div class="inputWrapper">
        <label for="spPasswordInp">Password</label>
        <input class="inputStyle passwordInp" id="spPasswordInp" type="password" name="password_sf"> 
        <button type="button" id="togglePasswordBtn" class="togglePasswordBtn">
            <dynamic-image class="openEyeImg" filename="eye-solid.svg"></dynamic-image>
            <dynamic-image class="closedEyeImg" filename="eye-slash-solid.svg"></dynamic-image>
        </button>
    </div>
    <!-- Password Repeat validation -->
    <label for="spPasswordRepeatInp">Password Repeat</label>
    <input class="inputStyle" id="spPasswordRepeatInp" type="password" name="passwordRepeat_sf">
    <!-- Submit Button -->
    <button type="submit" class="submitBtn">Submit</button>
</form>

<div id="cResultsCon" class="resultsContainer"> 
  <p class="verificationPassedP">Verification Passed: <span id="cVerificationPassed"></span></p>
  <div class="jsonCon">
    <p id="cResultsP"></p>
  </div>
</div>

## Code

<code-group>
  <code-block label="HTML" active>

```html
<form id="spForm" class="formCon">
    <!-- Name validation--> 
    <label for="spFirstNameInp">First Name</label>
    <input id="spFirstNameInp" type="text" name="name_sf">
    <!-- Email Address validation -->
    <label for="spEmailInp">Email Address</label>
    <input id="spEmailInp" type="text" name="email_sf">
    <!-- Password validation -->
    <div class="inputWrapper">
        <label for="spPasswordInp">Password</label>
        <input id="spPasswordInp" type="password" name="password_sf"> 
        <button type="button" id="togglePasswordBtn" class="togglePasswordBtn">
            <dynamic-image class="openEyeImg" filename="eye-solid.svg"></dynamic-image>
            <dynamic-image class="closedEyeImg" filename="eye-slash-solid.svg"></dynamic-image>
        </button>
    </div>
    <!-- Password Repeat validation -->
    <label for="spPasswordRepeatInp">Password Repeat</label>
    <input id="spPasswordRepeatInp" type="password" name="passwordRepeat_sf">
    <!-- Submit Button -->
    <button type="submit" class="submitBtn">Submit</button>
</form>
```
  </code-block>
  <code-block label="Javascript">

```javascript
import simpleForms from 'simpleforms.js';

let myForm = document.getElementById("spForm");

const showPasswordForm = new simpleForms(myForm, {
    errorClass: "inpError",
    escapeValues: false,
    useTogglePassword: true
});

myForm.addEventListener( "submit", function(event) {
    event.preventDefault();
    
    showPasswordForm.submit()
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    });
});
```
  </code-block>
</code-group>

## Limitations

Please keep in mind this feature is limited to one toggle button per form, and only works for the password and password report validation methods. We plan on fixing these limitations in the future.