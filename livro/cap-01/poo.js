const obj = {
  name: {
    first: 'Gandalf',
    last: 'The Grey'
  },
  addres: 'Middle Earth'
}


console.log(obj.name.first + ' ' + obj.name.last);

function Book(title, pages, isbn) {
  this.title = title
  this.pages = pages
  this.isbn = isbn
}

const book = new Book('title','pag','isbn')

book.title = 'New Title'
console.log(book.title);

console.log(book);

Book.prototype.printTitle = function(){
  console.log(this.title);
}

book.printTitle()