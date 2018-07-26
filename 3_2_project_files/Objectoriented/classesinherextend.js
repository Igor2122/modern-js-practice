// creating class 
class Person {
    constructor(firstname, lastName, ) {
        this.firstname = firstname;
        this.lastName = lastName;
    }

    greeting() {
        return `Hello there ${this.firstname} ${this.lastName}`;
    }
}

// extending class person /createing  a subclass of person 

class Customer extends Person {
    constructor(firstname,lastName,phone,memebership){
        super(firstname,lastName);// this calls a parent class constructor with excisting firsname and lastname in those
        
        this.phone = phone;
        this.message = memebership;
    }
    
    greeting(){
        return `Hello there Mr ${this.firstname} ${this.lastName} with you current age of ${this.age}, you are qualified to upgrade to a premium account ${this.memebership}`;
    }
    
    static getMemebershipCost (){
        return 500;
    }
}

const customer1 = new Customer('Archi', 'Smith', '30', 'platinum');
console.log(customer1);
console.log(customer1.greeting());
console.log(Customer.getMemebershipCost());  
