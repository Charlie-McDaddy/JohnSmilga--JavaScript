class BookCl {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UICl {
  constructor() {}

  addBookToList(book) {
    const list = document.getElementById("book-list");
    const row = document.createElement("tr");
    row.innerHTML = `
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.isbn}</td>
          <td><a href="#" class="delete">X</a></td>
          `;
    list.appendChild(row);
  }

  clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
  }
}

document.getElementById("book-form").addEventListener("submit", function (e) {
  //get form values
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;

  //Instantiate a book
  const book = new BookCl(title, author, isbn);

  //Instatiate UI
  const ui = new UICl();

  //Add book to list
  ui.addBookToList(book);

  //Clear fields after book added
  ui.clearFields();

  e.preventDefault();
});
