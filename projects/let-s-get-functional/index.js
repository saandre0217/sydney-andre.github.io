// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./sydney-andre.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */
//instructions in readme
var maleCount = function(array) {
let males = _.filter(array, function(customer){
    return customer.gender === 'male';
})
return males.length;
};

var femaleCount = function(array) {
_.reduce(array, function(accumulator, customer){
    if(customer.gender === 'female'){
        return accumulator + 1;
    }
}, 0);
return accumulator;
    };

var oldestCustomer = function(array){
    let oldest =_.reduce(array, function(accumulator, current){
        if(accumulator.age > current.age){
            return accumulator;
        } else {
            return current;
        }
    })
    return oldest.name
};

var youngestCustomer= function(array){
    let youngest =_.reduce(array, function(accumulator, current){
        if(accumulator.age < current.age){
            return accumulator;
        } else {
            return current;
        }
    })
    return youngest.name
};

var averageBalance; //skip

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
