
# HTTP VS HTTPS

## HTTP 

* HTTP is a set of rules for transferring files (text, graphic images, sound, video, and other multimedia files) on the World Wide Web. 

* Data exchanged is not encrpted. It is sent as plain text (it is public over the internet).

* Thus, data transfered with http protocol can be intercepted and modified.

* Websites with http protocol are vulnerable to man in the middle attacks.

* If a website uses http protocol, it will not have a padlock and will have 'not secure'.

## HTTPS

* Sercure Hypertext Transfer Protocol. It is an extention of HTTP in conjuction with another protocol.

* It will have a lock. Data exchanged is encrypted.

* It is secure because it uses one of two protocols: SSL or TCL. 

## SSL (Secure Socket Layer)

* When a computer's browser connects to a web server, it asks for authentication (to identify itself to make sure it is not a hacker)

* The server will send its SSL certificate. 

* The certificate includes some data about the server, such as the company name, domain name, expiry date.

* The digital signiture checks if the certificate is altered or not. (meaning if it is a trusted source)

* The client's data will be encrypted throught the public key and decrypted using the server's private key.

* Data can't be decrypted without the private key.

## TCCL


### Why is https important to implement in your projects? 

* HTTPS helps keep your web browsing activities safe This is especially important for sites where sensitive data is passed across the connection.

* HTTP without “S” means that the data that is transferred is not encrypted. Therefore it can be intercepted by third parties to gather data that is being passed – meaning that hacker can steal your data or login information without encryption.

* HTTPS would help negate many of these attacks by converting all data transfers to encrypted connections  between server and browser, which are more difficult encryption mechanisms to break.


