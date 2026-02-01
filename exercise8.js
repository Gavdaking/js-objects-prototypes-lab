const library = {
  name: 'City Library',
  books: [],

  addBook(title, author, isbn) {
    this.books.push({ title, author, isbn });
  },

  findBookByTitle(title) {
    return this.books.find(book => book.title === title) || null;
  },

  listAllBooks() {
    this.books.forEach(book => console.log(book.title));
  }
};

const universityLibrary = Object.create(library);
universityLibrary.courses = [];

universityLibrary.addCourseBook = function (courseName, title, author, isbn) {
  this.courses.push(courseName);
  this.addBook(title, author, isbn);
};

// Test with 3 books
universityLibrary.addCourseBook(
  'CMPS2212',
  'Eloquent JavaScript',
  'Marijn Haverbeke',
  '978-1593279509'
);

universityLibrary.addBook(
  'You Don’t Know JS',
  'Kyle Simpson',
  '978-1491904244'
);

universityLibrary.addBook(
  'JavaScript: The Good Parts',
  'Douglas Crockford',
  '978-0596517748'
);

universityLibrary.listAllBooks();