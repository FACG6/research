## ****What are sessions?****

A session can be defined as a server-side storage of information that is desired to persist throughout the user's interaction with the web site or web application.

## ****Different ways of managing sessions in express.****

Session handling in any web application is very important and must have thing, without it we won’t be able to track a user's activity.

#### There are multiple modules available in _NodeJs_ to handle session storage and manage session variables.

## Examples :

- **express-session** module :  
   To use this module, you must include express in your project

  ```
  > $ npm install express-session

   var express = require('express');
   var session = require('express-session');

   var app = express();

   <-- app.use(session({secret: 'ssshhhhh'})); -->
  ```

- **cookie-parser** module :

  ```
  > $ npm install cookie-parser

  var express = require('express');
  var cookieParser = require('cookie-parser');

  var app = express();

  <--- app.use(cookieParser()); -->
  ```

## Create a minimal example of how to set up a session

    ```
    const express = require('express');

    const session = require('express-session');
    const uidSafe = require('uid-safe');

    const app = express();
    app.set('port', 3000);
    app.use(session({
    secret: 'secret string',
    cookie: {
    secure: false,
    maxAge: 1000*60*60\*2,
    user_id: 12
    }
    }))
    app.get('/', (req, res) => {
    console.log('session', req.session);
    console.log('session', req.session.id);
    if(!req.session.genid && !req.session.views){
    // req.session.user = {id: 'asdfasdf', username: 'ahmed'}
    req.session.genid = uidSafe.sync(8); //for generate
    req.session.views = 1;
    res.send(req.session);
    }else{
    req.session.views += 1;
    res.send(req.session);

        }

    })
    app.listen(app.get('port'), () => {
    console.log(`Server Running in Port ${app.get('port')}`);
    })

    ```
