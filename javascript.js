let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
};

function addBook(book){
    myLibrary.push(book);
}

function closeButton(){
    var closeBook = document.getElementsByClassName("removeButton");
    for (i = 0; i < closeBook.length; i++){
        closeBook[i].addEventListener("click", function() {
            this.parentElement.parentElement.style.display = 'none';
          });
    }
};

let addButton = document.getElementById('add-book');

let formContainer = document.getElementById('form-container');

let submit = document.getElementById("submit");

let form = document.getElementById("form");

let main = document.getElementById("main");

let bookContainer = document.getElementById("book-container");

addButton.addEventListener("click", function(){
    formContainer.style.display = "flex";
});

window.addEventListener("click", function(event) {
    if (event.target === formContainer) {
        formContainer.style.display = "none";
    }
});

form.addEventListener("submit", function(e){
    e.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    var read = '';

    if (document.getElementById('yes').checked){
        read = 'Yes';
    }

    else {
        read = 'No';
    }

    const book = new Book(title, author, pages, read);
    addBook(book);

    bookContainer.innerHTML += `
    <div class="book" id="${title}"> 
        <div class=button-container>
        <button class="removeButton" id="remove-${title}">X</button>
        </div>
        <div class="book-item">${title}</div>
        <div class="book-item">${author}</div>
        <div class="book-item">${pages} pages</div>
        <div class="book-item"> Have read? ${read}</div>
    </div>
    `;

    closeButton();

    formContainer.style.display = "none";
    form.reset();

});



