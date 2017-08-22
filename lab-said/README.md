### Configuration  
list of files, configurations, tools, that are required including the following:  
  * **README.md** - contains documentation about my lab  
  * **.gitignore** - contains a robust `.gitignore` file  
  * **.eslintrc** - contains the provided `.eslintrc` file  
  * **.eslintignore** - contains the provided `.eslintignore` file  
  * **lib/** - that contains my modules  
  * **test/** - that contains my unit tests  

### Feature Tasks  
  * created a node.js module (`greet.js`) that exports a single function  
  * the `greet` function should have a single parameter that should expect a string as it's input  
  * the `greet` function should return the input name, concatenated with "hello <name>"  
  * the `greet` function should return `null` if the input is not a string  
  * created a node.js module named `arithmetic.js`  
  * this module have `add` and `sub` methods  
  * the `add` method contains 2 parameters  
  * these parameters should be numbers and the method should return the sum of the 2 numbers  
  * the `sub` method contains 2 parameters  
  * these parameters should be numbers and the method should return the first number minus the second number  

### Testing  
* wrote a test the expects the greet module to return "hello world!"  
* this should happen when invoked with "world!" as a parameter  
* wrote a test for the `add` and `subtract` methods on the arithmetic module  
* ran the test using npm test and it passed  
* added the changes and commited it and pushed to git hub  
* submeitted a pr  
