#  Continuous Integration
## What is continuous integration
Continuous Integration (CI) is the process of automating the build and testing of code every time a team member commits changes to version control.
## Benefits of continuous integration :
* Catch issues early and nip them in the bud.
* Spend less time debugging and more time adding features.
* Build a solid foundation.
* Stop waiting to find out if your code’s going to work.
* Working without fear to break the project.
## Travis
> CI helps you Test Early, Test Often to spot "integration issues" before its too late ... Travis CI takes the hassle out of running your own CI so you can focus on your project/product!
## Advantages of Travis-CI:
* Nothing to Install
* Free Both to Use and Open Source
* Integrates nicely with GitHub
## Create The Project Files
[link to repo](https://github.com/mohammedmh/Travic)
```
project_folder
|_.travis.yml
|_hello.js
|_package.json
|_other_files
``` 
> you don't need to specify which folders Travis needs to check - it always checks everything!
## Why .travis.yml important ?
*  Travis configuration file that tells travis-ci what to expect and how to behave for our application.
```
language: node_js
node_js:
 - "node"
 ```
## how does it know where the tests are? Which files to run?
That is in the package.json file. This file has a scripts element.
```
{
  "name": "learn-travis-YOURNAME",
  "description": "Simple Travis-CI check for JSHint (Code Linting)",
  "author": "your name here :-)",
  "version": "0.0.1",
  "devDependencies": {
    "jshint": "^2.6.0"
  },
  "scripts": {
    "test": "jshint hello.js"
  }
}
```
To get futhure information about travis check this link
> https://github.com/dwyl/learn-travis#define-the-test