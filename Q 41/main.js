// QUESTION 41
// Magicians: Make a array of magician’s names. Pass the array to a function 
// called show_magicians(), which prints the name of each magician in the array.
// ANSWER:
function show_magicians(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
// defaul ann array containing magician name
var magician_name = ["Harry poter", "Hamza", "Usman"];
// call the function to print each magician name
show_magicians(magician_name);
