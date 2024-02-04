// I need to make a function called createLibrary
// the function needs to return an object
// the function takes in one argument, a string thats a name

function createLibrary(name) {
  return {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
}

// I need to  make a function that adds a book to a particular shelf array in the library object 
// the function takes in 2 arguments, a library object and a book object
// the library object has a nested object of shelves that have arrays as values
// the book object needs to be added to the correct shelf based on the genre

//<><>Refactored<><>
function addBook(library, book) {
  var genreKey = 'genre';
  if (book[genreKey] in library.shelves) {
    library.shelves[book[genreKey]].push(book);
    return library
  }
}


// function addBook(library, book) {
//   if (book.genre === 'fantasy') {
//     library.shelves.fantasy.push(book)
//   } else if (book.genre === 'fiction') {
//     library.shelves.fiction.push(book)
//   } else {
//     library.shelves.nonFiction.push(book)
//   }
//   return library
// }

// I need to make a function called checkoutBook
// the function needs to remove a book from the correct array that it is in
// the function takes in 3 arguments, a library object, and 2 strings, a title, and a genre
// the function also needs to return a string that states the book has been checked out 

function checkoutBook(library, title, genre) {
  for (i = 0; i < library.shelves[genre].length; i++) {
    if (library.shelves[genre][i].title === title) {
      library.shelves[genre].splice(i, 1);
      return `You have now checked out ${title} from the ${library.name}.`
    } else {
    }
  }
  return `Sorry, there are currently no copies of ${title} available at the ${library.name}.`
}


// I need a function called takeStock
// the function takes in 2 arguments
// the function returns the number of books in a given array
// if an array/argument is passed that does not exist, I must return the total books in the library

function takeStock(libraryObj, shelf) {
  var totalBooks = libraryObj.shelves.fiction.length + libraryObj.shelves.nonFiction.length + libraryObj.shelves.fantasy.length;
  if (shelf === undefined) {
    return `There are a total of ${totalBooks} books at the ${libraryObj.name}.`
  } else {
    return `There are a total of ${libraryObj.shelves[shelf].length} ${shelf} books at the ${libraryObj.name}.`;
  }
}



module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};