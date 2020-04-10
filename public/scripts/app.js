'use strict';

var nameVar = 'ashish';
var nameVar = 'ashish saxena';
console.log('nameVar', nameVar);

var nameLet = 'nigga';
nameLet = 'ak';
console.log('nameLet', nameLet);

var nameConst = 'YO';
console.log('nameConst', nameConst);

//Block Scoping

var fullName = "Ashish Saxena";
var firstName = void 0;
if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName);
