// create some arrays 

const numbers = [34,33,23,24,36,5];
const numbers2 = new Array(22,45,33, 76, 54);
const fruits = ['apple', 'banana', 'orange', 'pear'];

let val; 


// // arrany length 

// val = numbers.length;

// // check if is array 
// val = Array.isArray(numbers);

// // get a value form an array 
// val = numbers[0];

// // insert into array 

// numbers[2] = 100;

// // find indes of value 

// val = numbers.indexOf(34);

// // mutating arrays with different functions 

// numbers.push(250);

// // add to beggining 

// numbers.unshift(250);

// // array 

// const hobbies = ['movies', 'music'];

// // object literal

// const adress = {
//     city: 'Boston',
//     state: 'MA'
// };

// const date = new Date()

// val =  numbers.concat(numbers2);

// // sort 

// val = fruits.sort();
// val = numbers.sort();

// // use the compare function 

// val = numbers.sort(function(x, y) {
//     return x - y;
// });

// find 

function under50 (x) {
    return x < 50;
}

val = numbers.find(under50);



// console.log(numbers);
console.log(val);


