// Constructors Book


function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}





// Construcot UI
function UI() {}

UI.prototype.addBookToList = function(book) {
    // Get the parent of the book list to append the li to it 
    const list = document.getElementById('book-list');

    // Create tr book item 
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
    `;

    // Adding the book values to the table
    list.appendChild(row);

};

UI.prototype.deleteBook = function(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove();
            ui.showAlert('Book deleted successfully', 'deleted');
        }
    }
};


// Showr alerts 
UI.prototype.showAlert = function(message, className) {
    // Create a div 
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message)); // the text will come from the actual funtion 
    // Get parent 
    const container = document.querySelector('.container');
    const form = document.getElementById('book-form');

    // instert the div 
    container.insertBefore(div, form);

    // Timeout function for the div 
    setTimeout(function() {
        document.querySelector('.alert').remove();
    }, 3000);
};

UI.prototype.clearFields = function() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
};

// ---  Instantiate a UI ----
const ui = new UI();


// Add event listeners to add a book  
document.getElementById('book-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Create var to store input information 

    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

    // Instantioate a book object 
    const book = new Book(title, author, isbn);



    // Validate the inputs to check not empty 
    if (title === '' || author === '' || isbn === '') {
        // Eroor Elert 
        ui.showAlert('please fill in all class', 'error');
    }
    else {

        // UI add book to the list 
        ui.addBookToList(book);

        // Showr added to list alert
        ui.showAlert('The new book added', 'success');

        // Clear the fields of input on submit event 
        ui.clearFields();


    }
});



// Event listener for book deletion
document.getElementById('book-list').addEventListener('click', function(e) {
    e.preventDefault();
    ui.deleteBook(e);

});
