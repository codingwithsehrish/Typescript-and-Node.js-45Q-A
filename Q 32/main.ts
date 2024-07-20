// // QUESTION: 32
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.


// ANSWER
// list of current users:
let current_users = ["Ejaz Ahmad","saqib Sadiq", "Khawar Mehmood","Shaban Khan","Rashid"]
// list of arrat new users:
let new_users = [ "Abdul Moeed", "Khawar Mehmood", "Ejaz Ahmad","Saqib Sadiq", 
    "Mussab Yaqoob"]

// loop through new_users  to check for usernames availabbility
new_users.forEach(new_one_user =>{
    // making a condition for username already exist and save in our_condition avariable: 
    let  our_condition = current_users.some(current_one_user =>current_one_user.toLowerCase() === new_one_user.toLowerCase())
    // print different messages usimg If-Else statements:
    if (our_condition){
        console.log(`sorry ${new_one_user} is already taken!`)
    }else{
        console.log(`This Username ${new_one_user} is available.`)
    }
    
})