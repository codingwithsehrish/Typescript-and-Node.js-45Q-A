// QUESTION 42
// Great Magicians: Start with a copy of your program from Exercise 39.
//  Write a function called make_great() that modifies the array of magicians by 
// adding the phrase the Great to each magician’s name. Call show_magicians() 
// to see that the list has actually been modified.
// ANSWER
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
// calling a function of make great function to modify megicians name:
var great_magnicians = make_great(magicians_name);
// call show_magicians that show modified list of magicians
console.log("THESE ARE MODIFIED LIST OF MAGICIANS");
show_magicians(great_magnicians);
