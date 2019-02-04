# npm modules are available to make a request from a node server:

![node](https://stackabuse.com/content/images/2016/08/node-request-module.jpg)

- ### HTTP – the Standard Library

equest is a simplified HTTP client comparable ,and great for quickly getting things done.

`For example:. npm install request@2.81.0`

- ### Request
  is a simplified HTTP client comparable to Python’s requests library. This library is much more user friendly than the default http

and is great for quickly getting things done

Run the following in your terminal from the directory you want your code :
`npm install request@2.81.0`
Request is a fantastic option if you just want an easy to use library that deals with HTTP

- ### Axios
  is a Promise based HTTP client for the browser as well as node.js. Using Promises is a great advantage when dealing with code that requires a more complicated chain of events.

For example: npm install axios@0.16.2

- ### SuperAgen
  Similarly to Axios, SuperAgent is another popular library primarily used for making AJAX

`For example: npm install superagent@3.5.2`

- ### Got
  Similarly to Axios, Got works with Promises as well. The following code will work as the rest of the examples do:

`const got = require('got');`

`npm install got@7.1.0`

node-fetch which ports the browser’s fetch functionality to the backend.

# Making http request by Request node js package :

The request module is the most popular Node package for making HTTP requests.
it is really just a wrapper around Node's built-in http module.

```
Example:
const request = require('request');
request('http://stackabuse.com', function(err, res, body) {
console.log(body);
});
```

The code above submits an HTTP GET request to stackabuse.com and then prints the returned HTML to the screen.

The first argument to request can either be a URL string, or an object of options.

more common options:

url: The destination URL of the HTTP request
• method: The HTTP method to be used (GET, POST, DELETE, etc)
• headers: An object of HTTP headers (key-value) to be set in the request
• form: An object containing key-value form data.

```
const request = require('request');
const options = {
url: 'https://www.reddit.com/r/funny.json',
method: 'GET',
headers: {
'Accept': 'application/json',
'Accept-Charset': 'utf-8',
'User-Agent': 'my-reddit-client'
} };
request(options, function(err, res, body) {
let json = JSON.parse(body); console.log(json);
});
```

this request uses the GET method to retrieve JSON data directly from Reddit, which is returned as a string in the body field. From there, you can use JSON.parse and use the data as a normal JavaScript object.

There are a few ways this data can be sent, some of which are:
• body: A Buffer, String, or Stream object (can be an object if json option is set to true)
• form: An object of key-value pair data
• multipart: An array of objects that can contain their own headers and body attributes
Forms :

```
let options = {
    url: 'http://http://mockbin.com/request',
     form: { email: 'me@example.com', password: 'myPassword' }
     };
      request.post(options, callback);
```

This will upload data just like an HTML form would, with the only limitation being that you can't upload files this way

In order to do that, you need to use the formData option instead, which uses the form-data library underneath.

```
let formData = { // Pass single file with a key profile_pic:
fs.createReadStream(dirname + '/me.jpg'),

// Pass multiple files in an array
attachments:[
 fs.readFileSync(dirname + '/cover-letter.docx'),// Buffer
 fs.createReadStream(dirname + '/resume.docx'), // Stream
 ],

// Pass extra meta-data with your files
 detailed_file:{ 
 value: fs.createReadStream(dirname + '/my-special-file.txt'),
 options: {
      filename: 'data.json',
       contentType: 'application/json' 
       } 
 },
// Simple key-value pairs
 username: 'ScottWRobinson' 
 };
 request.post('http://http://mockbin.com/request',{formData: formData}, callback);
```

## example for use request module :

first :
`npm install request;`
`const request = require('request');`

**_the rest of steps can you go for files and see the example_**
