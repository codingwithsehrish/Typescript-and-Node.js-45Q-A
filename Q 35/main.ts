// QUESTION 35
// Animals: Think of at least three different animals that have a 
// common characteristic. Store the names of these animals in a list, and then 
// use a for loop to print out the name of each animal. • Modify your program 
// to print a statement about each animal, such as A dog would make a great pet.
//  • Add a line at the end of your program stating what these animals have 
// in common. You could print a sentence such as Any of these animals would
//  make a great pet!

// ANSWER
  let petAnimal = ["Cats","Dogs","Parrots"]

//   using for loop
for (let onepet of petAnimal){
    console.log(`A ${onepet} would make a great pet`);
    // or age hum chahte h ye 17 no wala code hr pet animal k sath aye to hum issse 
    // // for loop ka ander he clg krwa denge e.g:
    //// console.log("Any of these animals would make a freat pet!\n");//
}
   
// print a message outside for loop:
console.log("Any of these animals would make a freat pet!");