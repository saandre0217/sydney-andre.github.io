/*
LOOPS
0.
1.
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
for(let i = array.length; i > 0; i--){
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