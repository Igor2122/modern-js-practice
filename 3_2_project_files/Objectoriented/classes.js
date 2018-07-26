class Person {
    constructor(firstname, lastname, dob) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthday = new Date(dob);
    }
    greeting(){
        return `Hello there ${this.firstname} ${this.lastname} wellcome to the club you are ${maryAge} years old`;
    }
    
    calculateAge() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    
    getsMarried (newLastName) {
        this.lastname = newLastName;
    }
    
    // add a static method
    static addNumbers (x,y){
        return x + y;
    }
}

const mary = new Person('Mary', 'Williams', '11-13-1980');
const maryAge = mary.calculateAge();

mary.getsMarried('Peters');
console.log(mary);
console.log(mary.greeting());
console.log(mary.calculateAge());
// in order to use static methods we use actual class name.method ... 

console.log(Person.addNumbers(3,4));

