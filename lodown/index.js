'use strict';

// YOU KNOW WHAT TO DO //


/**1
 * identity: Designed to take in a value and return that value unchanged
 * @param {value}: the value that the function will return
 * @return {value}: the input value unchanged
 * 
 */
function identity(value){
    return value;
};
module.exports.identity = identity;

/**2
 * typeOf: Designed to take in a value adn return the data type of that value
 * 
 * @param {value}: the value that you want to know the data type of
 * @return {string}: a string indicating the data type of the input value
 */
function typeOf(value){
    if(Array.isArray(value)){
        return 'array';
    } else if(value === null){
        return 'null';
    } else if( value instanceof Date){
        return 'date';
    } else {
        return typeof value;
    }
}
module.exports.typeOf = typeOf;

/**3
 * first: Designed to take in an array and a number and return the first portion of the array 
 * based on the number parameter. 
 * 
 * @param {array}: value that will be reviewed by the function and be the source of the returned
 * array segment. If this value is not an array, [] will print
 * @param {num}: value that will decide how many elements of the array will return. 
 * If this value is not a datatype of number, only the first element of the array will return. 
 * If this value is negative, [] will return.
 * @return {array or string}: this function will return an array most of the time, but if 
 * a non number value is input for the number param, it will return a string of the first element
 * of the array. Otherwise, an empty or filled array will return based on the what type of parameters
 * are input.
 */
function first(array, num){
    if(Array.isArray(array) !== true){
        return array = [];
    } else if(num === NaN || typeof num !== 'number'){
        return array[0];
    } else if(num < 0){
        return array = [];
    } else {
        return array.slice(0, num)
    }
}
module.exports.first = first;

/**4
 * last: Designed to take in an array and a number and return end portion of the array
 * based on the number parameter.
 * @param {array}: value that will be reviewed by the function and be the source of the returned
 * array segment. If this value is not an array, [] will print
 * @param {number}: value that will decide how many elements of the array will return. 
 * If this value is not a datatype of number, only the last element of the array will return. 
 * If this value is negative, [] will return, and if the value is greater than the length of the 
 * array, the full array will return.
 * @return {array or string}:this function will return an array most of the time, but if 
 * a non number value is input for the number param, it will return a string of the last element
 * of the array. Otherwise, an empty or filled array will return based on the what type of parameters
 * are input.
 */
function last(array, number){
    if(Array.isArray(array) !== true){
        return array = [];
    } else if(number === NaN || typeof number !== 'number'){
        return array[array.length -1];
    } else if(number < 0){
        return array = [];
    } else if(number > array.length){
        return array;
    } else {
        return array.slice(-number);
    }
}
module.exports.last = last;

/**5
 * indexOf: Designed to take in an array and another value and return the value's first index 
 * in the array.
 * @param {array}: the value that will be iterated over
 * @param {value}: the value the function is looking for while iterating through the array
 * @return {number}: Will return the value's index in the array if it is present or -1 if 
 * the value is not present in the array
 */
function indexOf(array, value){
    for(var i = 0; i < array.length; i++){
        if(array[i] === value){
            return i;
        } 
        }
        return -1
    }
module.exports.indexOf = indexOf;

/**6
 * contains: Designed to take in an array and a value and return a boolean value of true or 
 * false if the value is present in the array.
 * @param {array}: the array the function is looking for the value in 
 * @param {value}: the value being searched for in the array
 * @return {boolean}: this funciton will return a boolean value of true or false. It will
 * return true if the value argument is present in the array argument and false if not.
 */
function contains(array, value){
    var result = array.includes(value) ? true : false
    return result;
}
module.exports.contains = contains;

/**7
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 * @return {}: the return is based on the function that is passed through
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**8
 * unique: Designed to take in an  array and return a new array without duplicates
 * @param {array}: the array to iterate over
 * @return {array}: a new array that is a copy of the input array with no duplicate values 
 * in the array
 */
function unique(array){
    var uniqArr = [];
    for (var i = 0; i < array.length; i++){
        if(uniqArr.indexOf(array[i]) === -1){
            uniqArr.push(array[i]);
        }
    }
return uniqArr;
}
module.exports.unique = unique;

/**9
 * filter: Designed to take in an array and a function to test the elements of the array and
 * will only return the values that pass the function's test as a new array
 * @param {array}: the array to iterate over
 * @param {function}: a function that will test each element of the array to determine
 * if it is true or not
 * @return {array}: a new array where all elements pass the test provided by the function
 */
function filter(array, func){
    var newArr = [];
     for(var i = 0; i < array.length; i++){
         if(func(array[i], i, array) === true){
             newArr.push(array[i])
         }
     }
     return newArr;
 }
module.exports.filter = filter;

/**10
 * reject: Designed to take in an array and a function to test the elements of the array and
 * will only return the values that do not pass the function's test as a new array
 * @param {array}: the array to iterate over
 * @param {function}: a function that will test each element of the array to determine
 * if it is true or not
 * @return {array}: a new array where all elements do not pass the test provided by the function
 */

function reject(array, func){
    var newArr = [];
    for(var i = 0; i < array.length; i++){
        if(func(array[i], i, array) !== true){
            newArr.push(array[i])
        }
    }
    return newArr;
}
module.exports.reject = reject;

/**11
 * partition: Designed to take in an array and a function and return an array of 2 arrays 
 * based on whether the element returns a truthy or falsey value when passed through the 
 * function argument
 * @param {array}: the array to iterate over
 * @param {function}: a function that will test each element of hte array to determine if 
 * it will return a truthy or a falsey value
 * @return {array}: a new array that contains two arrays. One array will be filled with the values
 * from the array argument that return truthy values when passed through the function and 
 * the other array contains the values that returned falsey values when passed through the argument
 * function
 */
