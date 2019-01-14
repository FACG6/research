## Test Coverage 
### Is an important part in Software testing and Software maintenance and it is the measure of the effectiveness of the testing by providing data on different items.

 # What is Test Coverage in Software Testing?

### Amount of testing performed by a set of test cases is called Test Coverage. By amount of testing we mean that what parts of the application program are exercised when we run a test suite. In other words, test coverage is defined as a technique which determines whether our test cases are actually covering the application code and how much code is exercised when we run those test cases. When we can count upon some things in an application and also tell whether the test cases are covering those things of application, then we can say that we measure the coverage. So basically the coverage is the coverage items that we have been able to count and see what items have been covered by the test. The test coverage by two test cases executed can be the same but the input data of 1 test case can find a defect while the input data of 2 nd cannot. So with this we understand the 100% coverage does not mean 100% tested.


# Why do we do Test Coverage?
## We perform Test coverage for the following reasons.

### 1-To find the areas in specified requirement which is not covered by the test scenarios and cases.
### 2-By determining the test coverage we can create more test cases to increase our test coverage.
### 3-By performing the test coverage we can measure how much modafinil online from india testing is covered. This indirectly means the check on quality of the application.
### 4-We can also identify some useless test cases which don’t have meaning in being executed and thus omit them.
###  5-Testing Life becomes smooth by managing the risk based testing approach.
### 6-Traceability between the requirements and the test cases can be achieved by this technique.
### 7-Impact analysis and change tracking can be determined if we have proper test coverage.


# Steps to make test coverage :
### 1-lanch with npm init which creat package json file.
### 2-run the command npm install.
### 3-install the tape modual by npm install tape -D.
### 4-install npm install tap-spec -D which will display the test coverage of your test after run on your code.
### 5-in package.json file , within script add new script with any key and the value will be "istanbul cover tape test.js" .
### 6- to run the test file by npm test .
 ### 7- npm run scriptName.

## Istanbul is a tool for computing JavaScript code coverage when running tests.

 ### to install istanbul tool, run the code below :

npm install istanbul --save-dev

 ### you can find it in this directory : node_modules/.bin/istanbul

### For example create a file to test test.js.,
### write some code to test.

then you can run the istanbul command to generate a coverage report:

node ./node_modules/.bin/istanbul cover test.js or use this ( npm run coverage )
assuming that you named it as "coverage": "istanbul cover ./test.js"

This will create a directory in your project called coverage where you will find the generated coverage reports. In our case: learn-istanbul/coverage/lcov-report/learning-istanbul/test1.js.html

his will create a directory in your project called coverage where you will find the generated coverage reports

if you open it

first img

Istanbul gives us four code coverage metrics:

Statements: How many of the statements in you code are executed.
Branches: Conditional statements create branches of code which may not be executed (e.g. if/else). This metric tells you how many of your branches have been executed.
Functions: The proportion of the functions you have defined which have been called.
Lines: The proportion of lines of code which have been executed.

NYC : is command line interface for Istanbul supports applications that spawn subprocesses.

You can install nyc as a development dependency and add it to the test in your package.json using npm i nyc --save-dev.

will look like
{
"scripts": {
"test": "nyc mocha"
}
}

Alternatively, you can install nyc globally and use it to execute npm test:

"npm i nyc -g" then "nyc npm test"

Configuration arguments should be provided prior to the program that nyc is executing. As an example, the following command executes npm test, and indicates to nyc that it should output both an lcov and a text-lcov coverage report.

Configuration arguments should be provided prior to the program that nyc is executing. As an example, the following command executes npm test, and indicates to nyc that it should output both an lcov and a text-lcov coverage report.

nyc --reporter=lcov --reporter=text-lcov npm test
 

