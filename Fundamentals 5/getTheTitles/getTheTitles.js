const getTheTitles = function(array) {
     const mappedArray = array.map(function(book) {
           return book.title;
        })
        return mappedArray;
     }
module.exports = getTheTitles;
