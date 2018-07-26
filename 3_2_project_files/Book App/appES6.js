// Initiate Book Class 
class Book {
    constructor(author, title, isbn) {
        this.author = author;
        this.title = title;
        this.isbn = isbn;
    }
}

// Initiate UI class
class UI {
    addBookToList(book) {
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
    }

    showAlert(message, className) {
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
    }



    deleteBook(e) {
        if (e.target.classList.contains('delete')) {
            if (confirm('Are you sure?')) {
                e.target.parentElement.parentElement.remove();
                ui.showAlert('Book deleted successfully', 'deleted');
            }
        }
    }

    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
}

// Local Storage class
class Store {
    static getBooks() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        }
        else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static displayBooks() {
        const books = Store.getBooks();

        books.forEach(function(book) {
            const ui = new UI;

            // Add Book to UI 
            ui.addBookToList(book);
        });
    }

    static addBook(book) {
        const books = Store.getBooks();

        books.push(book);

        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn) {
        const books = Store.getBooks();

        books.forEach(function(book, index) {
            if (book.isbn === isbn) {
                books.splice(index, 1);
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    }
}

// Dom load Event 
document.addEventListener('DOMContentLoaded', Store.displayBooks);

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

        // Add to local Storare
        Store.addBook(book);

        // Showr added to list alert
        ui.showAlert('The new book added', 'success');

        // Clear the fields of input on submit event 
        ui.clearFields();


    }
});



// Event listener for book deletion
document.getElementById('book-list').addEventListener('click', function(e) {
    e.preventDefault();

    // Delete the book from UI
    ui.deleteBook(e);

    // Delete the book form local storage
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

});
