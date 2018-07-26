const personPrototypes = {
  greeting: function (){
      return `${this.firstname} ${this.lastname} hello there `;
  },
  getsMarried: function(newLastName) {
      this.lastname = newLastName;
  }
};

const mary = Object.create(personPrototypes);

mary.firstname = 'Mary';
mary.lastname = 'Doe';
mary.age = 30;

// here we overwritten her last name to new married one  
mary.getsMarried('Smith');

console.log(mary.greeting());

const igor = Object.create(personPrototypes, {
   firstname: {value: 'Igor'},
   lastname: {value: 'Pavlenko'},
   age: {value: 32},
});

console.log(igor);

igor.getsMarried('Smith');

console.log(igor.greeting());