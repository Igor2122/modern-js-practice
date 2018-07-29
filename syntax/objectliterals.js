const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 30,
    email: 'steve@aol.com',
    hobbies: ['music', 'sports'],
    adress: {
        city: 'Miami',
        state: 'Florida'
    },
    getBirthYear: function(e) {
        return console.log(e);
    }
};

let val = person;

// Get specific value 
val = person['firstName'];
val = person.lastName;
val = person.adress.city;
val = person.hobbies[1];
// val = person.getBirthYear('I am function');


// console.log(val);

// const user = {}

// function nameGenerated() {
//   let c = document.getElementById('mySelect').childNodes;
//   return c[2].value;

// }

// console.log(nameGenerated());

// const user = {name: 'Iogr', age: 32}
// user.admin = true;
// user.name = nameGenerated();
// user.age = 32;


const o = {
    "user name": 'igor',
    var: 'const',
    "2Person name": 'gregor',
    2: 1,
};

// console.log(o["user name"]);
// console.log(o["2"]);
// console.log(o["var"]);

// check for the property in object

// console.log('var' in o);


// CHECK ALL THE PROPERTIES OF AN OBJECT
const user = {
    0: 'a',
    1: 'b',
    2: 'c',
};

for (var i = 0; i in user; i++) {
    //   console.log(i + ":" + user[i]);
}


// ****************** ARRAYS *****************//


const a = [2, 5, 99];
const b = [];
a[99] = 100;

for (let i in a) {
    b.push(Math.pow(a[i], 2));
}
// console.log(b);

const e = [1, 2, 3, 4, 5, 6];

// Math object take Method min and apply on object math with parameters from the array e
// console.log(Math.min.apply(Math, e));
// print(Math.max.apply(Math, e));

// so now we can rewrite a print function 
// object console apply on he same object console and take the inputed "arguments" as arguments 
// arguments - lives inside function with it we can check the number and value of arguments passed into funciton 
function print(data) {
    // console.log.apply(console, arguments);
}
// the above will return the native print function 
// function print (data) { 
//     console.log(data);
// }

// IMMIDIATELY INVOCED SELF EXPRESSION - this the funciton i saw in the possible intrview questions 
// this helps from reassigning the var and functions when coding in pair with other developers 
// () - this is to show js that he needs to go inside and check/run all the stuff inside
// (function (){})() - and the last () is telling js that he needs to run the the whole funciton that is inside the ()
(function() {
    // here we start writing the codee 

})();

function foo() {
    let a = [];
    // let b = 0;
    for (let i = 0; i < 3; i++) {
        (function(j) {
            a.push(function() { console.log(j) });
        })(i);
    }

    return a;
}

let x = foo();


// x[0]();
// x[1]();
// x[2]();


// *********   SEARCH FOR THE WORK IN THE SENTENCE ******

// let s = 'We know that monochrome color grey is the darket shade of color grey';
// let txt = 'chrome';
// let word;
// let pos = s.indexOf(txt);

// if (pos > -1) {
//     let spaceBefore = s.lastIndexOf(" ", pos) + 1;
//     let spaceAfter = s.indexOf(" ", pos);
//     if (spaceAfter == -1) {
//         word = s.slice(spaceBefore);
//     }
//     else {
//         word = s.slice(spaceBefore, spaceAfter);
//     }
// }
// else {
//     word = 'there is no word with this key';
// }
// // console.log(word);

// function counter(n, callback) {
//     let result;
//     for (let i = 0; i < n; n++) {
//         result += callback;
//     }
//     return result;
// }

// function numbers (number){

//     number +1
//     console.log(number);
//     return number;
// }

// let letA = '97';
// let alphabet;

// for (let i = 0; i < 26; i++) {

//     alphabet += String.fromCharCode(letA + 1);
// }
// console.log(alphabet);
// console.log(String.fromCharCode(letA));

// let number = 0;





// // APPHABET 

// const inxA = 97;
// let alphabet;
// let number = [];

// function generator(n, callback) {
//     let result;
//     for (let i = 0; i < n; i++) {
//         result += callback(i);
//     }
//     return result;
// }

// alphabet = generator(26, function(i) {
//     return String.fromCharCode(inxA + i);
// });


// number = generator(50, function(i) {
//     // console.log(i);
//     return i;
// });


// console.log(number);
// console.log(alphabet);




// for (let i = 0; i < 26; i++) {
//     alphabet += String.fromCharCode(inxA + i);
// }

































