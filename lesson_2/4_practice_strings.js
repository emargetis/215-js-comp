//1
let firstName = 'Erik';
let lastName = 'Margetis';
let fullName = firstName + ' ' + lastName;
console.log(fullName);

//2
console.log(firstName.concat(lastName));

//3
console.log(fullName.split(' '));

//4
let language = 'JavaScript';
let idx = language.indexOf('S');
console.log(idx);

//5
let charCode = language.charCodeAt(idx);
console.log(charCode);

//6
console.log(String.fromCharCode(charCode));

//7
console.log(language.lastIndexOf('a'));

//8
let a = 'a';
let b = 'b';

console.log(a > b);
b = 'B';
console.log(a > b);

//9
console.log(language.slice(1, 4));
console.log(language.slice(2, 4));

//10
console.log(language.substring(1, 4));
console.log(language.substring(2, 4));
//no the results are the same, but substring does not take negative arguments

//11
console.log(language.slice(1, -1));
console.log(language.slice(2, -1));

//12
console.log(language.substring(1, -1));
console.log(language.substring(2, -1));
// First, if either argument is negative, substring treats it as 0. 
// Next, if the second argument is less than the first argument, substring treats 
// them as reversed values. Thus, calling substring with arguments 2 and -1 is 
// equivalent to calling it with arguments 0 and 2.

//13
let fact1 = 'Javascript is fun';
let fact2 = 'Kids like it too';
let compoundSentence = fact1 + ' and ' + fact2.toLowerCase();
console.log(compoundSentence);

//14
console.log(fact1[0]);
console.log(fact2[0]);

//15
let pi = 22/7;
pi = pi.toString()
console.log(pi.lastIndexOf('14'));

//16
let boxNumber = (356).toString();
console.log(boxNumber);
//wrap an integer in parentheses or use a double period .. to use toString()

//17
boxNumber = parseInt(boxNumber);
console.log(typeof boxNumber);

//18
let readline = require('readline-sync');
let name = readline.question('What is your name?');
if (name.endsWith('!')) {
  console.log(`HELLO ${name.slice(0, -1).toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}


