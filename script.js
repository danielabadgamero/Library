const bookAddCard = document.getElementsByClassName("add-book");
const addForm = document.getElementsByClassName("add-form");

function addBook(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

bookAddCard.addEventListener('click', () => {
    addForm.classList.add("adding-form");
});