//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
//create empty array
//create for loop to return obj values in array
//use push method
var array = [];
for(var key in object){
    array.push(object[key]);
}
return array;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    //create empty array
    //create empty string
    //create for loop to return obj keys in array using push method
    //use join methose to turn array into string
var array = [];
var string = '';
for(var key in object){
     array.push(key);
     string = array.join(' ');
}
return string;

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    //create empty array
    //create empty string
    //create for loop to return obj values in array using push method
    //use join methose to turn array into string
var array = [];
var string = '';
for(var key in object){
    if(typeof object[key] === 'string') {
        array.push(object[key]);
        string = array.join(' ');
    }
}
return string;
    
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if(Array.isArray(collection)) {
        return 'array';
    } else if(typeof collection === 'object'){
        return 'object';
    }
    
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) { 
    //split string into array
    //use for loop with split string to interate through each word in the string
    //capitalize first letter of each word using cap formula
    //push capitalized words into new array
    //use join method to turn array back into string
    var array = [];
    var splitString = string.split(' ');
    
  for (var i = 0; i < splitString.length; i++){
    var word = splitString[i];
    var capString = word.charAt(0).toUpperCase() + word.slice(1)
    array.push(capString)
    }
  var finalString = array.join(' ')
  return finalString;
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    var name = object.name.charAt(0).toUpperCase() + object.name.slice(1)
return 'Welcome ' + name + '!';
};


//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    var name = object.name.charAt(0).toUpperCase() + object.name.slice(1)
    var species = object.species.charAt(0).toUpperCase() + object.species.slice(1)
return name + ' is a ' + species
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {//come back
    if (object.hasOwnProperty('noises') && Array.isArray(object.noises) && object.noises.length > 0){
        return object.noises.join(' ');
    } else {
        return 'there are no noises';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    if(string.includes(word)){
        return true;
    } else {
        return false;
    }

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    object.friends.push(name);
    return object

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) { 
    if(object.hasOwnProperty('friends') && object.friends.length > 0){
        return object.friends.includes(name);
    } else {
        return false;
    }

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    let arrayNonFriends = [];
    for(let i = 0; i < array.length; i++){
        let obj = array[i]
      if(name !== obj.name && !obj.friends.includes(name)){
        arrayNonFriends.push(obj.name)
      }
        }
    return arrayNonFriends;
    }

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
object[key] = value;
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    //write for loop to interate through array
    //wrtie for in loop to iterate through object keys
    for(var i = 0; i < array.length; i++){
        var arrayString = array[i];
        if (object.hasOwnProperty(arrayString)){
            delete object[arrayString];
        }
    }
return array;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
var uniqueSet = [...new Set(array)];

return uniqueSet;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}