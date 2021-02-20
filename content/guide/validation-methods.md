---
title: Validation Methods
description: 'Empower your NuxtJS application with @nuxt/content module: write in a content/ directory and fetch your Markdown, JSON, YAML and CSV files through a MongoDB like API, acting as a Git-based Headless CMS.'
---

# Validation Methods

- 🔗 [Method Types](#method-types)
- 🔗 [Custom Validation](#custom-validation)

## Method Types

Here are all of the current Validation Methods types. To use them on an input simply put the method name as the name value on the input or textarea. This will allow Simpleforms.js to determine what method you want to validate with, and as an inverse: what inputs you dont want validating.

| Methods           | Validation                                                       |
|-------------------|------------------------------------------------------------------|
| email_sf          |  `Min Characters: 5`<br> `Max Characters: 100`<br> Must match email regex. |
| phoneUk_sf        | `Min Characters: 2`<br> `Max Characters: 15`<br> Must match UK phone numbers regex. |
| phoneUsa_sf       | `Min Characters: 2`<br> `Max Characters: 15`<br> Must match USA phone numbers regex. |
| name_sf           | `Min Characters: 2`<br> `Max Characters: 15`<br> Can only include `a-z A-Z`. |
| message_sf        | `Min Characters: 5`<br> `Max Characters: 200`<br> Can only include `a-z A-Z!?.,`. |
| password_sf       | `Min Characters: 4`<br> `Max Characters: 20`<br> Medium strength password must include 8 characters one of which being a number or capital. <br> Strong strength passowrd must include 8 characters one being a capital, number and special character `(!@#$%^&*)`. |
| passwordRepeat_sf | Must match password input. |
| checkbox_sf | Must be true. |

## Custom Validation

For a custom validation method you have to pick a method name that does not exists, and it must include "_sf" at the end for Simpleforms.js to recognise it as a validation method. For a demo on custom validations and for more information you can visit our [custom validation demo](/demo/custom-validation).