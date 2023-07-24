/*
FUNCTIONS
0.
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