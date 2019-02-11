# **__Script Injection__**

Script injection is security vulnerability, a serious security threat that enables an attacker to inject malicious code in the user interface elements of your Web form of data-driven Web sites.   

Wikipedia states, HTML/Script injection is a popular subject, commonly termed Cross-Site Scripting , or XSS . XSS refers to an injection flaw whereby user input to a web script or something along such lines is placed into the output HTML, without being checked for HTML code or scripting.

## **__SQL Injection__**

**SQL injection** is a code injection technique, used to attack data-driven applications, in which SQL statements are inserted into an entry field for execution.   

SQL injection attacks allow attackers to spoof identity, tamper with existing data, cause repudiation issues such as voiding transactions or changing balances, allow the complete disclosure of all data on the system, destroy the data or make it otherwise unavailable, and become administrators of the database server.

## How to defend Injection

The most popular ways of prevention xss:   
XSS **(Cross-Site Scripting)** attack is a type of code injection: user input is mistakenly interpreted as malicious program code. In order to prevent this type of code injection, secure input handling is needed.

- **Encoding** which escapes the user input so that the browser interprets it only as data, not as code.
- **Validation** which filters the user input so that the browser interprets it as code without malicious commands