# **Cloud Deploying**

## **What is PaaS ?**
Platform as a service, often simply referred to a PaaS, is a category of cloud computing that provides a platform and environment to allow developers to build applications and services over the internet. PaaS services are hosted in the cloud and accessed by users simply via their web browser.


Software Developers, Web Developers, and businesses can all benefit from PaaS:
* Software Developers: can take advantage of a PaaS solution to build an application which they are planning to offer over the internet.

* Web Developers: can use individual PaaS environments at every stage of the process to develop, test and host their websites.

* Businesses: can develop their own internal software.


# **How it Works ?**
* Creation of Software Applications
PaaS is regularly used by developers, from conception to the creation of application, through to testing and deployment.

* Choice of features
Customers can choose the features they require while discarding others. They can therefore choose a service to suit their needs

* Pay-Per-Use
Generally paid for on a subscription basis and clients only pay for what they use. Sharing of underlying infrastructure results in economies of scale

## **SaaS vs. PaaS vs. IaaS**

Benefits to Application Developers:
* Don’t have to invest in physical infrastructure
Being able to ‘rent’ virtual infrastructure has both cost benefits and practical benefits. They don’t need to purchase hardware themselves or employ the expertise to manage it.

* Makes development possible for ‘non-experts’
With some PaaS offerings anyone can develop an application, simply through their web browser utilizing one-click functionality.

* Flexibility
Customers have control over the tools that are installed within their platforms and can create a platform that suits their specific requirements.

* Adaptability
Features can be changed if circumstances dictate that they should.

* Security
Security is provided, including data security and backup and recovery.

Features that can be included :
One of the main benefits of Platform as a Service is the flexibility that it offers. 

Users are able to choose which features they require, therefore avoiding paying for features they don't require. 

The following are among the features that are available from a typical PaaS offering:
- Operating system.
- Server-side scripting environment.
- Database management system.
- Server software.
- Support.
- Storage.
- Network access.
- Tools for design and development.
- Hosting.

## **cloud platform :**
- The hardware and operating environment of a server in an Internet-based datacenter
- the software infrastructure for a cloud computing service, which includes applications that let users create and manage their own accounts
Deploy a simple server to Heroku as a demo
create free account in heroku from https://signup.heroku.com/
download and install Heroku CLI(command line inteface):
1. $sudo snap install --classic heroku
2. $npm install -g heroku
3. $curl https://cli-assets.heroku.com/install-ubuntu.sh | sh

- to verify the installation of Herouku by   
```
$heroku --version   
```
- After you install the CLI ,You’ll be prompted to enter any key to go to your web browser to complete login. The CLI will then log you in automatically.   
```
$heroku login   
```
- Create a new Git repository Initialize a git repository in a new or existing directory   
```
$ cd my-project/
$ git init   
```
- enter your credentials,to enter the email and password   
```
$heroku login -i   
```
- Now you’re ready to create your first Heroku app:   
```
$heroku create   
```
- put this command for set git remote heroku to https://git.heroku.com/girlnodeapp.git => girlnodeapp the application name i created it in the heroku
heroku git:remote -a girlnodeapp
Deploy to heroku:
```
$git push heroku master  
``` 
- Open your app in the browser:
```
$heroku open
```

# **Enviroment Variables**
Environment variables are a fundamental part of developing with Node.js, allowing your app to behave differently based on the environment you want them to run in. Wherever your app needs configuration, you use environment variables. And they’re so simple, they’re beautiful!

## **Why?**
### why should you use Enviroment Variables?
Now you can run your app anywhere by modifying the environment variables without changing your code and without rebuilding it!

## **When?**
### When should you use Enviroment Variables?
OK, so now you ask me when you should use them. In short, **any place in your code that will change based on the environment**

## **HOW?**

Create server.js file :

```
// server.js
const port = process.env.PORT;
console.log(Your port is ${port});
```

Now when you execute node server.js you should see a message that says “Your port is undefined”.

Your environment variable isn’t there because we need to pass them in. Let’s consider some ways we can fix this.

1. using the command line
2. using a .env file
   Command Line

```
PORT=8626 node server.js
```

Less Mess with a .env File
Running them from a command line is convenient, sure. But it has its drawbacks:

1. there is no good place to see the list of variables
2. it’s far too easy to make a typing mistake from the command line
3. it’s not ideal to remember all of the variables and their values
4. even with npm scripts, you still have to keep them current
   Create the .env file in the root of your app and add your variables and values to it.

Reading the .env File
Install dotenv from npm
You want to read the .env file and the dotenv package on npm does this very well. Install the dotenv package by running the following command
npm install dotenv

```
// server.js
console.log(Your port is ${process.env.PORT}); // undefined
const dotenv = require('dotenv');
dotenv.config();
console.log(Your port is ${process.env.PORT}); // 8626
```

