// //question 6
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of
//  the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, 
//  so the whitespace around the name is displayed. Then print the name after striping the white spaces.
// ANSWER:
var whitespace = "\n\t sehrish khatri\t\n";
console.log(whitespace); // \n is used for new line and \t is used for whitespace.
var withoutwhitespase = whitespace.trim();
console.log(withoutwhitespase);
