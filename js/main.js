var Book = /** @class */ (function () {
    function Book(author) {
        this.author = author;
    }
    Book.prototype.display = function (arg) {
        console.log("" + this.author);
    };
    return Book;
}());
var newBook = new Book('Christopher');
newBook.display("test");
