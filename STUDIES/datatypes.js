/**
 * DATATYPES
 * 0. Datatypes are the built in data structures of JavaScript that differentiate the different types of values that can be used in your code.
 * 1. Number: refers to a peice of data that is an integer or decimal number
 * 2. String: refers to data encapsulated by '' or " " 
 * 3. Boolean: true or false
 * 4. Array: list of any data type seperated by commas and encapsulated by []
 * 5. Object: data collected in key: value pairs called properties encapsulated by its curly braces { }. 
 * The keys and values are paired using colons : and the pairs or properties are separated by commas. 
 * 6. Function: a named block of code that takes in values and performs an action or test on those values.
 * Must be defined in the scope from which you wish to call it, and can be executed by simply using the function's 
 * name and arguments.
 * 7. undefined: is returned when the program knows this data is present but cannot find its value
 * 8. null: returned when a value does not exist
 * 9. NaN: not a number and is returned when a value is expected to be a number but it is not
 * 10. Infinity and -Infinity: positive infinity or Infinity is a value greater than any other number and is a variable in the global scope. The oposite of thei is negative infitiy or -Infinity. 
 * Both values are not writable, enumerable, or configurable. This mean they cannot be deleted, changed, or returned in a loop.
 * 11. Simple vs Complex Data Types: simple data types only refer to one value whereas complex data types can hold an infinite number of values of any data type
 * 12. copy by value vs by reference: Copy by value happens when a simple data type is referenced in a new variable and a copy is created. This means the original variable does not change if 
 * the new variable that referenced it changes. Copy by reference happens when a complex data type is referenced in a new variable. Here, the orginial value is referenced in the new variable, so 
 * if a change is made to the new variable, this can affect the original value  
 *
 */

//NUMBERS//
//below is the initialization of a variable pointing to a number, 1. With numbers, there is no additional syntax needed to make your program aware the value is a number.
let num = 1;
//STRING//
//below is the initialization of a variable pointing to a string, sydney. With string, you must wrap your value with '' or "" so the program is aware you are using a string data type. 
let str = 'sydney';
//BOOLEAN//
//below is a comparison statement that will log the boolean value of true to the console. Boolean values are returned in variety of expressions that test if the provided code is true or false.
console.log(1 < 10) //logs true to the console
//ARRAY//
//below is the initialization of a variable pointing to an array. With arrays, you must seperate your values by a comma and wrap them in []. This array is filled with multiple simple data types, but arrays
//can hold any combination of simple and complex data types
let arr = ['sydney', 1, true]
//OBJECT//
//below is the initialization of a variable pointing to an object. An important aspect of objects is the relationship shared between the key and its value. They are seperated by a colon, and each pair is
//seperated by a comma. The entire object is wrapped in a {}
let obj = {
    name: 'syd',
    age: 27,
    isStudent: true
}
//FUNCTION//
/**below are two functions declared in different ways. The add function is a function declaration statement and the sub function is a function expression. Because functions are data types they can 
 * assigned as a value to a variable like show in the second example. You are still able to call or invoke this function as you would in the first example.
 */
function add(x, y){
    return x + y;
}
add(1,2) //returns 3
let sub = function(x, y){
    return x - y;
}
sub(5, 4) //returns 1
//UNDEFINED//
//below is an example of a line of code that would log undefined. Because the variable has been declared but not assigned, the program know that value exists, but does not know what the value is, resulting
//in the value undefined
let data;
console.log(data) //logs undefined
//NULL//
//below is a function that will return null if a falsey value is given for x. Null is a value that represents the intential absencse of a value, so it is often used in situations like this.
function findX(x){
    if(!x){
        return null;
    } else {
        return x;
    }
    }
console.log(findX()) //returns null
//NaN//
/**below is a statement that will return NaN when a data type that is not a number is passed through. NaN is a data type representing a non number and is returned when the 
 * program expects a number but the result is not
 */
Number('hello');
//IFINITY & -INFINITY//
//SIMPLE vs COMPLEX DATA TYPES//
//COPY BY VALUE vs COPY BY REFERENCE//
    //copy by value
let a = 6;
let b = a;
b = 7;
console.log(a) //logs 6
    //below is an example of copy by reference. 
let x ={
    name: 'syd'
}
let y = x;
y.name = 'george';
console.log(x) //logs {name: 'george'}
  
