let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function checkBooks(library) {
  return library.length === 0 ? 'There are no books' : '';
}

function render() {
  const bookList = document.getElementById('book-list');
  bookList.innerHTML = checkBooks(myLibrary);

  myLibrary.forEach((element, index) => {
    const row = document.createElement('tr');
    row.id = index;
    const checked = element.read ? 'checked' : '';

    row.innerHTML = `<td>${element.title}</td> <td>${element.author}</td>\n <td>${element.pages}</td> <td><input onclick="updateBook(${index})" type="checkbox" name="read" id="read" ${checked}></td>\n`;
    row.innerHTML += `<td><button onclick="removeBook(${index})"=>Delete Book</button></td>`;
    bookList.appendChild(row);
  });
}

function addBookToLibrary() { // eslint-disable-line no-unused-vars
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').checked;
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
  render();
}


function updateBook(index) { // eslint-disable-line no-unused-vars
  const currentBook = myLibrary[index];
  const currentStatus = currentBook.read;

  const newStatus = !currentStatus;
  currentBook.read = newStatus;
}

window.onload = () => {
  render();
};

function removeBook(index) { // eslint-disable-line no-unused-vars
  const firstPart = myLibrary.slice(0, index);
  const secondPart = myLibrary.slice(index + 1, myLibrary.length);
  myLibrary = firstPart.concat(secondPart);
  render();
}

function showForm() { // eslint-disable-line no-unused-vars
  const form = document.getElementById('add-new-book-form');
  if (form.style.display === 'none') {
    form.style.display = 'block';
  } else {
    form.style.display = 'none';
  }
}