function User(name, age) {
    this.name = name;
    this.age = age;
    this.admin = false;
}

let u1 = new User('Archie', 25);
let u2 = new User('Reem', 20);

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
