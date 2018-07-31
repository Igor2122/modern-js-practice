// ************* REGULAR EXPRESSIONS ********* // 

let re = /g|@/; // create regular expression 
let s = 'igor_pavlenko@yahoo.com'

s.search(re); // method on strings to search the regular expression. 
re.test(s) // test from the regular expression on the string 

//console.log(s.search(re)); // returns the index of the first instance of given paremeter 
//console.log(/@/.test(s)); // returns simply true or false 

//console.log(/[abc]/.test(s)); // here we ask if it has any of this symbols in the string 
//console.log(/[^abc]/.test(s)); // will test that the string does not have none of the passed vaues
//console.log(/[a-z]/.test(s)); // will check all the values from a-z
//console.log(/[A-Z]/.test(s)); // for the capital letters 

// to check for full values a-zA-Z0-9_ we can repalce this with /\w/
// the same but for negative with /\W/ capital

// console.log(/\W/.test(s));

// [0-9] = /\d/ opposite [^0-9] = /\D/ except for all the values 
// /./.test("igor") = all symbols except for the line break \n
// /.ru/.tetst('vasuaru@mail.com') here it will check for all symbols before the .ru so it will see 'a' and then .ru

/*

    
    /\.ru/.test('vasueru@mail.ru')
    true
    /.ru/.test('vasueru@mail.ru')
    true
    /\.ru/.test('vasueru@mail.com')
    false

*/

/* 
    MORE COMPLEX OPTIONS 
    
    /ab{2,4}c/.test('vasueru@mail.com') - b should be min 2, max = 4
    false
    /ab{2,4}c/.test("abbbc"); -but also will check for c 
    true
    /ab{2,}c/.test("abbbbbbbbbbbbbbbbc"); - min 2 max unlimited
    true
    /ab{2}c/.test("abbc"); - excact 2 
    true
    /ab?c/.test("abc"); check b{0,1} - either there or not 
    true
    /ab?c/.test("ac"); - either there or not also true as it is not there 
    true
    /ab{1,}c/ === /ab+c/ the same 
    /ab+c/.test("abbbbbc");
    true
    /ab{1,}c/.test("abbbbbc");
    true
    /ab{0,}c/ === /ab*c/ - eithor not or unlimited
    /ab{0,}c/.test("abbbbbc");
    true
    /ab*c/.test("abbbbbc");
    true
    
*/

const date = "f15-06-2018";


// console.log(/[0-9]{1,2}-[0-9]{1,2}-[0-9]{4}/.test("15-03-1986"));
// console.log(/\d{1,2}-\d{1,2}-\d{4}/.test(date));



// console.log(/\d{1,2}-\d{1,2}-\d{4}/.test(date));
// console.log(/ [0-9] /.test(5));

// the string should start with # ^ - has to be outside of []
    console.log(/^[1-3]?[0-9]-[0-1]?[0-9]-\d{4}/.test(date));




