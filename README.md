# school-of-code-TDD
Simple TDD examples for School of Code

## Installation
1) You will require [Node](https://nodejs.org/en/) to install dependencies
2) Navigate to the root directory
3) Run `npm i` / `npm install`
4) If you want to run tests it is `npm run test` or depending on your IDE you can run individual tests by clicking on them


## Test-Driven Development practice
For each example please do the following:
1) Implement a test based on the problem statement
2) Commit the test
3) Fix the code - debugging/stepping-through a test run time if required
4) Test should now pass and you can Commit the Fix
5) Apply any refactoring / tidy up of the code base, re-run the tests, they should all pass and then Commit any changes.


**All the tests in Examples 1 and 2 are correct, they are written as intended, there are just some curveballs of Js quirks in them;
so you are required to fix the code!**

### Example 1
This function should capitalise a string provided in an object named 'event'.

**Problem:**
This throws an error because toUpperCase is undefined in some test cases, yet we are using destructuring and defaulting.


### Example 2 
This function should compare values and return if they are equal or not.

**Problem:**

This seems to work in most cases; but we have discovered an issue when comparing 2 as a string and 2 as a number, 
it states these are equivalent when it should not.


### Example 3
We have inherited a function which appears to print out a string of numbers from an array.

**Problem:**

We have no documentation for this function, we would like to use our test suite to create some living documentation for 
this function. Within your group can you construct a testing document using "Given, When, Then" statements to describe 
the functionality of Example 3, and then implement one or all of those tests.

Once your testing is complete; we would like you to refactor this example to make it more maintainable going forwards.

**Given-When-Then example:**

Given an array containing Cheese,

When Alice invokes the Cheese-transformation API,

Then she is returned a block of Stilton.

### Stretch-Goal: Make your own CodeWars Kata!
Design your own problem statement, write at least Four tests to cover the logic of that test, so that if someone fixed the functional/production code; your tests would pass. 
