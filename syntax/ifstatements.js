    


const id = 100;

//equal to 

// if(id == 101) {
//     // console.log('correct');
// } else {
//     // console.log('incorrect');
// }

// // not equal to 


// if(id != 101) {
//     // console.log('correct');
// } else {
//     // console.log('incorrect');
// }


// // check for value and type with === 

// if(id === 101) {
//     // console.log('correct');
// } else {
//     // console.log('incorrect');
// }


// test if undefined
// if(typeof id !== 'undefined') { // we need to test if id isset ? 
//     console.log(`the id is ${id}`);
// } else {
//     console.log(`no id `);
// }


// greater or less then 

// IF ELSE 
// const color = 'red';

// if(color === 'red') {
//     console.log(`${color} is red`);
// } else if (color === 'blue') {
//     console.log(`${color} is blue`);
// } else {
//     console.log(`${color} is not red or blue`);
// }

// LOGICAL OPERATORS 
const name = 'Steve';
const age = 70;

// both are statement are true &&
if (age > 0 && age < 12) {
    console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
    console.log(`${name} is a tenager`);
} else {
    console.log(`${name} is an adult`);
}

// either of parameters is true || 

if (age <16 || age > 65) {
    console.log(`${name} cannot run in race`);
} else {
    console.log(`${name} is registered for the race`);
}

// shorthands to do conditions TERNARY operator 

console.log( id === 100 ? 'CORRECT' : 'INCORRECT');

// whithout braces 

if (id === 100)  // this will work but not reccomended 
 console.log('true');
 else 
 console.log('not true ');
 
 const color = 'blue';
 
 switch(color) {
     case 'pink':
         console.log(`color is ${color}`);
         break;
     case 'blue':
         console.log(`color is ${color}`);
        break;
     default:
         console.log('Color is not red or blue');
         break;
 }
 
 let day;
 
 switch (new Date().getDay()) {
     case 0:
        day = 'Sunday';
         break;
     case 1:
        day = 'Monday';
         break; 
     case 5:
         day = 'Friday';
         break; 
     default:
         alert('no day it\'s end of the world');
 }
 
 console.log(`Today is ${day}`);
 
 
 
 