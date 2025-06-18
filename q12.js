// const library = {
//   // 'books' is an array holding book objects with 'title', 'author', and 'year' properties
//   books: [
//     { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
//   ],

//   // Method to add a book into the library
//   addBook(book) {
//     // Check if 'book' is provided and is of 'object' type
//     if (!book || typeof book !== "object") {
//       console.error("Invalid book entry. Provide a valid book object.");
//       return; // Stop execution if invalid input
//     }

//     // Destructure the 'title', 'author', and 'year' properties from the 'book' object
//     const { title, author, year } = book;
//     if(!title || !author || !year){
//         console.log("Book information is incomplete.");
//         return;
//     }

//     //validate the data types
// if(typeof title !=="string " || typeof author !=="string " || typeof year !=="number "){
//     console.log("Book information is incomplete.Invalid Data typoes");
//     return;
// }
// if(this.findBookByTitle(title)){
//     console.log("Book already exists");
//     return;
// }
// //all validation passed after check
// this.book.push({title,author,year});
// console.log(`Book added: ${title} by ${author} (${year})`);

// },
// findBookByTitle(title){
//     return this.books.find(book=>book.title===title);
// },
// removeBook(title){
//     const index=this.books.findIndex(book=>book.title===title);
//     if(index!==-1){
//         this.books.splice(index,1);

//                  console.log(`Book "${removedBook[0].title}" removed successfully.`);
//     }
//     else{
//  console.error(`Book titled "${title}" not found.`);
//     }
// }

// }

// library.addBook({ title: "uathor", author: "George Orwell", year: 1949 });

const library = {
  books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],

  addBook(book) {
    if (
      !book.title ||
      typeof book.title !== "string" ||
      book.title.trim() === "" ||
      !book.author ||
      typeof book.author !== "string" ||
      book.author.trim() === "" ||
      !book.year ||
      typeof book.year !== "number"
    ) {
      console.log("Error: Book information is incomplete or invalid.");
      return false;
    }

    this.books.push(book);
    console.log(`Success: "${book.title}" added to the library.`);
    return true;
  },

  findBookByTitle(title) {
    const foundBook = this.books.find((book) => book.title === title);
    if (!foundBook) {
      console.log(`Book titled "${title}" not found.`);
    }
    return foundBook;
  },

  removeBook(title) {
    const index = this.books.findIndex((book) => book.title === title);
    if (index !== -1) {
      const removed = this.books.splice(index, 1)[0];
      console.log(`Success: "${removed.title}" removed from the library.`);
      return true;
    } else {
      console.log(`Error: Book titled "${title}" not found.`);
      return false;
    }
  },
};

library.addBook({ title: "1984", author: "George Orwell", year: 1949 }); //  succeed
library.addBook({ author: "George Orwell", year: 1949 }); //  fail

console.log("Current Library Books Count:", library.books.length);

const book = library.findBookByTitle("1984");
console.log("Found Book:", book);

library.removeBook("The Hobbit");
library.removeBook("Non-Existent Book");

console.log("Final Library Books:", library.books);

// Steps:

// Debug and improve the addBook method to ensure all books added are valid and fully specified.
// Read about the methods provided above in MDN
// Review and correct the output of the system based on operations performed.
// Refactor the code for better error handling and data integrity.
// Submission Guidelines:
