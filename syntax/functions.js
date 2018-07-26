// FUNCTION DECLARATIONS

function greetings (finstName = 'Guest', lastName = ' ') { // defined defaults here 
    //console.log(e + 'hello');
    return 'hello ' + finstName + ' ' + lastName;
}

// console.log(greetings());

// FUNCTION EXPRESSIONS

const square = function (x = 3) { // 3 would be a default here 
    return x * x;
};

// console.log(square());

// IMMIDIATELY INVOCABLE FUNCTIONS EXPRESSIONS  aka = IIFEs - function you declare and run at the same time

// (function () {
//     console.log('IIFE ran..s');
// })();


// (function (name = 'guest') { // default here will be guest set up 
//     console.log('hello ' + name);
// })('Igor');

// PROPERTY METHODS -- when a function is put inside an object it is called a method

const todo = {
    add: function () {
        console.log('Add to do list ... ');
    },
    edit: function(id = 'missing info ') {
        console.log(`edit ${id}`);
    }
}

todo.delete = function() {
    console.log('delete to do list'); // and we can run it a normal below
}

todo.add();
todo.edit(' todo list ');
todo.delete();

function abs(num) {
  return (num <0) ? -num : num; // we campare in one line both the statements
}

// this function will check for the integer and multiply it 

function power(n1,n2) {
  return (Number.isInteger(n1,n2))? n1 * n2 : 'one of the numbers is not an integer';
}









