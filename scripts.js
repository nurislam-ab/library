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
  render();
}

function render() {

  let bookList = document.getElementById('book-list');
  bookList.innerHTML = checkBooks(myLibrary);

  myLibrary.forEach((element, index) => {
    let row = document.createElement('tr');
    row.id = index;
    let checked = element.read ? 'checked' : '';

    row.innerHTML = `<td>${element.title}</td> <td>${element.author}</td>\n <td>${element.pages}</td> <td><input type="checkbox" name="read" id="read" ${checked} disabled=true></td>\n`;
    row.innerHTML += `<td><button onclick="removeBook(${index})"=>Delete Book</button></td>`;
    bookList.appendChild(row);
  })
}

function checkBooks (library) {
  return library.length == 0 ? 'There are no books': '';
}

window.onload = function () {
  render();
}

function removeBook(index) {
  let firstPart = myLibrary.slice(0, index); 
  let secondPart = myLibrary.slice(index + 1, myLibrary.length); 
  myLibrary = firstPart.concat(secondPart);
  render();
}

function showForm() {
  let form = document.getElementById('add-new-book-form');
  if (form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
}