Exercise: Input validation
--------------------------

[regexp.html](regexp.html) contains a form with a single input field.

For each input character, the user input is validated by calling `validDate`.

Fix `validDate`: write a regular expression that matches the date format `dd/mm/yyyy` and
tests the `input` parameter against it.

Solved with the following Regex.

`const regex = new RegExp('[0-9]{1,2}(/)[0-9]{1,2}(/)[0-9]{4}');`

In words... I want a number with 2 digits between the values 0-9 and then a backslash and then the same and at last 4 digits with the values between 0-9.

There are shortcomings of this solution. It would validate a date like `99/01/1998`.
Otherwise Stackoverflow suggest 

`^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$`

But in the end, regex is probably not the best way to sanitize your date format. 


Exercise: Cookies
-----------------

[cookie-server.js](cookie-server.js) outputs a simple page and sets a
cookie that is passed with later requests.

Change the server so that a later visit (e.g., a client-side page
reload) produces a different output page with `"Hello again"`.


Clearing the cookie on the client-side might be helpful to observe the difference.
You can do so with
- the JavaScript console in Chrome:
  ```
   document.cookie = "MyCookie=abc123; Expires=Tue, 15 Jan 2013 21:47:38 GMT;"
  ```
  (this just sets the expiry date to some time in the past)

- Chrome's developer tools:
  ```
   Application -> Storage -> Cookies
  ```

Use `if(req.headers.cookie.match("abc123")) {res.end("<html><body><p>Hello again</p></body></html>");}`


Exercise: Hack the chat!
------------------------

[chat-server.js](chat-server.js) and [chat-client.html](chat-client.html)
contain a (vulnerable) version of the WebSocket-chat from earlier.

Can you inject a script to pop-up an alert box with "hacked!"?

Can you redirect the page, e.g., to https://www.dr.dk?

Note:
 - In HTML5 `innerHTML` will not execute `script` tags,
    as described under `Security considerations' here:
        https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
	
 - To avoid a vulnerability such as this, it is recommended to use
    `elem.textContent = data;` instead of `elem.innerHTML = data;`
    https://cheatsheetseries.owasp.org/cheatsheets/HTML5_Security_Cheat_Sheet.html#web-messaging

Alert with `<img src="" onerror="alert('HACKED')">`

Redirect with `<img src="" onerror="window.location = 'https://www.dr.dk'">`

Redirect with


Exercise: Secure the Chat!
--------------------------

Prevent XSS attacks on [chat-server.js](chat-server.js) by escaping
special characters in messages:

 - Install the `validator` package
   ```
    npm install validator
   ```

 - Load the package:
   ```
    let validator = require('validator');
   ```

 - Now the function `validator.escape` can be used to replace
   `<`, `>`, `&`, `'`, `"` and `/` in strings with HTML entities.
 
Look in `chat-server.js`

Package documentation: https://www.npmjs.com/package/validator
