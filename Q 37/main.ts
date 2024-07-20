// QUESTION 37:
// Large Shirts: Modify the make_shirt() function so that shirts are large 
// by default with a message that reads I love TypeScript. Make a large shirt
//  and a medium shirt with the default message, and a shirt of any size with 
// a different message.

// ANSWER
// making a Function with by default values:
function make_shirt(size: string = "large", printMessage: string = "I love Typescript"){
    console.log(`creating a ${size} shirt with  the  write ${printMessage} prints on shirt`);
}
// calling function:
make_shirt()

// calling a function now with medium size and default messages
make_shirt("medium")

// calling a function  now with small size and also different print message
make_shirt("small", "I love Javascript")