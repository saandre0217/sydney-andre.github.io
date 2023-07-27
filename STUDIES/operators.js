/**
 * OPERATORS: 
 * 0. Operators are ways that we can assign, change, or compare expressions or values in our code
 * 1. Assignment operators assign the value to its left operand based on the value of it right operand. The most simple
 * if =, but there are many assignment operators that can change and then assign the left operand such as, +=, -=, *=, /= 
 * to name a few.
 * 2. Arithemtic operators take numerical values as thier operands and return another numerical value. The standard arithemtic operators are add (+), subtract (-),
 * multiply (*), and divide (/). These operators function as you would expect if you have basic mathematical knowledge. 
 * 3. Comparison operators compare its operands and return boolean value based on whether the comparison is true. Operands can be 
 * strings, numerical, logical, or object values. The standard comparision operators are equal(==), not equal (!=), strictly equal (===), 
 * strictly not equal (!==), greater than (>), less than (<), greater than or equal to (>=), less than or equal to (<=)
 * 4. Logical operators are normally used with boolean values and return boolean values. The logical operators are AND (&&) which will only return
 * true if both operands are true, OR (||) will return true if one of the operands is true, and NOT (!) which reverses the logic of the statment that follows it.
 * 5. Unary operators is an operation with only one operand. Some examples of unary operators are delete which deletes an object's property, 
 * typeof which returns a string representing the datatype of its operand, void, which specifies an expression to be evaluated without returning a value.
 * 6. Ternary operators take in three operands--one condition and 2 values. If the condition is true, the operator points to the first value, otherwise, it points
 * to the second
 */

//1. Assignment Operators
    //assignment operator
let x = 5 
    //addition assignment operator
x += 2 // x = 7
    //subtraction assignment operator
x -= 1 //x = 6
    //multiplication assignment operator
x *= 3 //x = 18
    //division assignment operator
x /= 2 //x = 9
    //remainder assignment operator
x %= 2 // x = 1 
    //expontiation assignment
let y = 4
y **= 2 // y = 16
    //logical AND assignment: only assigns if x is truthy
y &&= 4 // y = 4
    //logical OR assignment: only assigns if x is falsy
let z = null
z ||= 7 // z = 7
//2. Arithmetic Operators 
    //addition operator
let num1 = 100;
let num2 = 50;
let sum = num1 + num2 
console.log(sum) //logs 150
    //subtraction operator
let diff = num1 - num2
console.log(diff) //logs 50
    //division operator
let quot = num1 / num2
console.log(quot) //logs 2
    //multiplication operator
let product = num1 * num2
console.log(product) //5000 will log 
    //remainder operator: return the integery remainder of dividing 2 operands
let leftovers = 11 % 2
console.log(leftovers) //logs 1 to the console
    //increment operator: adds 1 to its operand
let a = 7
a++
console.log(a) //logs 8
    //decrement operator
a--
console.log(a) //logs 7
    //unary negation operator: returns the negative version of its operand
let b = 4
b = -b
console.log(b) //logs -4
let c = -8
c = -c
console.log(c) //logs 8
    //unary plus operator: tries to convert the operand to a number if it isn't already
let three = +'3'
console.log(three) //logs 3
three = +'three'
console.log(three) //logs NaN
    //exponentiation operator: returns the base to the exponent power
let squared = 4 ** 2
console.log(squared) //logs 16
//3. Comparison Operators
console.log('6' == 6) //true will log because using the equal to operators does not access the datatype
console.log('6' === 6) //false will log because the strictly equal to operator assesses whether the 2 values are exactly the same
console.log(7 >= 100) //false will log because 7 is not greater than or equal to 100
//4. Logical Operators
if(6 < 7 && 7 > 8){
    console.log('Logical Operators are fun!')
} //nothing will print to the console because one of the operands is not true (7 is not greater than 8) so the whole statment returns 
// as false meaning the code block is never hit.
if(6 < 7 || 7 > 8){
    console.log('Logical Operators are fun!') 
} //Logical Operators are fun! will log because one of the operators is true (6 is less than 7)
if(!(7 > 8)){
    console.log('Logical Operators are fun!')
} //Logical Operators are fun! will log because the NOT operator reverses the logic of the comparison in the parentheses
//you can think of it as this statment is saying 7 is NOT greater than 8 which is a true statment, so the code block is hit
//5. Unary Operators
    //delete operator
let obj = {
    name: 'syd',
    age: 27
}
delete obj.name
    //typeof operator
console.log(obj) // {age: 27} will print because the name property was deleted using the delete operator
console.log(typeof(7)) // number will pring because that is the datatype of the operand
//6. Ternary Operator
let age = 27
let ageStatus = age >= 18 ? 'adult' : 'minor'
console.log(ageStatus) //adult will log because age is greater than or equal to 18 so the first value prints
age = 16
let newStatus = age >= 18 ? 'adult' : 'minor'
console.log(newStatus) //minor will log because the age is now less than 18, so the second value prints

