// Write a program that takes a list of books, including their authors and publication years as input.
// The program should then filter out all books that were published before 2010 and create a new array 
// with the remaining books, but with their author names capitalized

const books = [
    { title: "Book 1", author: "author 1", year: 2005 },
    { title: "Book 2", author: "author 2", year: 2012 },
    { title: "Book 3", author: "author 3", year: 2008 },
    { title: "Book 4", author: "author 4", year: 2015 },

  ];
  
  const filteredAndCapitalized = books.filter((book) => book.year >= 2010).map((book) => {
      return {title: book.title, author: book.author.toUpperCase(), year: book.year};
    });
  
  console.log(filteredAndCapitalized);
  