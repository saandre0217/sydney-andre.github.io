// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list. //research splice method
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    //return object using param
    return {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
    }

} 

function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        //addContact(contact): takes a contact object to be added to the contact list
        //use push method to add contact obj to array
        addContact: function (contact){
            contacts.push(contact);
            return contacts;
        },
        /*findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
        returns the contact object if found in the contacts-list, or, 
        undefined if the fullName does not match any contacts in the list.*/
        //thought to use a for loop, but full name is not a key in the obj
        /*for(var i = 0; i < contacts.length; i++){
                if(fullName === contacts[i].fullName){
                    return fullName;
                } else {
                    return undefined;
                }
            }
            */
        //use .find method?
        findContact: function(fullName){
            var full = ''
            for (var i = 0; i < contacts.length; i++){
                full = contacts[i].nameFirst + ' ' + contacts[i].nameLast;
                if(full === fullName){
                    return contacts[i];
                }
            } 
        },
        // /*removeContact(contact): takes a contact object to be removed from 
        //the contact-list. //research splice method*/
        removeContact: function(contact){
            //using slice method create function that removes object
            //find index of contacts using index of method
            var index = contacts.indexOf(contact);
            var removed = contacts.splice(index, 1);
            return removed;
            },
        /*add a printAllContactNames() Function to your makeContactList() factory. 
        The printAllContactNames() Function should 
        return a String formated with all the full-names separated 
        with a line-break*/
        printAllContactNames: function(){
            //use for loop to return all first and last names
            //use join method to turn array into string
            var allFullNames = [];
            for (var i = 0; i < contacts.length; i++){
                var nameFull = contacts[i].nameFirst + ' ' + contacts[i].nameLast;
                allFullNames.push(nameFull);
            }
            
            return allFullNames.join('\n');
        }

       


    }
}





// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
