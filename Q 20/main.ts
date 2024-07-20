// QUESTION 20
// Think of something you could store in a array. For example, you could make a
//  list of mountains, rivers, countries, cities, languages, or anything else you’d 
// like. Write a program that creates a list containing these items.

///by own self concept:

//making an favorite countries ARRAY:
let favorite_visit_places: string[] =["\n SAUDIA \n MADINAH \n Kashmir \n Turkey"];
//print the message of list
console.log("These  are my favourivte countries I wanted to visit")
//print the value of Array in the form of list:
favorite_visit_places.forEach(countries=>{
    console.log(countries);
});


// or ANOTHER METHOD://it is more reliable: 


//making an favorite countries ARRAY:
let favorite_places: string[] =["SAUDIA", "MADINAH","Kashmir","Turkey"];
//print the message of list
console.log("These  are my favourivte countries I wanted to visit")
//print the value of Array in the form of list:
favorite_places.forEach(countries=>{
    console.log(countries);
});