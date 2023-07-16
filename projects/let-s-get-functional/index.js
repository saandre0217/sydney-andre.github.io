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
let females = _.reduce(array, function(accumulator, current){
    if(current.gender === 'female'){
        accumulator += 1;
    }
    return accumulator;
}, 0);
return females;
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

var averageBalance = function(array){
    let balsum = array.reduce((acc, curr) => {
        let stringNum = parseFloat(curr.balance.slice(1).replace(/,/g, ''))
        acc += stringNum;
        return acc;
    }, 0);
    let balnum = array.reduce((acc, curr) => {
            acc += 1;
            return acc;
    }, 0);
    let average = balsum / balnum;
    return average;
};


var firstLetterCount = function(array, char){
    let count = _.filter(array, function(customer){
        return customer.name[0].toUpperCase() === char.toUpperCase();
    })
    return count.length;
};

var friendFirstLetterCount = function(array, customer, char){
    //use filter method to find customer and set to a variable
    /*if customer is found, search thier friends key to see if their friends 
    name starts with char
     */
    //count number of friends found
let friendCount = [];
let customerObj = array.filter(function(cust){
    return cust.name === customer;
})
let friendsObj = customerObj[0]['friends']
for(let i = 0; i < friendsObj.length; i++){
  if(friendsObj[i]['name'][0].toUpperCase() === char.toUpperCase()){
    friendCount.push(friendsObj[i]['name'])
}
}
return friendCount.length;
}

var friendsCount = function(array, name){
    //access friends object to look for name
        //customer array > friends array  
    //if name is found push customer name to array
let customers = []
   for(let i = 0; i < array.length; i++){
    var friendsArr = array[i].friends
    for(let x = 0; x < friendsArr.length; x++){
        if(friendsArr[x].name === name){
            customers.push(array[i].name)
        }
    }
   
}
return customers;
}

var topThreeTags = function(array){
    let allTags = []
    array.forEach(customer => {
        allTags.push(...customer.tags)
    })
    let tagCount = {}
    allTags.forEach(tag => {
        if(tagCount[tag]){
            tagCount[tag]++
        } else{
            tagCount[tag] =1
        }
    })
    let sorted = Object.entries(tagCount).sort((a, b) => b[1] - a[1]);
    let topTags = sorted.slice(0, 3).map(([tag]) => tag);
    return topTags;
};

var genderCount = function(array){
    let summary = array.reduce((acc1, curr1) => {
    if(curr1.gender === 'female'){
     acc1.female = array.reduce((femtotal, customer) => {
       if(customer.gender === 'female'){
         femtotal += 1;
       }
       return femtotal;
     }, 0)
    } else if (curr1.gender === 'male'){
     acc1.male = array.reduce((mtotal, customer) => {
       if(customer.gender === 'male'){
         mtotal += 1;
       }
       return mtotal;
     }, 0)
    } else if (curr1.gender === 'non-binary'){
     acc1['non-binary'] = array.reduce((nbtotal, customer) => {
       if(customer.gender === 'non-binary'){
         nbtotal += 1;
       }
       return nbtotal;
     }, 0)
    }
     return acc1;
    }, {})
    return summary;
 };

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
