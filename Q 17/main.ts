


// Question 17:
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
// and you have space for only two guests.

// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list.
//  Each time you pop a name from your list, print a message to that person letting them 
// know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list,
//  letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list.
//  Print your list to make sure you actually have an empty list at the end of your program.

// ANSWER:
let moreGuestlist = ["zainab", "atika","madiha"];
console.log(`${moreGuestlist[1]} is not coming`);
moreGuestlist.splice(1,1, "maria")

let middleGuest : number=Math.floor(moreGuestlist.length/2);
moreGuestlist.splice(middleGuest,0,"mariam");

let shrinkguestlist = ["zainab", "atika","madiha"];
console.log(`${shrinkguestlist[1]} is not coming`);
moreGuestlist.splice(1,1, "maria")
  
console.log(`Hey everyone! we found a bigger table.let's call more guest`);
shrinkguestlist.unshift("zehra")
shrinkguestlist.push("nafisa")

let shrinkguest : number=Math.floor(shrinkguestlist.length/2);
shrinkguestlist.splice(middleGuest,0,"mariam");

shrinkguestlist.forEach((moreinvitation) =>
    console.log(`Hey ${moreinvitation}, I'd love to catch up over dinner!
how about joining me for a delicious meal this "saturday" at "8pm"at kababjees. let me know, if you are free!`)
        
);
console.log("unfortunately, new dinner table wont arrive in time for the dinner, so i have spacr for only two guest for dinner");
while(shrinkguestlist.length > 2){
    let removeGuest=shrinkguestlist.pop();
    console.log(`sorry, ${removeGuest} i can invit you to dinner`);
}
console.log("invitation for the last two guests");
shrinkguestlist.forEach(Guestinvitation => console.log("you are still invited for dinner"))

shrinkguestlist.pop();
shrinkguestlist.pop();

console.log(shrinkguestlist, "Empty invit");