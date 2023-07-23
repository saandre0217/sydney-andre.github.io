/*
STRING MANIPULATION
0. String manipulation is the process of changing a string's value by adding or taking away content in the string
1. With operators: There are two string manipulation operators-- concatenate(+) and concatenate assignment(+=). These
operators allow you to add content to a string or add content to a string while reassigning the string
2. With string methods: there are many string manipulation methods. These methods allow you to change the string by removing,
adding, replacing, accessing properties, characters, or segments of the string. Some of the more common methods include:
String length, String slice(), String replace(), String toUpperCase(), String toLowerCase(), String concat(), String split()
 */

// 1. With operators //
let str = 'hey sydney'
let updatedStr = str + '!'
console.log(updatedStr) //will log 'hey sydney!'
// 2. With string methods //
    //string.length will tell you the number of characters in a string
    console.log(str.length) //will log 10
    //string.slice will remove a character from the string depending on the index included when called
    console.log(str.slice(1)) //will log 'ey sydney!'
    //string.replace replaces a specified value with another value in a string. It is also imporant to note that the replace
    //method makes a copy of the variable, so if I log str after calling the replace method on the string, it will still log
    //hey sydney
    console.log(str.replace('sydney', 'beau')) //will log 'hey beau'
    //string.toUpperCase() and string.toLowerCase() will change all of the characters to uppercase or lowercase respectively
    console.log(str.toUpperCase()) //will log 'HEY SYDNEY'
    console.log(str.toLowerCase()) //will log 'hey sydney'
    //string.concat will add a value to the end of the string. This method is the same as using the concat operator (+)
    console.log(str.concat('!')) //will log 'hey sydney!' 
    //string.split() will split you string into an array at the value including in the parentheses 
    console.log(str.split(' ')) //will log ['hey', 'sydney']

