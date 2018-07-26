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