// // QUESTION 15
// // Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
// ANSWER
var NEWGUESTLIST = ["SEHRISH", "mehwish", "beenish"];
console.log("".concat(NEWGUESTLIST[1], " is not comming"));
NEWGUESTLIST.splice(1, 1, "shazia");
NEWGUESTLIST.forEach(function (NEWINVITATION) {
    return console.log("\"HEY ".concat(NEWINVITATION, ", I'D LOVE TO CATCH up OVER DINNER)!\n\n    HOW ABOUT JOINING ME FOR a delicious meal this \"saturday\" at \"8 pm\"at kababies.let me know if you are free!"));
});
