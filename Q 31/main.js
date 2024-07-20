// // QUESTION 31:
// No Users: Add an if test to Exercise 28 to make sure the list of users
//  is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure 
// the correct message is printed.
// answer:
// creating a Array with 5 values
var userNames = ["beenish", "fatima", "Admin", "mahnoor", "rimsha"];
// Remove all values form Array Now our Array is empaty
userNames = [];
// if statement for checking length of our Array is empaty?
if (userNames.length === 0) {
    console.log("your Array in Empty We need to fiind some users!");
}
else {
    // using forEach loops on Array
    userNames.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("hello ".concat(oneUser, ", would you like to see a status report?"));
        }
        else {
            console.log("hello ".concat(oneUser, ", thak you for logging in again"));
        }
    });
}
