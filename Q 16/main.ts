// Question 16:
// More Guests: You just found a bigger dinner table, so now more space is available. 
// Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your
//  program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.

let moreGuestlist = ["zainab", "atika","madiha"];
console.log(`${moreGuestlist[1]} is not coming`);
moreGuestlist.splice(1,1, "maria")

console.log(`Hey everyone! we found a bigger table.let's call more guest`);
moreGuestlist.unshift("zehra")
moreGuestlist.push("nafisa")

let middleGuest : number=Math.floor(moreGuestlist.length/2);
moreGuestlist.splice(middleGuest,0,"mariam");

moreGuestlist.forEach((moreinvitation) =>
    console.log(`Hey ${moreinvitation}, I'd love to catch up over dinner!
how about joining me for a delicious meal this "saturday" at "8pm"at kababjees. let me know, if you are free!`)
        
);
