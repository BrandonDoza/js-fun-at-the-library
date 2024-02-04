// I need to make a function called shelfBook
// the function needs to add books to a certain shelf array based on the genre
// the function takes in 2 arguments
// the function needs to place the new object at the beginning of the array (unshift method)
// the array should only be able to hold a certain number of objects


function shelfBook(titleObj, shelfArray) {
  if (shelfArray.length < 3)
    shelfArray.unshift(titleObj);
  return shelfArray;
}

// I need to create a function called unShelfBook
// the function takes in 2 arguments, a string and an array
// the function needs to remove an object from the array if the title matches the string being passed in
// the splice method can remove items from an array 

function unshelfBook(title, shelfArray) {
    for (var i = 0; i < shelfArray.length; i++) {
      if (shelfArray[i].title === title) {
        shelfArray.splice(i, 1);
      }
    }
    return shelfArray;
}

// I need to make a function called listTitles
// the function takes is one argument, an array of objects
// the function needs to return a string of all the book object titles
// this needs to be one string with all the titles
// how do I put them all into one string?

function listTitles(shelfArray) {
  var titles = '';
    for (var i = 0; i < shelfArray.length; i++) {
      titles += shelfArray[i].title;
      if (i < shelfArray.length -1) {
        titles +=', '
      }
    }
    return titles;
}

// I need to make a function calles searchShelf
// the function needs to tell if there is a book in the array with a true/false
// I need to loop throught the array to see if a book is in it. 
// the function takes in 2 arguments, an array of objects and a string

function searchShelf(shelfArray, title) {
  var isInStock = false;
    for (var i = 0; i < shelfArray.length; i++) {
      if (shelfArray[i].title === title) {
        isInStock = true;
      }
    } 
    return isInStock;
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};