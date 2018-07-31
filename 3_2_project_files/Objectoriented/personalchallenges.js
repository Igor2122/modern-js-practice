// validate email

const emailSubmitButton = document.getElementById('em-subm-btn');
const emailInput = document.getElementById('email-field');
const emailArray = [];
const passing = /[a-z]*/;
// add event listeners 
emailSubmitButton.addEventListener('click', getValue);
let counter = 0;

function getValue(e) {
    e.preventDefault();
    let i = emailInput.value;
    emailArray.push(i);

    // test the email values
    let re = new RegExp(emailArray.join('|', i));
    console.log(re.test(passing));

    if (re.test(passing)) {
        let li = document.createElement('li');
        li.textContent = emailArray[counter];
        document.getElementById('passed').appendChild(li);
    }




    console.log(emailArray);
    counter++;
}

console.log(emailSubmitButton, emailInput);



// Book construcor 

// create object book 
// append books to the li 
// add button to each book to show the price 

const bookList = document.getElementById('book-list');
const addBookBtn = document.getElementById('add-book');
let button = document.createElement('button');

function Book(title, author, price) {
    this.title = title;
    this.author = author;
    this.price = price;
}

Book.prototype.addBookToLi = function () {
    let li = document.createElement('li');
    li.textContent =`Book ${this.title} with the title: ${this.author}` ;
    bookList.appendChild(li);
}

Book.prototype.addPriceButton = function (){
    button.textContent = 'Show the price';
    button.className = 'show-price';
    document.getElementById('book-list').appendChild(button);
}

Book.prototype.showPrice = function(){
    alert(this.price);
}

const book1 = new Book('Archie', 'Happy in Juffair', 'BD500');

function addBook() {
    book1.addBookToLi();
    book1.addPriceButton();
}

function showThePrice (){
    book1.showPrice();
}

// add Event listnters 
addBookBtn.addEventListener('click', addBook);
button.addEventListener('click', showThePrice);



console.log(bookList);









