---
title: Config
description: 'Simpleforms.js has a variety of config options to make it as flexable as possible for your frontend designs. For information on the password strength, password toggle, message counter'
---

# Config

- 🔗 [Options](#options)
- 🔗 [Validation Method Config](#validation-method-config)

## Options

Simpleforms.js has a variety of config options to make it as flexable as possible for your frontend designs. For information on the password strength, password toggle, message counter and more you can see examples and breakdowns on the demo pages, so you can get up and running with Simpleforms.js quickly.

| Config Option          | Type    | Default             | Breakdown                                                                                                           |
|------------------------|---------|---------------------|---------------------------------------------------------------------------------------------------------------------|
| errorClass             | String  | "error"             | This is the class that is added to inputs that fail validation.                                                     |
| watchKeyup             | Boolean | true                | This adds an event listener of "keyup" to each field with a method as the name, to verify the data as you type.     |
| escapeValues           | Boolean | true                | This will escape the values of each input for the promise data.                                                     |
| useTogglePassword      | Boolean | false               | This being true enables the logic of toggling the passwords type from password to text.                             |
| togglePasswordBtnId    | String  | "togglePasswordBtn" | This is the id of the toggle password button.                                                                       |
| activePassowrdBtnClass | String  | "visible"           | This is the class that is added when the password input type is set to text.                                        |
| useStrengthIndicator   | Boolean | false               | This being true enables the logic to displayling the current passwords strength value.                              |
| strengthIndicatorId    | String  | "strengthIndicator" | This is the id of the strength indicator element.                                                                   |
| useMessageCount        | Boolean | false               | This being true enables the logic to update the message value string count.                                         |
| messageCountId         | String  | "messageCount"      | This is the id of the message count indicator element.                                                              |
| messageCountErrorClass | String  | "error"             | This is the error class that gets applied to the message count element if the length exceeds the methods max count. |

## Validation Method Config

Here are the defaults for the validation method config, each one of these can be overwritten. To edit one of these for your config, use this format, but make sure to use the correct data types.

```javascript
methods: {
    email_sf: {
        active: true,
        regex: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        min: 5,
        max: 100
    },
    phoneUk_sf: {
        active: true,
        regex: /^(?:(?:\(?(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?(?:\(?0\)?[\s-]?)?)|(?:\(?0))(?:(?:\d{5}\)?[\s-]?\d{4,5})|(?:\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3}))|(?:\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4})|(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}))(?:[\s-]?(?:x|ext\.?|#)\d{3,4})?$/,
        min: 2,
        max: 15
    },
    phoneUsa_sf: {
        active: true,
        regex: /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/,
        min: 2,
        max: 15
    },
    name_sf: {
        active: true,
        regex: /^[a-z A-Z]+(?:-[a-z A-Z]+)*$/,
        min: 2,
        max: 15
    },
    message_sf: {
        active: true,
        regex: /^[a-z A-Z!?.,]+(?:-[a-z A-Z!?.,]+)*$/,
        min: 5,
        max: 200
    },
    password_sf: {
        active: true,
        mediumRegex: "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})",
        strongRegex: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})",
        min: 4,
        max: 20
    },
    passwordRepeat_sf: {
        active: true
    },
    checkbox_sf: {
        active: true
    }
}
```