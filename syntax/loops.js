// FOR LOOP 

// for(let i = 0; i < 10; i++) {
//     if(i === 2) {
//         console.log(`wait was it ${i} ?? my favourite number is ${i} !!`);
//         continue; // this will skip the loop in postion 2 and continue the loop
//     }
    
//     if (i === 8) {
//         console.log(`we can go max to the numger ${i} is this loop`);
//         break;
//     }
//     console.log(` the number is ${i} `);
// }


// WHILE LOOP 

// let i = 0;

// while (i < 10) {
//     console.log("hello");
//     i++;
// }

// DO WHILE LOOP -- will always run at least once 

// let i = 0;

// do {
//     console.log('Number ' + i);
//     i ++; 
// }

// while (i <10);  


// LOOP THROUGH ARRAY 

const cars = ['ford', 'shevy', 'honda', 'toyota'];

// for(let i = 0; i <cars.length; i++){
//     console.log(cars[i]);
// }


// FOREACH LOOP THROUGH AN ARRAY - BEST PRACTICE 

cars.forEach(function (car, index, array) { // car is a singular reprsnt of array name and we loop through them like with for()
    // console.log(`${index} : ${car}`);
    // console.log(array);
}); 

// MAP - return a different array

const users = [
    {id:1, name:'Archie'},
    {id:2, name: 'Reem'},
    {id:3, name: 'Igor'},
    {id:4, name: 'Sam'},
    ];
    
const ids = users.map(function(user){ // will create an array with users id's in it 
    return user.id;
});

// console.log(ids); 


// FOR IN --- ofter used for objects 

 const user = {
     firstName: 'igor',
     lastName: 'Pavlenko',
     age: 32
 };
  
 for(let x in user) {
    console.log(`${x} : ${user[x]} `); // this will return keys inside the object & values
    
 }




























