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

const modalOverlay = document.getElementById("modalOverlay");

addButton.addEventListener("click", function(){
    modalOverlay.style.opacity = 1;
    formContainer.style.display = "flex";
    formContainer.classList.remove("hidden");
    modalOverlay.style.display = "block";
});

window.addEventListener("click", function(event) {
    if (event.target === modalOverlay) {
        modalOverlay.style.opacity = 0;
        formContainer.style.display = "none";
        formContainer.classList.add("hidden");
        modalOverlay.style.display = "none";
        setTimeout(() => {
            modalOverlay.style.display = "none";
        }, 3000); // Adjust this delay to match your CSS transition duration
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
        <div class="book-item" id="${title}-read"> Have read? ${read}</div>
        <div class="toggle-switch" id="${title}-div">
            <label class="switch">
                <input type="checkbox" id="${title}-checkbox">
                <span class="slider" id="${title}-slider"></span>
            </label>
        </div>
    </div>
    `;
    
    const readDiv = document.getElementById(title+ "-read");
    const specificCheck = document.getElementById(title + "-checkbox");
    const specificSlider = document.getElementById(title + "-slider");
    if (read == 'Yes'){
        specificCheck.checked = true;
        specificSlider.style.backgroundColor =  "#007bff";
    }

    const toggleSwitches = document.querySelectorAll('.toggle-switch');

    toggleSwitches.forEach((toggleSwitch) => {
        const checkbox = toggleSwitch.querySelector('input[type="checkbox"]');
        const slider = toggleSwitch.querySelector('.slider');
        const bookTitle = toggleSwitch.id.replace("-div", ""); // Extract book title
        const bookReadStatus = myLibrary.find((book) => book.title === bookTitle).read;

        checkbox.checked = bookReadStatus === 'Yes';
        slider.style.backgroundColor = checkbox.checked ? "#007bff" : "#ccc";

        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                slider.style.backgroundColor = "#007bff"; // Change slider color when checked
                readDiv.textContent = "Have read? Yes"
            } else {
                slider.style.backgroundColor = "#ccc"; // Change slider color when unchecked
                readDiv.textContent = "Have read? No"
            }
            });
    });

    closeButton();

    formContainer.style.display = "none";
    form.reset();

});





