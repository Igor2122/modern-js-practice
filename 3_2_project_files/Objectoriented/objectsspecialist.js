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

// function User(name, age) {
//     this.name = name;
//     this.age = age;
//     this.admin = false;
// }

// let u1 = new User('Archie', 2);
// let u2 = new User('Reem', 25);
// User.prototype.x = 10;

// // if we want to add any prototype to the object we noramlly do it outside the object 
// User.prototype.say = function (w){
//     console.log(`${this.name} ${w}`);
//     console.log(this.name +' '+ w);
// }

// u1.say('Hello');


// how to include unlimited # of passed values into array with funciton  
/*
    array has also constructor 
    1 - call prototype on array 
    2 - slice method with slice all passed arguments into array
    3 - call - calling the function with specific this arguments 
    4 - arguments - are all of the passed arguments into the fuctinon
    4 - will output all the arguments passed (2) ["igor", "reem"]
*/
// function func () {
//     return Array.prototype.slice.call(arguments);
// }

// console.log(func('igor', 'reem'));
// console.log(func('i','g','o','r'));



// // add other methods to 

// Number.prototype.pow = function (x){
//     return Math.pow(this.valueOf(), x);
// }

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



// *************** Date & Time *******************
// the time itself is kept in the dated object in miliseconds 

/* let d = Date() - if we siply call the dated object it will return the current date and time and more infor depending on the interpritator
undefined
d
"Wed Aug 01 2018 11:27:27 GMT+0300 (Arabian Standard Time)"
let nd = Date(123456789000) - here we are calling the specific time in ms starting form 1 jan 1970
undefined
nd
"Wed Aug 01 2018 11:29:53 GMT+0300 (Arabian Standard Time)" 


t = new Date()
Wed Aug 01 2018 11:38:46 GMT+0300 (Arabian Standard Time)
t.getDay
ƒ getDay() { [native code] }
t
Wed Aug 01 2018 11:38:46 GMT+0300 (Arabian Standard Time)
d.getTime()
1533112633429
d.getDay()
3
d.getMonth()
7

d.toTimeString()
"11:42:53 GMT+0300 (Arabian Standard Time)"

d.toTimeString()
"11:42:53 GMT+0300 (Arabian Standard Time)"




we can also set date time min etc with .set

let d = new Date()
undefined
d.setDate(10)
1533890682779
d
Fri Aug 10 2018 11:44:42 GMT+0300 (Arabian Standard Time)
*/


/* 

    *************** Look up for Errors ****************

    try {
        if finds an error here at some point => will stop at this point and jump to catch 

        if(y ==0 ) throw new Error('You cant delete on 0'); we can do it this way 
        if(y == 1) {
        throw err1; // we can define the error objects outside and call them if erro occures
    } catch(e) { - e will be assign the error object

    }

*/

let err1 = new Error('you cant delete on 1');
let err2 = new Error('you cant delete on 2');

try {
    let x = 1, y = 2;
    if (y == 0) throw new Error('You cant delete on 0');
    if (y == 1) {
        throw err1;
    }
    if(y == 2) {
        throw err2;
    }


    console.log(x / y);
} catch (e) {
    console.log(e.name + ':');
    console.log(e.message);
}
console.log('The end');