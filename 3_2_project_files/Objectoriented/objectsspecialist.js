

// console.log(u1.constructor, u2.constructor); // we can check who is the let construcotor

/*
    let s = 'Hello';
    s.length -- how does it work if let s in not an object 
    1 - let tmp = new Strin(s) creates a temporary object 
    2 - tmp.lenth  checks for lenght with length method
    3 - tmp delete  deletes the tmp object 
    
    
    so even if we try to treat s an object and assign x to it => it will not throw an error, however if we try to call it => it will return undefined 
    
    let s = "hello"
    undefined
    s.length
    5
    s.x = 10
    10
    s.x
    so what happened in the x case: 
    
    1 - let s created a temp let x 
    2 - temp x 
    3 - delete x 
*/

/*
    Regular Expression // vs new RegExp('[1-0]{2,}\d', 'igm')
    
    if we have dynamically content to test in RegExp how to input it inside the tester ? 
    
    ex: 
        let accepted = ['yandex', 'yahoo', 'rambler'];
        
        in this situation we can use 
        
        1 - instantiate new obj RegExp
        2 - inside RegExp 1st paramter is a string so we can use join('|') with | to separate the values of array
        3 - and i as the secont parameter to RegExp object to calcell the case sensitive testing 
        let re = new RegExp(accept.join('|', i );
        
        /accepted/.test(email);
    
*/

function User(name, age) {
    this.name = name;
    this.age = age;
    this.admin = false;
}

let u1 = new User('Archie', 2);
let u2 = new User('Reem', 25);
User.prototype.x = 10;

// if we want to add any prototype to the object we noramlly do it outside the object 
User.prototype.say = function (w){
    console.log(`${this.name} ${w}`);
    console.log(this.name +' '+ w);
}

u1.say('Hello');


// how to include unlimited # of passed values into array with funciton  
/*
    array has also constructor 
    1 - call prototype on array 
    2 - slice method with slice all passed arguments into array
    3 - call - calling the function with specific this arguments 
    4 - arguments - are all of the passed arguments into the fuctinon
    4 - will output all the arguments passed (2) ["igor", "reem"]
*/
function func () {
    return Array.prototype.slice.call(arguments);
}

console.log(func('igor', 'reem'));
console.log(func('i','g','o','r'));



// add other methods to 

Number.prototype.pow = function (x){
    return Math.pow(this.valueOf(), x);
}

/* 
    as we know all the objects follow the properties of global object 
    so we can reassign or add properties to the global Object 

    example of the possible issue that this may couse 

    we need to loop through own properties 

    for(let i in u){
        if(u.hasOwnProperty(i)){
            console.log(u);
        }
    }
*/


/*
    also important to check if the let is an instance of object or array as both of them are objects 
    we can check it in the following way 

    [] instanceof Object
    true
    [] instanceof Array
    true
    let i = {}
    undefined
    i instanceof Object
    true
    i instanceof Array
    false

*/






















