/**
 * VARIABLES: 
 * 0. Variables are name containers that store data. They are a very important element of Javascript as act as 
 * named identifiers for all data types including numbers, strings, booleans, arrays, objects, etc. and  allow 
 * programers to easily recall peices of data throughout the code.
 * 1. To create a variable, you must use a declarative key word followed by the name of the variable. To assign the 
 * variable, you must set the variable name equal to its value using the =. You can combine both of these steps into
 * one line which is called initalizing a variable.
 * 2. There are 3 keywords that will declare a variable in Javascript. They are var, let, const. Although in definition
 * they all perform the same action, they each have different capabilities that make them useful in specific situations.
 * When you declare a variable using the keyword var, that variable can be redeclared, reassigned, and declared without
 * a value. Although this allows a great deal of flexibility, it can leave more room for error in your code. In early
 * Javascript, this was the only variable keyword, but in recent years let and const have been introduced to mitigate 
 * some of var's shortfalls. Let is similar to var in that variables declared using let can be reassigned and declared
 * without a value, but these variables cannot be redeclared. This is prefered by programmers as it does not allow you
 * to have multiple variables with the same name. Const allows the least flexibility and should be used when creating 
 * constant variables because it cannot be reassigned, declared without a value, or redeclared. In addition to the 
 * differeneces in the keywords' decalaration and assignment capabilities, their scopes are different too. Variables 
 * declared using the keyword var, will always be in the global or function scope, meaning even if the variable is 
 * declared in a block of code, it can be recalled outside of the code block. This is not true for variables declared
 * using the keywords let and const.  
 * 3. hoisting
 */

// 1. declaration & assignment //
/* declaration: At this phase, the variable is only named and not assigned to any value. Printing myVariable at this 
stage would result in undefined being logged to the console. */
    var myVariable;
    console.log(myVariable); // prints undefined
//assignment: At this phase is when the variable gets its value.
    myVariable = 'cookies';
    console.log(myVariable); // prints cookies
//initialization: When both declaration and assignment happen in one line of code
    var myName = 'Sydney';
    console.log(myName); // prints Sydney
// 2. Var, Let, Const //
//var: can be redeclared, reassigned, declared without value, and will always be in the global or function scope.
    var myDog = 'Georgia';
    var myDog = 'Reggie'; //redeclaration 
    console.log(myDog); // prints Reggie
    myDog = 'Jake'; //reassignment
    console.log(myDog); //prints Jake
    var emptyArr = [];
    console.log(emptyArr); // prints nothing, no error
//let: cannot be redeclared, can be reassigned, declared without value, and block scoped.
    let myAge = 27;
    let myAge = 28; //cannot be redeclared
    console.log(myAge); //prints error message: Identifier 'myAge' has already been declared
    let myFriend = 'Mac';
    myFriend = 'Hayden'; //reassignment
    console.log(myFriend); // prints Hayden
    let emptyObj = {};
    console.log(emptyObj) //prints nothing, no error
//const: cannot be redeclared, reassigned, or declared without a value. Can be blockscoped
    const favFood = 'burrito';
    const favFood = 'pancakes'; //cannot be redeclared
    console.log(favFood); //prints error: Identifier 'favFood' has already been declared
    favFood = 'waffles'; // cannot be reassigned
    console.log(favFood); //prints error: Assignment to constant variable.
    const constantVar = 'Hey!'
    console.log(constantVar) //prints Hey!
