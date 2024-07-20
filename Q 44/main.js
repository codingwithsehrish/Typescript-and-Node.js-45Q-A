// QUESTION 44
// Sandwiches: Write a function that accepts a array of items a person wants 
// on a sandwich. The function should have one parameter that collects as many 
// items as the function call provides, and it should print a summary of the
//  sandwich that is being ordered. Call the function three times, using a
//  different number of arguments each time.
// ANSWER
// define a function with a rest parameter that accept items arguments representing our sandwich:
function makeSandwich() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    console.log("\n Making a Sandwich wit the following items: \n");
    item.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\nNow Enjoy Sandwich\n");
}
// call the function 3 times with 3 different number of arguments
makeSandwich("Chicken", "Cheese", "Mayo", "Egg");
makeSandwich("Bread", "Butter");
makeSandwich("Bread", "Butter", "Mayo", "kachup", "Egg", "Chicken", "Cheese");
