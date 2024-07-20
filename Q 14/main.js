// QUESTION 14
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
// Make a list that includes at least three people you’d like to invite to dinner.
// Then use your list to print a message to each person, inviting them to dinner.
// ANSWER:
var Guestlist = ["alisha", "ejaz", "rabia bibi"];
Guestlist.forEach(function (invitation) {
    return console.log("\"Hey ".concat(invitation, ", i would like to catchup over dinner!\n  How about joining me for a delicious meal this \"saturday\". let me know if you're free!"));
});
