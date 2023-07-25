/*
FUNCTIONS
0. Functions are reusable blocks of code that acecept inputs, process those inputs, and return new data values. Functions
have four key elements: name, parameters, function body, and return statement.
1. The 2 phases of a function: First we must *define the function*
Next we can execute or *call or invoke* a function
2. What's the difference between a functions parameteres and arguments 
PASSED to a function?
    //function parameters are the holding places you use in the function 
    definition and function arguments are the values passed through the 
    function when it is called
3. What is the syntax for a named function? 
    //using the keyword function followed by the function name followed by parentheses () with the function's 
    parameters inside of the (), then using curly braces with code block inside
4. How do we assign a function to a variable?
    //a function can be assigned to a variable just like any other value.
    first initialize a variable by using a key word (let, const, var) then 
    naming the variable followed by an equal sign, then the function definition
5. How do you specify inputs and how do we specify outputs?
    //to specify inputs you must define the function with parameters. To specify 
    the outputs you must use a return statement followed by the output you want 
    to return
6. Understanding variable scope is very important in understanding how to use functions properly. Because they can only
use the variables declared in the global or parent scope, you have to be careful on what variables you return or use within
the function body
7. Closures are important in understanding how to use high-order functions because the data from the first function call
must be stored to be used in the second function call
 */

//1. 2 phases to using functions//
    //function definition
    function add(x, y){
        return x + y;
    }
    //function call, execution, invocation
    add(5, 6) //returns 11

//2. Difference bt parameter and arguments//
    //function parameters: see x and y below
    function multiply(x, y){
        return x * y
    }
    //function arguments: see 4 and 8
    multiply(4,8)
//3. Named function syntax//
function subtract(x, y){
    return x - y;
}
//4. Function assigned to a variable//
let logGreater = function(x,y){
    if(x > y){
        console.log(x)
    } else if(y > x){
        console.log(y)
    } else{
        console.log('the values are equal')
    }
}
logGreater(8, 72)
//5. Function without inputs or outputs
function alwaysSix(){
    3 + 3;
}
    //becuase this function does not have parameters, the function cannot be flexible because the input values cannot change
    //because this function does not have a return statement, it will always return undefined
function add(x, y){
    return x + y;
}
    //this function has parameters and a return value, meaning it can add any two number and will return that sum
//6. Scope
let hour = 12
function clock(time){
    if(time < 12){
        let message = 'good morning'
    } else if(time >= 12 || time < 17){
        let message = 'good afternoon'
    } else if(time >= 17 || time <= 24){
        let message = 'good night'
    }
}
clock(hour)
console.log(message) //this will log an error because the variables have been initialized inside the function scope
//if the variable message would have been initalized using the var keyword, you would be able to log the variable 
//7. Closure
function outer(x){
    return function inner(y){
        return x + y;
    }
}
let outerX = outer(6);
console.log(outerX(7)) //this will log 13 because 6 has been stored through closure 
