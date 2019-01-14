# Unit-vs-Integration-Testing

## What is Unit Test?
It is a test done by the developer to test a unit of code. 

* Individual units if source code are tested to determine if they are ready to be used. 

* A good set of unit tests do not only prevent bugs, but also improve your code design, and make sure you can later refactor your code without everything completely breaking apart.


##  What is Integration Test?
Integration/Combining testing is a software testing methodology used to test individual software components or units of code to verify interaction between various software components and detect interface defects. Components are tested as a single group or organized in an iterative manner. After the integration testing has been performed on the components, they are readily available for system testing.
### Integration Testing Steps:

- Prepare Integration Test Plan.
- Prepare integration test scenarios & test cases.
- Prepare test automation scripts.
- Execute test cases.
- Report the defects.
- Track and re-test the defects.
- Re-testing & testing goes on until integration testing is complete.

### Approaches/Methodologies/Strategies of Integration Testing:
- Big Bang Approach.
- Incremental Approach: which is further divided into the following
    - **Top Down Approach**
    ![Top Down](https://www.guru99.com/images/top-down-integration-testing.png)
   ---
    -  **Bottom Up Approach**
    ![Bottom UP](https://www.guru99.com/images/bottom-up-integration-testing.png)
    --- 

    -  **Sandwich Approach** - Combination of Top Down and Bottom Up
    ![Sandwich Approach](https://www.guru99.com/images/1/Hybrid-Integration.png)
---
### Unit Testing vs Integration Testing
|**Unit**                                         |**Integration**                                                   |
|-------------------------------------------------|------------------------------------------------------------------|
|To test small piece of your code                 |To test comined modules of your code and tests them as a group    |
|kind of White Box Testing                        |    It is kind of Black Box Testing                               |
|Executed any time.                               |Excuted after unit testing and before system testing              |
|Pays attention to the behavior of a single module|It pays attention to integration among modules                    |
|Does not depend on outside dependencies.         |verifies that your code works with external dependencies correctly|
|Executed by the programmer                       |Excuted by a test team                                            |
|Finding errors is easy                           |Finding errors is difficult                                       |
|Maintenance of unit test is cheap.               |Maintenance of integration test is expensive                      |

### When should both kind be used?

#### Unit Testing:

* All the time to test each function you write by applying test-driven development. 
#### Integration Testing:
* To expose defects in the interfaces and in the
interactions between integrated components or systems.  

---
## The End