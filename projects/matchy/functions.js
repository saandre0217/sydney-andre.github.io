/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(array, string){
    //use for loop to iterate through array
    //use if statement comparing string to name key
    //return object if string === name
    for (var i = 0; i < array.length; i++){
        if(array[i].name.toUpperCase() === string.toUpperCase()){
            return array[i];
        } 
    }
    return null;
}
// var animalTwo = {
//     name: 'Andre',
//     age: 10,
//     species: 'dog'
// }

// console.log(search(animalTwo, 'Andre'));


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(array, string, object){
//use for loop to iterate through array
//use if statement to compare string to name key
//set array[i] = to object
for(var i = 0; i < array.length; i++){
    if(array[i].name.toUpperCase() === string.toUpperCase()){
        array[i] = object;
    }
}
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(array, string){
    for(var i = 0; i < array.length; i++){
        if(array[i].name.toUpperCase() === string.toUpperCase()){
            array.splice(i, 1);
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(array, object){
    //check the length of the name and species key using if statement
    //if those pass, check the is the name is unique using a for loop of the array
    if (object.name.length > 0 && object.species.length > 0){
      for(var i = 0; i < array.length; i++){
            if(array[i].name.toUpperCase() !== object.name.toUpperCase()){
                array.push(object);
            } else {
                return object;
            }
    }
  }
  return array
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
