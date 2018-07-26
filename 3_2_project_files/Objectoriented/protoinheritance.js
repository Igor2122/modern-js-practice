// Person constructor 

function Person (firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

// Greeting prototype method 

Person.prototype.greeting = function (){
    return `Hi there ${this.firstname} ${this.lastname}`;
}

const person1 = new Person('John','Dow');

console.log(person1.greeting());


// Customre constructor 

function Customer (firstname, lastname, phone, memebership) {
    Person.call(this, firstname, lastname);
    
    this.phone = phone;
    this.memebership = memebership;
}


// Inherit the person prototype methods  
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return customer
Customer.prototype.constructor = Customer;




const customer1 = new Customer('Tom', 'Smith', '444 44 44', 'normal');


console.log(customer1);

// Create/overwrite the greeting for a cusoter 
Customer.prototype.greeting = function(){
    return `${this.firstname} ${this.lastname} wellcome to our club`;
};

console.log(customer1.greeting());

