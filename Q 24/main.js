// define Variables:
var apple = "apple";
var uppercaseApple = "Apple";
var ten = 10;
var twenty = 20;
var fruits = ["Apple", "Banana", "Orange", "Mango"];
// test for equality and inequality with string:
console.log("\n Is apple equals to apple?");
console.log(apple == "apple");
console.log("\n Is apple is not equal to apple?");
console.log(apple != "apple");
// test using lowerCase function:
console.log("\n Is APPLE is equal to apple after coverting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("\n Is APPLE is not equals to apple after converting to lowercash?");
console.log(uppercaseApple.toLowerCase() != "apple");
// numerical tests:
// Equals to:
console.log("\n Is ten is equal to twenty?");
console.log(ten == twenty);
// Not equals to:
console.log("\n Is ten is not equals to twenty?");
console.log("ten != twenty");
// greater than:
console.log("\n Is then is greater than zero?");
console.log(ten > 0);
// less than:
console.log("\n Is ten is less than zero?");
console.log(ten < 0);
// greater than equals to:
console.log("\n Is ten is greator than equals to 5?");
console.log(ten >= 5);
// less than Equals to:
console.log("\n Is twenty is less than equals to 10?");
console.log(twenty <= 10);
// test using "and" & "or" operators:
// using and "&&": isme dono condition true hongi to he ye true return krega , agr dono conditions true nh hwi to false bta dega:
console.log("\n twenty is not equal to 10 and twenty is greator than 10?");
console.log(twenty != 10 && twenty > 10);
console.log("\n twenty is not equal to 10 and twenty is greator than 30?");
console.log(twenty != 10 && twenty > 30);
// using or "||": isme agr dono condiotns mese ek bh true hojaegi to ye true ka answer dedeta h bhale he ek condition false he q na ho:
console.log("\n 20 is greater than 50 OR 20 is equal to 20?");
console.log(20 > 50 || 20 == 20);
console.log("\n 20 is greater than 50 OR 20 is not equals to 20?");
console.log((20 > 50 || 20 != 20));
// Test weather an item is include in array:
console.log("\n Is Orange include in my array?");
console.log(fruits.includes("Orange"));
