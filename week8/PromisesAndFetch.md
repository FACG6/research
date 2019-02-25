# Promises and Fetch  : 
## What is Promise ?
 > object represents the result of an asynchronous operation .
 
  *  A promise is in one of three different states:
     * pending - The initial state of a promise.
     * fulfilled - The state of a promise representing a successful operation.
     * rejected - The state of a promise representing a failed operation.

 ###### A pending promise can either be fulfilled with a value, or rejected with a reason (error)
 
![](https://javascript.info/article/promise-basics/promise-resolve-reject.png)

 #### Example :
```javascript 
const getData = (fileName, type) =>
  new Promise((resolve, reject) =>
    fs.readFile(fileName, type, (err, data) => {
      return err ? reject(err) : resolve(data);
    })
  );

getData('./file.txt', 'utf8')
  .then(data => console.log('Data: ', data))
  .catch(error => console.log('Error: ', error));

```
> We use new Promise to construct the promise. We give the constructor a factory function which does the actual work. This function is called immediately with two arguments. The first argument fulfills the promise and the second argument rejects the promise. Once the operation has completed, we call the appropriate function.


## What is fetch and how do you use it?

> The fetch() method takes one mandatory argument, the path to the resource you want to fetch. It returns a Promise that resolves to the Response to that request, whether it is successful or not. You can also optionally pass in an init options object as the second argument

```javascript
fetch('http://example.com/movies.json')
  .then((response) => response.json())
  .then((myJson) => console.log(JSON.stringify(myJson)));
```
```javascript

const url = 'https://example.com/profile';
const data = {
  username: 'example'
};

fetch(url, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  .then(response => console.log('Success:', JSON.stringify(response)))
  .catch(error => console.error('Error:', error));
  ```
## What advantages do promises provide over callbacks, what are the downsides of using promises?

 #### advantages do promises :
 > The promises have over simple callback handlers
1. Readability
     > Promises, offer much better readability allowing you to chain as many calls as you’d like. With the advent of ES6, flattening can also be easily achieved
2. Error Handling
3. Better definition of control flow of asynchronous logic
 ### Downsides of using promise :
  * promise is used for asynchrounous so, when we need to use synchronous we can not use promise at all
## What are the downsides to using Fetch?
   a) The Promise returned from fetch() **won’t reject on HTTP error status even if the response is an HTTP 404 or 500**. Instead, it will resolve normally (with ok status set to false), and it will only reject on **network failure** or if anything prevented the request from completing.

  b) By default, fetch won't send or receive any cookies from the server, to overcome this you must provide credentials option:

  ```javascript
  //similar to XMLHttpRequest with regards to cookies
  fetch('/users', {
    credentials: 'same-origin'
  })
  ```
  ```javascript
  // sending credentials to other domains:
  fetch('https://example.com:1234/users', {
    credentials: 'include'
  }) 
  ```

  C) While it’s a great improvement over XHR, especially considering its Service Workers integration, **Fetch currently has no way to abort a request once it’s done**. With Fetch it’s also hard to measure upload progress.

  If you need those things in your app, the Axios JavaScript library might be a better fit.

## How to cancel a fetch request
We can abort fetch request using  **AbortController** and **AbortSignal**, a generic API to notify abort events

You integrate this API by passing a signal as a fetch parameter:
```javascript
const controller = new AbortController()
const signal = controller.signal

fetch('./file.json', { signal })
```
You can set a timeout that fires an abort event 5 seconds after the fetch request has started, to cancel it:
``` setTimeout(() => controller.abort(), 5 * 1000) ```
Conveniently, if the fetch already returned, calling ```abort()``` won’t cause any error.

When an abort signal occurs, fetch will reject the promise with a ```DOMException``` named ```AbortError```:

```javascript
fetch('./file.json', { signal })
  .then(response => response.text())
  .then(text => console.log(text))
  .catch(err => {
    if (err.name === 'AbortError') {
      console.error('Fetch aborted')
    } else {
      console.error('Another error', err)
    }
  })
  ```




   