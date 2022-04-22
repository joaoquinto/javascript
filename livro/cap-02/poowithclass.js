class Book {
  constructor(title, pages, isbn){
    this.title = title,
    this.pages = pages,
    this.isbn = isbn
  }

  printIsbn(){
    console.log(this.isbn);
  }

}

let book = new Book('title','pag','isbn')

book.printIsbn()

class ITbook extends Book{
  constructor(title,pages,isbn, technology){
    super(title,pages,isbn)
    this.technology = technology
  }
  printTechnology(){
    console.log(this.technology);
  }

  printDataBook(){
    console.log(`The book "${this.title}" of ${this.technology} has ${this.pages} pages and your isbn is ${this.isbn}`);
  }
}

let jsBook = new ITbook('Learning js Algorithms', '200', '1234567890','javascript')

console.log(jsBook.title);

jsBook.printDataBook()

jsBook.printIsbn()

class Person{
  constructor(name){
    this._name = name
  }

  get name(){
    return this._name;
  }

  set name(value){
    this._name = value
  }
}

let lotrChar = new Person('Frodo')

console.log(lotrChar.name);
lotrChar.name = 'Gandalf'
console.log(lotrChar.name);
lotrChar._name = 'Sam'
console.log(lotrChar.name);