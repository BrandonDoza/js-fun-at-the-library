// I need a function that called createTitle 
// the function needs to take in one argument, so it needs one parameter
// the function needs to return an inerpolated string that uses the argument passed into the function 

function createTitle(title) {
  return `The ${title}`
}

// I need a function called buildMainCharacter
// The function needs to create/return an object 
// the function takes in 3 arguments

function buildMainCharacter(name, age, pronouns) {
  return {
    name: name,
    age: age,
    pronouns: pronouns
  }
}

// I need to make a function called saveReview
// the function takes in 2 arguments (a string and an array)
// the function needs to add (push) the string into the array
// the function needs to be able to add multiple reviews
// the function should not add the same review twice

function saveReview(review, reviews) {
  if (!reviews.includes(review)) {
  reviews.push(review);
  } 
}

// I need to make a function called calculatePageCount
// the function needs to calculate the number of pages in a book
// the function needs use .length to find the length of the title 
// I need a variable to store the page count and return a value. 
// I need to do the length of the title * 20 to get the right page number

function calculatePageCount(title) {
  var pageCount = title.length * 20;
  return pageCount;
}

// I need to make a function called writeBook
// the function needs to return an object
// the function takes in 3 arguments
// the pageCount needs to be dynamic and calculate the number of pages. See function above advice

function writeBook(title, mainCharacter, genre) {
  return {
    title: title, 
    mainCharacter: mainCharacter,
    pageCount: title.length * 20,
    genre: genre
  }
}

// I need to make a function called editBook
// the function needs to decrease the books page count by 3/4
// the function is taking in 1 argument (book object) 
// I need to multiply the book page count by .75

function editBook(bookObj) {
  var editedPageCount = bookObj.pageCount * 0.75;
  bookObj.pageCount = editedPageCount;
  return bookObj;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}