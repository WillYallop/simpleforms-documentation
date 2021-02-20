---
title: Counter
description: 'Empower your NuxtJS application with @nuxt/content module: write in a content/ directory and fetch your Markdown, JSON, YAML and CSV files through a MongoDB like API, acting as a Git-based Headless CMS.'
---

# Textarea Counter Demo

- 🔗 [Demo](#demo)
- 🔗 [Code](#code)
- 🔗 [Limitations](#limitations)

## Demo

Here is demo making use of the textarea counter feature. This will take character count of a a specific textarea, and the max length of that validation type, then place the data inside an element via a specified id.

<form id="counterForm" class="formCon">
  <!-- Name Verification--> 
  <label for="cFirstNameInp">First Name</label>
  <input class="inputStyle" id="cFirstNameInp" type="text" name="name_sf">
  <!-- Email Address Verification -->
  <label for="cEmailInp">Email Address</label>
  <input class="inputStyle"  id="cEmailInp" type="text" name="email_sf">
    <!-- Textarea Verification -->
  <div class="inputWrapper">
      <label for="cmMssageInp">Message</label>
      <textarea class="textareaStyle" name="message_sf" id="cmMssageInp"></textarea>
      <div id="messageCount" class="messageCountCon">0</div>
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
  <form id="counterForm" class="formCon">
    <!-- Name Verification--> 
    <label for="cFirstNameInp">First Name</label>
    <input class="inputStyle" id="cFirstNameInp" type="text" name="name_sf">
    <!-- Email Address Verification -->
    <label for="cEmailInp">Email Address</label>
    <input class="inputStyle"  id="cEmailInp" type="text" name="email_sf">
      <!-- Textarea Verification -->
    <div class="inputWrapper">
        <label for="cmMssageInp">Message</label>
        <textarea class="textareaStyle" name="message_sf" id="cmMssageInp"></textarea>
        <div id="messageCount" class="messageCountCon">0</div>
    </div>
    <!-- Submit Button -->
    <button type="submit" class="submitBtn">Submit</button>
  </form>
  ```
  </code-block>
  <code-block label="Javascript">

  ```javascript
  import simpleForms from 'simpleforms.js';

  let myForm = document.getElementById("counterForm");

  const counterForm = new simpleForms(myForm, {
    errorClass: "inpError",
    escapeValues: false,
    useMessageCount: true
  });

  myForm.addEventListener( "submit", function(event) {
    event.preventDefault();
    
    counterForm.submit()
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

Please keep in mind this feature is limited to one counter per form, and can only be used on inputs with the "message_sf" verification method. We plan on fixing these limitations in the future.f