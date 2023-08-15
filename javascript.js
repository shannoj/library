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

addButton.addEventListener("click", function(){
    formContainer.style.display = "flex";
})

window.addEventListener("click", function(event) {
    if (event.target === formContainer) {
        formContainer.style.display = "none";
    }
});