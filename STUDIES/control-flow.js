/*
CONTROL FLOW
0. Control Flow statements allow your code to perform certain actions when certain parameters are met. You can chain
conditional statements together to allow for certain actions to be taken when various parameters are met.
1. if statments can be used by themselves or chained with addional conditional statments. if statements create logic 
in your code to perform an action when one test is passed.
2. else-if statments are chained with if statments to allow for an action to be performed when a new parameter is met.
3. else statements are kind of like catch all buckets, and are used at the end of an if or if else-if chain. If none of
the previous parameters have been met, this action will take place.
4. switch statments function similarly to if else-if chains in that they allow for multiple code blocks to be executed 
when a variety of conditions are met. This is often a cleaner way to create a long chain of conditional statements.
The switch statment is evaluated once, then the value of the statement is compared with the values of each case.
If there is a match, the associated block of code is executed, but if there is no match, the default code block is executed.
 */

//1. if //
if(x > y){
    console.log('x is greater than y')
}
//2. else-if //
if(x > y){
    console.log('x is greater than y')
} else if(x < y){
    console.log('x is less than y')
}
//3. else //
if(x > y){
    console.log('x is greater than y')
} else if(x < y){
    console.log('x is less than y')
} else {
    console.log('x and y are equal')
}
//4. switch //
let color = 'pink'
switch (color){
    case 'orange':
        console.log('my favorite color is orange!')
        break;
    case 'purple':
        console.log('my favorite color is purple!')
        break;
    case 'blue':
        console.log('my favorite color is blue!')
        break;
    default:
        console.log('i cannot find your color')
} // i cannot find your color will be printed to the console