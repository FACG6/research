# Stateless vs stateful authentication :

## token based authentication
A stateless protocol does not require the server to retain information or status about each user for the duration of multiple requests.

When a web server is required to customize the content of a web page for a user. Solutions for these cases include:

• the use of HTTP cookies.
• server side sessions,
• hidden variables (when the current page contains a form), and
• URL-rewriting using URI-encoded parameters, e.g., /index.php?session_id=some_unique_session_code.

This simplifies the contract between client and server, and in many cases minimizes the amount of data that needs to be transferred.

To overcome the stateless nature of HTTP requests, we could use either a session or a token.

In the session based authentication, the server will create a session for the user after the user logs in. The session id is then stored on a cookie on the user’s browser. While the user stays logged in, the cookie would be sent along with every subsequent request.

## Token Based Authentication 
Many web applications use JSON Web Token (JWT) instead of sessions for authentication. In the token based application, the server creates JWT with a secret and sends the JWT to the client. The client stores the JWT (usually in local storage) and includes JWT in the header with every request. The server would then validate the JWT with every request from the client and sends response.
The biggest difference here is that the user’s state is not stored on the server, as the state is stored inside the token on the client side instead. Most of the modern web applications use JWT for authentication for reasons including scalability and mobile device authentication.

Node Modules for JWT
jsonwebtoken library can be used to created the JWT token on the server. Once the user is logged in, the client passes the JWT token back on the header.authorization.bearer attribute.
```
{
  method: "GET",
  headers:{
    "Authorization": "Bearer ${JWT_TOKEN}"
  }
}
```
Middleware, express-jwt, can be used to validate the JWT token by comparing the secret.

Token based authentication: There is no issue with scaling because token is stored on the client side.

Token Based Authentication using JWT is the more recommended method in modern web apps. One drawback with JWT is that the size of JWT is much bigger comparing with the session id stored in cookie because JWT contains more user information.

_

##  session based authentication (stateful) diagram :
![stateful](https://cdn-images-1.medium.com/max/1600/1*Hg1gUTXN5E3Nrku0jWCRow.png)

##  token based authentication (stateless) diagram :
![stateless](https://cdn-images-1.medium.com/max/800/1*PDry-Wb8JRquwnikIbJOJQ.png)

## Stateless advantages: 
1. Reduces database usage imagine if google stored session information about every one of their users.

2. Reduce session expiration problems Sometimes expiring sessions cause issues that are hard to find and test for. Sessionless applications don't suffer from these. set max-age and then on verify it will not approve if it's expired 

3. Url linkability Some sites store the ID of what the user is looking at in the sessions. This makes it impossible for users to simply copy and paste the URL and send it to friends.

## Stateless disadvantages: 
1. For more complex websites, you may still need to store session IDs to reference session activity. 

2. Cannot push Messages to clients (Identifying clients from server) : As we have no record about the logged-in clients on the DB end, we cannot push messages to all the clients 

3. Data Overhead: The size of the JWT token will be more than that of a normal Session token. The more data you add in the JWT token, the longer it gets linearly.

