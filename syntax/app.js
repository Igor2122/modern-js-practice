// // // PRIMITIVE

// // // STRING 
// // // const name = 1;

// // // if(typeof(name) == 'string') {
// // //     alert('true');
// // // } else {
// // //     alert('not true');
// // // }

// // // console.log(typeof(name));

// // // let archie = document.querySelector('h1');


// // // let cssProperty = window.getComputedStyle(archie, null).getPropertyValue("color");
// // // alert(cssProperty);

// // // if(cssProperty == 'rgb(255, 192, 203)') {
// // //     alert('archie is a puff');
// // // } else {
// // //     alert('he is not a puff');
// // // }

// // // console.log(cssProperty);




// // let val; 
// // val = String(4+4);
// // val = String(true);

// // val = String(new Date());
// // // Array to string 

// // val = String([1,2,3,4,5]);
// // val = (4).toString();
// // val = (true).toString();


// // // string to number

// // val = Number('5');
// // val = Number(true);
// // val = Number('hello');
// // val = Number([1,2,3]);

// // // pare int

// // val = parseInt('100.30');
// // val = parseFloat('100.39');


// // // console.log(val);
// // // console.log(typeof val);
// // // // console.log(val.length);
// // // console.log(val.toFixed(2));

// // const val1 = String(4);
// // const val3 = 6;

// // const sum = Number(val1 + val3);
// // console.log(sum + 1);

// // console.log(sum);
// // console.log(typeof sum);




// const firstName = 'Igor';
// const lastName = 'Pavlenko';
// const date = (new Date());
// let val; 
// const str = 'hello there my name is Igor'
// const form = 'development, programming, ui, ux, tutorials';

// val = firstName + ' ' + lastName;

// // append 

// val = 'Reem ';
// val += 'Sadaf';

// val = 'Hello my name is ' + firstName + ' and my last Name is  ' + lastName + 'and i am from ukraine, was born in ' + (new Date())  + '.'; 

// val = 'that\'s awesome';
// val = firstName.length;


// // concat 

// val = firstName.concat(' ', lastName);// here we need to add the space and first param

// val = firstName.toLocaleLowerCase();
// val = lastName.toUpperCase();

// val = firstName[0];


// // indexOf 
// val = firstName.indexOf('I');

// val = firstName.charAt('1');

// // get last char

// val = firstName.charAt(firstName.length - 1);

// // substrings 

// val = firstName.substring(0,2);

// // slice 

// val = firstName.slice(0,2);

// // split 

// val = str.split(' '); // this will split in in array based on the space as separator 
// val = form.split(',');

// // replace 
// val = str.replace('hello', 'jack');

// // include 

// val = str.includes('my');

// console.log(val);



const name = 'John';
const age = 30;
const job = 'Web Developer';
const city = 'Miami'; 
let html;


// Withour Template strings 

html = '<ul><li>Name:  ' +name+ '</li><li>Age:' + age + '</li><li>Job: ' + job + '</li><li>City:' + city + '</li></ul>';

html = '<ul>' +
    '<li>Name:  ' +name+ '</li>' +
    '<li>Age:' + age + '</li>' +
    '<li>Job: ' + job + '</li>' +
    '<li>City:' + city + '</li>' +
    '</ul>';
    
// with template literals (es6)

function hello () {
    return 'hi there';
}

html =  ` 
    <ul>
        <li>Name: ${name}</li>
        <li>Name: ${age}</li>
        <li>Name: ${job}</li>
        <li>Name: ${city}</li>
        <li>${2+3}</li>
        <li>${hello()}</li>
        <li>${age > 30 ? 'over 30' : 'under 30'}</li>
    </ul>
`




// document.body.innerHTML = html;
     