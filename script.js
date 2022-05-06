const bookAddCard = document.querySelector(".add-book");
const addForm = document.querySelector(".add-form");
const submit = document.getElementById("submit");
const container = document.querySelector(".book-container");

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");

let book;

let library = []
let index = 0;

function addBook(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function checkEmpty() {
    return (!!title.value && !!author.value && !! pages.value); // returns false if input fields are empty, true if the are not.
}

bookAddCard.addEventListener('click', () => {
    addForm.classList.add("adding-book");
});

submit.addEventListener('click', () => {
    if (checkEmpty()) {
        library.push(new addBook(title.value, author.value, pages.value, document.getElementById("read").checked))
        book = document.createElement("div");
        book.classList.add("book-card");
        book.innerHTML = `<p><big><b>Title:</b></big> ${library[index].title}</p> <p><big><b>Author</b>:</big> ${library[index].author}</p> <p><big><b>Pages:</b></big> ${library[index].pages}</p> <p><big><b>Read:</b></big> ${library[index].read}</p>`;
        container.insertAdjacentElement('afterbegin', book);
        addForm.classList.remove("adding-book");
        title.value = "";
        author.value = "";
        pages.value = "";
        index++;
    } else {
        title.classList.add("empty");
        author.classList.add("empty");
        pages.classList.add("empty");
    }
})