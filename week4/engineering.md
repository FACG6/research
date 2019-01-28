# Engineering

### What is modularization?

Modules means splitting your application into separate files instead of having all of your application in one file. 

It is also breaking up your code into separate functions in the same file based on the task it executes instead of writing them in one function.

### Why is it useful?

* Functions are resusable. 
* Unit Testing.
* Easy to debug. 
* The code is more readable.
* Each function executes a different task.

### What is a module?

Small programs that can be integrated in your full app or program.

#### 3 types of modules.

 * Node 3rd-party module, written by other people.
 * Node core module, such as path, fs, http, stream, REPL, events.


You can download useful 3rd-party modules (also known as "packages") from the Node Package Manager (npm).

* Modules you write yourself:

### Why to use require?

In Node, things are only visible to other things in the same file, meaning variables, functions, classes and class members. 
Every file is a module itself and all functions inside it are private.

**Use Require to load a module.**

Example, 
var misc = require('./misc')
<br>

### Why to use exports?

To expose things we use module.exports and export everything we want.

Example, 
module.exports = music

### Why require and exports can't be run in the browser?

Require() is not part of the standard JavaScript API. It's a built-in function with a special purpose: to load modules.

* In browser JavaScript, scripts are added via the script element. When they execute, they all have direct access to the global scope, a "shared space" among all scripts.

* In Node.js, each module has its own scope and can't access directly other things.

### How to use Modolurizaion in client-side code?

Divide your functions into smaller and separate functions, easier to understand. 


## **JavaScript being single-threaded can be non-blocking**

  In the first you should know the different between **syncronous** function and  **asyncronous** function.

 ### _**Syncronous**_ function :
   In sync function the operations blocking .the script stops and waits for the server to send back a reply before continuing.

 ### _**Asyncronous**_ function :
  which the script allows the page to continue to be processed and handles the reply if and when it arrives.

 ### Why should you use asyncronous forms of functions wherever possible in Node?
 * To avoid blocking the event loop ,while the server handeling your request the web will not be freezed; the visitor can interact with the web and do different tasks simply . 

### What are error-first callbacks, and why is it important to follow that pattern in your own code?

  * Somtimes happend unexpected error in callback function so that is the first argument for the callback function should be an error object. If the error argument is null, then the operation was successful and if the error argument is not null, then an error has occurred.

    ```javascript
    const callback = function(err, data) =>{
        if (err) { 
             console.log(err);
            }
            else{
               console.log(data);
            }
    };
    ```
### Why should you avoid using throw in callbacks?

* The throw statement throws a user-defined exception. Execution of the current function will stop (the statements after throw won't be executed), and control will be passed to the first catch block in the call stack. If no catch block exists among caller functions, the program will terminate.

* Asynchronous exception is uncatchable because the intended catch block is not present when the asynchronous code is executed. Instead, the exception will propagate all the way and terminate the program.

### When might you use the syncronous form of a function instead?
* When the functions don't require a time to execute, and it don't have a functions like setTimeout() or anything require a time more than the others.

## File system in Nodejs:

where NodeJs comes in. In Node, while the file system is reading the file, Node uses the idle time to handle other requests. When the file system is done, it’s smart enough to tell Node to come take the resource and send to the browser. This is possible because of Node’s event loop.

### Node.js - fs module:
File I/O is provided by simple wrappers around standard POSIX functions.
To use the fs module you have to require it with.
> .const fs = require('fs').

All the methods have asynchronous and synchronous forms.

 ### Methods of fs module :
The purpose of the fs.access method is to check if a user have permissions for the given file or path.

#### ReadFile()
method is used to read files on your computer.

#### fs.access:
Constants exposed for permission checking:

  * fs.constants.F_OK - to check if the path   is visible to the calling process,
  * fs.constants.R_OK - to check if the path   can be read by the process,
  * fs.constants.W_OK - to check if the path   can be written by the process,
  * fs.constants.X_OK - to check if the path   can be executed by the process.

### Node.js - Path Module:
Node.js path module is used for handling and transforming file paths. This module can be imported using the following syntax.

> var path = require("path")

#### Methods of path module:
* path.join([path1][, path2][, ...])

Join all the arguments together and normalize the resulting path.

* path.relative(from, to)

Solve the relative path from from to to.

* path.dirname(p)

Return the directory name of a path. Similar to the Unix dirname command.

┌────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                              href                                              │
├──────────┬──┬─────────────────────┬────────────────────────┬───────────────────────────┬───────┤
│ protocol │  │        auth         │          host          │           path            │ hash  │
│          │  │                     ├─────────────────┬──────┼──────────┬────────────────┤       │
│          │  │                     │    hostname     │ port │ pathname │     search     │       │
│          │  │                     │                 │      │          ├─┬──────────────┤       │
│          │  │                     │                 │      │          │ │    query     │       │
"  https:   //    user   :   pass   @ sub.example.com : 8080   /p/a/t/h  ?  query=string   #hash "
│          │  │          │          │    hostname     │ port │          │                │       │
│          │  │          │          ├─────────────────┴──────┤          │                │       │
│ protocol │  │ username │ password │          host          │          │                │       │
├──────────┴──┼──────────┴──────────┼────────────────────────┤          │                │       │
│   origin    │                     │         origin         │ pathname │     search     │ hash  │
├─────────────┴─────────────────────┴────────────────────────┴──────────┴────────────────┴───────┤
│                                              href                                              │
└────────────────────────────────────────────────────────────────────────────────────────────────┘

> var url = require('url')

 * The URL module splits up a web address into readable parts.

> var adr = 'http://localhost:8080/default.htm?year=2017&month=february';

 > var q = url.parse(adr, true); 

*  method takes a URL string, parses it, and returns a URL object.Within the Legacy API, spaces (' ') and the following characters will be automatically escaped in the properties of URL objects:
< > " ` \r \n \t { } | \ ^ '

>console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'

> const querystring = require('querystring');

 * The querystring module provides utilities for parsing and formatting URL query strings. It can be accessed using:

> var q = querystring.parse('year=2017&month=february');
console.log(q.year);

* The querystring.parse() method parses a URL query string (str) into a collection of key and value pairs.














