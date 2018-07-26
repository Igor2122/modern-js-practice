// Object.prototype 
// Person.prototype -- it has also chain    

function Person(firstname, lastname, dob){
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthday = new Date(dob);
}

// Calsulate age !- prototype -! -- will add this prototype to person object
Person.prototype.calculateAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate  = new Date(diff);
        return Math.abs(ageDate.getFullYear() - 1970);
};

// Get full name 
Person.prototype.getFullName = function (){
    return `${this.firstname} ${this.lastname}`;
};

// Got Married 
Person.prototype.gotMarried = function (newLastName) {
    return `${this.firstname} got married and her new lastname is ${newLastName} now`;
};


const john = new Person('John', 'Dow', 8-12-90);
const mary = new Person('Mary', 'Johnson', 'march 20 1978');

console.log(john);
console.log(mary.calculateAge()); // calling prototype on the mary object
console.log(mary.getFullName());
console.log(mary.gotMarried('Peterson'));

console.log(mary.hasOwnProperty('firstname')) 