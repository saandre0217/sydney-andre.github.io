/*
LOOPS
0. Loops are algorithms that repeat a specified action until a specific end criteria is met. Different loops
offer different ways to start and stop the repitition.
1. A while loop is a looping technique that is best used when you want to loop based on whether or not a condition
is met. A for loop is used when you know the number of times the block of code should be run or you have access to 
the length property of the data you are iterating though. For-in loops are used to loop through objects. They can extract
the each key of the object. You can use the extracted key to return the values as well.
2. To loop any number of times forward or backward counting to or from some limit, you could use a for loop. Starting by initalizing a
a variable named someLimit to a any number you would like to count up to or down from. Then you can create the loop by using the keyword
for then opening parentheses. Inside the parenthese would be the conditions for the where index variable should start, stop, and 
how the index should update. To count forward to some limit, initalize your index to equal 0; set your index less than or equal to your
someLimit variable; and increment your index. To count down from some limit, the inside of the paranthese would be the opposite of what we did
for the forward counting loop. The index would be initialized to equal someLimit; it would stop when the index was greater than or equal to 0; 
and decrement your index. Then you would open the curly braces{} and input the action you want to be taken.
3. To loop over an array would follow the same format as counting to or from a number, except we will need to acces the array's length property 
for our stop value to loop forward  and our start value to loop backwards. First, initialize a variable equal to an array, then creating your for
loop. To iterate forward over the array, your index will be initalized at 0; the loop will end at when the index is less than array.length; and the index 
will increment each iteration. To iterate backwards over an array, the start, stop, and update conditions will look a little different. The index will
start at array.length - 1, stop when the index is greater than or equal to 0, and the index will decrement each time. You will then open the curly braces {}
and input the code block for the action you want to be taken.
4. To loop over an object, you will use a for-in loop. First start by initializing the object you want to iterate through. Start the for-in loop by using 
the keyword for and opening parentheses. Inside the the parenthese, initialize the variable key followed by the keyword in then the name of the object
you are interating through. Open the {} and now the variable key represents the keys of the object, so you can use this to return either the key or values of 
the object.
 */

//Loop any number of times, forward counting up to some limit//
let someLimit = 6
for(let i = 0; i <= someLimit; i++){
    console.log(i);
}
//Loop backward counting down to 0//
for(let i = someLimit; i >= 0; i--){
    console.log(i);
}
//Loop over an array forwards//
let array = ['sydney', 'beau', 'georgia']
for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}
//Loop over and array backwards//
for(let i = array.length - 1; i >= 0; i--){
    console.log(array[i]);
}
//Loop over an object//
let obj = {
    name: 'sydney',
    age: 27,
    isStudent: true
}
for(let key in obj){
    console.log(key)
}
for(let key in obj){
    console.log(obj[key])
}