---
title: Counter
description: 'Empower your NuxtJS application with @nuxt/content module: write in a content/ directory and fetch your Markdown, JSON, YAML and CSV files through a MongoDB like API, acting as a Git-based Headless CMS.'
---

# Password Strength Demo

- 🔗 [Demo](#demo)
- 🔗 [Code](#code)
- 🔗 [Limitations](#limitations)

## Demo

This demo makes use of the password strength feature. If enabled, and you have the HTML in place, Simpleforms.js will swap between classes depending on the correct password strength.

<form id="psForm" class="formCon">
    <!-- Name validation--> 
    <label for="psFirstNameInp">First Name</label>
    <input class="inputStyle" id="psFirstNameInp" type="text" name="name_sf">
    <!-- Email Address validation -->
    <label for="psEmailInp">Email Address</label>
    <input class="inputStyle"  id="psEmailInp" type="text" name="email_sf">
    <!-- Password validation -->
    <div class="inputWrapper">
        <label for="psPasswordInp">Password</label>
        <input class="inputStyle" id="psPasswordInp" type="password" name="password_sf"> 
        <div id="strengthIndicator" class="strengthCon">
            <div class="strenthCol weakCol"></div>
            <div class="strenthCol mediumCol"></div>
            <div class="strenthCol strongCol"></div>
        </div>
    </div>
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
<form id="psForm" class="formCon">
    <!-- Name validation--> 
    <label for="psFirstNameInp">First Name</label>
    <input id="psFirstNameInp" type="text" name="name_sf">
    <!-- Email Address validation -->
    <label for="psEmailInp">Email Address</label>
    <input id="psEmailInp" type="text" name="email_sf">
    <!-- Password validation -->
    <div class="inputWrapper">
        <label for="psPasswordInp">Password</label>
        <input id="psPasswordInp" type="password" name="password_sf"> 
        <div id="strengthIndicator" class="strengthCon">
            <div class="strenthCol weakCol"></div>  
            <div class="strenthCol mediumCol"></div>
            <div class="strenthCol strongCol"></div>
        </div>
    </div>
    <!-- Submit Button -->
    <button type="submit" class="submitBtn">Submit</button>
</form>
```
  </code-block>
  <code-block label="Javascript">

```javascript
import simpleForms from 'simpleforms.js';

let myForm = document.getElementById("psForm");

const passStrengthForm = new simpleForms(myForm, {
    errorClass: "inpError",
    escapeValues: false,
    useStrengthIndicator: true
});

myForm.addEventListener( "submit", function(event) {
    event.preventDefault();
    
    passStrengthForm.submit()
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

Please keep in mind this feature is limited to one strength indicator per form, and only works on the password_sf validation method. Also a weak password will also fail, this is intentional, however if people would like the option to make it passable then please let us know by contact the [author](https://williamyallop.com/contact)!