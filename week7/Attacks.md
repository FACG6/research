## Cross-Site Scripting (XSS) :
Cross-Site Scripting (XSS) attacks are a type of injection, in which malicious scripts are injected into otherwise benign and trusted websites. 
XSS attacks occur when an attacker uses a web application to send malicious code, generally in the form of a browser side script, to a different end user.
Flaws that allow these attacks to succeed are quite widespread and occur anywhere a web application uses input from a user within the output it generates without validating or encoding it.   

An attacker can use XSS to send a malicious script to an unsuspecting user. The end user’s browser has no way to know that the script should not be trusted, and will execute the script. Because it thinks the script came from a trusted source, the malicious script can access any cookies, session tokens, or other sensitive information retained by the browser and used with that site. These scripts can even rewrite the content of the HTML page

## Types of Cross-Site Scripting: 

- Stored XSS (aka Presistent)   
    Stored XSS generally occurs when user input is stored on the target server, such as in a database.
- Reflected XSS (aka Non-Presistent)   
    Reflected XSS occurs when user input is immediately returned by a web application in an error message, search result, or any other response that includes some or all of the input provided by the user as part of the request.
- DOM Based XSS (aka Type 0)   
    DOM Based XSS is a form of XSS where the entire tainted data flow from source to sink takes place in  the browser.

### Ways to Defend Against Cross-Site Scripting (XSS):

- Escaping.
- Validating input.
- Sanitizing.


### For more information [visit the link.](https://www.owasp.org/index.php/Types_of_Cross-Site_Scripting)

## man-in-the-middle (MITM)
man-in-the-middle (MITM) attack is a form of eavesdropping where communication between two users is monitored and modified by an unauthorized party. Generally, the attacker actively eavesdrops by intercepting a public key message exchange and retransmits the message while replacing the requested key with his own.


![amin](https://securebox.comodo.com/theme/images/man-in-the-middle-attack.png)

### Example

An illustration of the man-in-the-middle attack
Suppose Alice wishes to communicate with Bob. Meanwhile, Mallory wishes to intercept the conversation to eavesdrop and optionally to deliver a false message to Bob.

First, Alice asks Bob for his public key. If Bob sends his public key to Alice, but Mallory is able to intercept it, a man-in-the-middle attack can begin. Mallory sends a forged message to Alice that purports to come from Bob, but instead includes Mallory's public key.

Alice, believing this public key to be Bob's, encrypts her message with Mallory's key and sends the enciphered message back to Bob. Mallory again intercepts, deciphers the message using her private key, possibly alters it if she wants, and re-enciphers it using the public key Bob originally sent to Alice. When Bob receives the newly enciphered message, he believes it came from Alice.

![ahmed](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Man_in_the_middle_attack.svg/260px-Man_in_the_middle_attack.svg.png)

### Ways to Defend Against a Man-in-the-Middle Attack :
* VPN : are incredible tools that can help you access blocked websites, hide your location, encrypt your data, and much more.
* Proxy Server with Data Encryption : enable the reencryption of ciphertexts from one secret key to another, without relying on trusted parties.

## Cross-Site Request Forgery (CSRF):

Cross-Site Request Forgery (CSRF) is an attack that forces an user to execute unwanted actions on a web application in which they're currently authenticated by the user like transferring funds, changing their email address, and so forth. With a little help of social engineering (such as sending a link via email or chat).

the victim is more likely to view the page containing the attack than some random page on the Internet.

attacker can trick a victim into submitting a forged POST request, This form can be triggered automatically by JavaScript or can be triggered by the victim who thinks the form will do something else.

![alaa](https://media.licdn.com/dms/image/C5612AQGJ9viBbB00qQ/article-inline_image-shrink_1500_2232/0?e=1556150400&v=beta&t=9mQfloEVVYYcStgqZdYTZQwzJ4JTqTi7ISOYDH1QOCY)