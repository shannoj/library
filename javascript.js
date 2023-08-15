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

addButton.addEventListener("click", function(){
    
})