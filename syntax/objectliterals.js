const person = {
     firstName: 'Steve',
     lastName: 'Smith',
     age: 30,
     email: 'steve@aol.com',
     hobbies: ['music','sports'],
     adress: {
          city: 'Miami',
          state: 'Florida'
     },
     getBirthYear: function (e){
          return console.log(e);
     }
};

let val = person;

// Get specific value 
val = person['firstName'];
val = person.lastName;
val = person.adress.city;
val = person.hobbies[1];
val = person.getBirthYear('I am function');


console.log(val);

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
  2:1,
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

for(var i = 0; i in user ;i++) {
  console.log(i + ":" + user[i]);
}