function partition(array, func){
    var newArr = [];
    var truthyArr = [];
    var falseyArr = [];
    for(var i = 0; i < array.length; i++){
        if(func(array[i], array)){
            truthyArr.push(array[i]);
        } else{
            falseyArr.push(array[i]);
        }
    }
    newArr.push(truthyArr);
    newArr.push(falseyArr);
    return newArr;
}
module.exports.partition = partition;

/**12
 * map: Designed to take in a collection and a function and return an array of new values based
 * on the actions of the function
 * @param {collection}: the collection to iterate over
 * @param {function}: a function to define the actions that will be taken on each element of
 * the collection
 * @return {array}: a new array with changed values from the argument collection based on 
 * the argument function
 */
function map(collection, func){
    let newArray = [];
    if(Array.isArray(collection)){
        for(let i = 0; i < collection.length; i++){
           let arrFuncCall = func(collection[i], i, collection);
           newArray.push(arrFuncCall);
        }


    } else{
        for(var key in collection){
            let objFuncCall = func(collection[key], key, collection);
            newArray.push(objFuncCall);
        }
    }
    return newArray;
}
module.exports.map = map;

/**13
 * pluck: Designed to take in an array of objects and return an array of all of the values 
 * associated with the property argument
 * @param {array of objects}: the array to iterate over
 * @param {property}: the value the function is searching for in the array of objects
 * @return {array}: a new array filled with all of the value pairs when the key is equal
 * the property argument 
 */
function pluck(array, property){
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        let obj = array[i];
        for(let key in obj){
            if (key === property){
                newArray.push(obj[key]);
            }
        }
    }
    return newArray;
}
module.exports.pluck = pluck;

/**14
 * every: Designed to take in a collection and a function and return a boolean value of true 
 * if all elements of the collection pass the functions test and false if they do not. Also designed 
 * to return true when all values are truthy if a function is not included
 * @param {collection}: the collection to iterate over
 * @param {function}: a function that will test each element of the collection to determine
 * if it is true or not
 * @return {boolean}: Will only return true if all elements of the collection pass the test from
 * the argument function or are all truthy values and will return false if one or more 
 * elements do not pass the function's test or if one or more values are falsey.
 */
function every(collection, func){
    if(Array.isArray(collection)){
        //need another if/else statment in case there is no func
        if(!func){
            for(let i = 0; i < collection.length; i++){
                if(!collection[i]){
                    return false;
                } 
            }
        } else {
            for(let i = 0; i < collection.length; i++){
                if(!func(collection[i], i, collection)){
                    return false;
                } 
            }
        }
    } else {
        if(!func){
            for(var key in collection){
                if(!collection[i]){
                    return false;
                }
            }
        }  else {
            for( var key in collection){
                if(!func(collection[key], key, collection)){
                    return false;
                }
            }
        }
        
    }
    return true;
}
module.exports.every = every;

/**15
 * some: Designed to take in a collection and a function and return a boolean value of true 
 * if one or more elements of the collection pass the functions test and false if all elements 
 * do not pass. Also designed to return true if one or more of the values are truthy if a function 
 * is not included
 * @param {collection}:the collection to iterate over
 * @param {function}: a function that will test each element of the collection to determine
 * if it is true or not
 * @return {boolean}: Will return true if one or more elements of the collection pass the test from
 * the argument function or have one or more truthy values and will return false if none of the 
 * elements pass the function's test or if no values are truthy.
 */
function some(collection, func){
    if(Array.isArray(collection)){
        //need another if/else statment in case there is no func
        if(!func){
            for(let i = 0; i < collection.length; i++){
                if(collection[i]){
                    return true;
                } 
            }
        } else {
            for(let i = 0; i < collection.length; i++){
                if(func(collection[i], i, collection)){
                    return true;
                } 
            }
        }
    } else {
        if(!func){
            for(var key in collection){
                if(collection[i]){
                    return true;
                }
            }
        }  else {
            for( var key in collection){
                if(func(collection[key], key, collection)){
                    return true;
                }
            }
        }
        
    }
    return false;
}
module.exports.some = some;

/**16
 * reduce:
 * @param {array}: the array to iterate over
 * @param {function}: 
 * @param {seed}:
 * @return {value}:
 */
function reduce(array, func, seed){
    let result;
    // determine if seed wasn't passed in
    if(seed === undefined){
        result = array[0];
       for(let i = 1; i < array.length; i++){
        result = func(result, array[i], i)
       }
    } else {
        result = seed;
        for(let i = 0; i < array.length; i++){
            result = func(result, array[i], i)
            //reassign result to what the callback function returns
        }
    }


    return result;
}
module.exports.reduce = reduce;

/**17
 * extend: Designed to take in an ulimited number of objects and return an object that contains
 * copies of all the susequent object's properties in the order that they were passed in
 * @param {object1}: the original object that all subsequently added object properties will 
 * be added into
 * @param {object}: an array filled with one or more objects to be copied into object1
 * @return {object}: object1 with additional properties from the other objects in order of 
 * how thise objects were passed in.
 */
function extend(obj1, ...obj2){
    for(let i = 0; i < obj2.length; i++){
        for(let key in obj2[i]){
            obj1[key] = obj2[i][key]
        }
    }
    return obj1;
}
module.exports.extend = extend;