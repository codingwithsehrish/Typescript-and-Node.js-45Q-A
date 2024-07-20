// QUESTION 43
// Unchanged Magicians: Start with your work from Exercise 40. Call the function
//  make_great() with a copy of the array of magicians’ names. Because the
//  original array will be unchanged, return the new array and store it in a
//  separate array. Call show_magicians() with each array to show that you have
//  one array of the original names and one array with the Great added to each 
// magician’s name.
// ANSWER 42
// / ANSWER
// DEFINE THE FUNCTION TO SHOW MAGICIANS Name
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// function to make magnicians great through .map() it will modify ARRAY
function make_great(magicians) {
    return magicians.map(function (name) { return "The great ".concat(name); });
}
// DEFINE AN ARRAY OF MAGICIANS  NAME:
var magicians_name = ["HERRY POTOR", "HAMZA", "USMAN"];
// ANSWER 43
// Making a copy of original array through .slice();
var copy_magincian_name = magicians_name.slice();
// modify the copied array to include "The great" with their names
var copy_great_magicians = make_great(copy_magincian_name);
// show both Arrays original and copies:
// orginal
console.log("orignal Array\n");
show_magicians(magicians_name);
//  copied
console.log("copied Array\n");
show_magicians(copy_magincian_name);
