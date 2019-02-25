
# Express Middleware

What is middleware?

The middleware function are function that have access to the request and the response object and the next middleware function in the application requset cycle.


## Middleware proform : 

execure any code , make change to the request and the response ,end the request and the response cycle , call the next middleware function.

If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging


## Middleware types:

* application-level  middleware (app.use)
 
* router-level middlewar(router.use)

* error-handling middleware (app.use(err,req,res,next))

* build in middleware  (express.static,express.json,express.urlencoded)
* third-party middleware (bodyparser,cookieparser)

## Example:

```
let express = require("express");
let app = express();

function checkLogin(name) {
    if(name)
    return true;
    else {
      return false;
    }

}

app.use((req, res, next)=>{
    if(checkLogin()) {
        next();
    }
    else {
        res.send("please firstly loge in"); 
    }
})

app.get("/profile", (req, res)=>{
    res.send("here profile page");
});
app.listen(3000);

```
#### Explanation of the example: 
* create a function called checkLogin.
* check its value in the middleware within the app.use ().
* if checkLogin return value is true,will pass to midelwear '/profile' by next() function.
* if return value is false,that is,user not log in before, the middleware displays an error message.


## Build-in Middleware

### 1. express.static(root, [options])

* It serves static files and is based on serve-static.
* Root: specifies the root directory from which to serve static files.

 **How?** By combining req.url with the provided root directory. 

 #### What is there is an error and the file is not found?
It calls next() to move on to the next middleware.

The option object contains: maxAge, and SetHeaders... 



### 2. express.json([options])

* It is based on body-parser module
*  It parses incoming requests. 
* It only parses JSON and only looks at requests where the Content-Type header matches the type option. 
* After parsing the data, a new body object will be opened in the request object and the parsed data will be placed on it.

Remember: If the content-type of the request is does not match the type in the option, the body object ({}) will be empty.


## Third Party Middleware:

 ### 1. Morgran(format, options)

```
var morgan = require('morgan')

```
```
// create a write stream in append mode
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, '..', 'logs-demo', 'access.log'),
  { flags: 'a' }
);

// setup morgan logger in 'combined' and stream data to the write stream
app.use(morgan('combined', { stream: accessLogStream }));

```


#### Using a predefined format string
```
morgan('tiny')
```

 ### 2. Compression ([options])

 ```
var compression = require('compression')

```
The compression middleware compresses response bodies for all requests that passes through the middleware.


