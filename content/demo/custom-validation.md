---
title: Counter
description: 'Empower your NuxtJS application with @nuxt/content module: write in a content/ directory and fetch your Markdown, JSON, YAML and CSV files through a MongoDB like API, acting as a Git-based Headless CMS.'
---

# Custom Validation Demo

- 🔗 [Demo](#demo)
- 🔗 [Code](#code)
- 🔗 [Important](#important)

## Demo

This demo makes use of the custom validation method feature. This example, (as useless as it is) only allows you to input 4 question marks. For more info on validation methods, check out the [validation methods page](/guide/validation-methods).

<form id="customValFrom" class="formCon">
    <!-- Custom validation--> 
    <label for="cvCustomInp">Custom Validation</label>
    <input class="inputStyle" id="cvCustomInp" type="text" name="custom_sf">
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
<form id="customValFrom" class="formCon">
    <!-- Custom validation--> 
    <label for="cvCustomInp">Custom Validation</label>
    <input id="cvCustomInp" type="text" name="custom_sf">
    <!-- Submit Button -->
    <button type="submit" class="submitBtn">Submit</button>
</form>
```
  </code-block>
  <code-block label="Javascript">

```javascript
import simpleForms from 'simpleforms.js';

let myForm = document.getElementById("customValFrom");

const customValFrom = new simpleForms(myForm, {
    methods: {
        custom_sf: {
            active: true,
            regex: /^[?]+(?:-[?]+)*$/,
            min: 4,
            max: 4
        }
    },
    errorClass: "inpError",
    escapeValues: false
});


myForm.addEventListener( "submit", function(event) {
    event.preventDefault();
    
    customValFrom.submit()
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

## Important

You must add the "_sf" to the end of your custom input method name for it to work! Also if your custom method does not specify any values other than the method name it will default to the following:

```javascript
custom_sf: {
    active: true,
    regex: undefined,
    min: 2,
    max: 100
}
```