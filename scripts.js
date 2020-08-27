let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  let title = document.getElementById('title').value;
  console.log(title);
  
  let author = document.getElementById('author').value;
  console.log(author);
  let pages = document.getElementById('pages').value;
  console.log(pages);
  let read = document.getElementById('read').checked;
  console.log(read);

  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
}