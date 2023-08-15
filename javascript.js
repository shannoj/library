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

let addButton = document.getElementById('add-book');

let formContainer = document.getElementById('form-container');

let submit = document.getElementById("submit");

let form = document.getElementById("form");

let main = document.getElementById("main");

addButton.addEventListener("click", function(){
    formContainer.style.display = "flex";
})

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
        read = 'yes';
    }

    else {
        read = 'no';
    }

    const book = new Book(title, author, pages, read);
    addBook(book);

    main.innerHTML += `
    <div class="book"> 
        <div class="book-item">${title}</div>
        <div class="book-item">${author}</div>
        <div class="book-item">${pages} pages</div>
        <div class="book-item"> Have read? ${read}</div>
    </div>
    ` ;

    form.reset();
    formContainer.style.display = "none";

});
