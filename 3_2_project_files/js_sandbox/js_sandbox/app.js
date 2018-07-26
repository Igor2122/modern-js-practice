//  document.getEelementById 

// console.log(document.getElementById('task-title'));

// // GET THINGS FROM SELECTED ELEMENT 

// console.log(document.getElementById('task-title').className);

// const taskTitle = document.getElementById('task-title');

// // CHANGE STYLING 
// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';


// // CHANGE THE CONTENT 
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My Tasks';
//     // insert a chunk of html we can use the inner html property 
// taskTitle.innerHTML = '<span style="color: red;">Task List</span>';

// QUERY SELECTOR 
// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));


// console.log(document.querySelector('li '));

// document.querySelector('li').style.color = 'red';

// document.querySelector('li:last-child').style.color = 'red';
// document.querySelector('li:nth-child(3)').style.color = 'yellow';
// document.querySelector('li:nth-child(4)').textContent = 'Hello World';

// MULTIPLE ELEMENT SELECTION 

// const items = document.getElementsByClassName('collection-item');

// console.log(items);
// console.log(items[0]);

// items[0].style.color = 'red';
// items[3].textContent = 'hi there';


// let listItems = document.querySelector('ul').getElementsByClassName('collection-item'); //  will specifically look for items in the ul rather than in global scope



// // getElementsByTagName 
// let lis = document.getElementsByTagName('li');

// lis[0].style.color = 'red';
// lis[3].textContent = 'hi there';

// // CONVERT RESULT HTML COLLECTION INTO ARRAY 

// lis = Array.from(lis); // converted to array 

// lis.forEach(function (li, index) {
//     li.style.background = 'tomato';
//     li.textContent = li.className + ' - class Name of the list item';
//     li.textContent = `${index}: hello`;
// })

// console.log(lis);
// console.log(lis[0]);




// querySelectorAll - will retutn a node list; also allows us to use forEach and other array methods witout conversion as with getElementsByClassName

// document.querySelectorAll 

// const items = document.querySelectorAll('ul.collection li.collection-item');

// console.log(items);
    
// items.forEach(function (li, index) {
//     li.style.color = 'red';
// });

// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even)');

// for(let i = 0; i < liOdd.length; i++){
//     liOdd[i].style.background = '#f4f4f4';
// }

// liEven.forEach(function (li) {
//     li.style.background = '#ccc';
// });