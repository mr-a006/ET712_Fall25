/*
Aqeel Hussain
Lab 4, Fucntions
September 9, 2025
 */
console.log("Aqeel Hussain")
// define a function to print a message
function msg(){
    console.log("----- Example 1 -----")
    console.log("Hello World!")
}

// define a function to print from 3 to 1
function printCount(){
    console.log("----- Example 2 -----")
    for(let n = 3; n>0; n--){
        console.log(n)
    }
}

// define a function to passed a username
function greeting(username){
    console.log("----- Example 3 -----")
    console.log(`Welcome to JS ${username}`)
}

// define a function passses a username and print it in uppercase
function upperMessage(message){
    console.log("----- Example 4 -----")
    let changeUpper = message.toUpperCase()
    console.log(changeUpper)
}

// define a function to simulate a snake eyes game.
// pass two numbers to the function, and check if both numbers are '1'
function isSnakeEyes(dice1, dice2){
    console.log("----- Example 5 -----")
    if(dice1===1 && dice2 === 1){
        console.log("Snake Eyes!")
    }
    else{
        console.log("Not Snake Eyes!")
    }
}

// define a function that returns the area of a rectangle
function areaRectangle(length, width){
    console.log("----- Example 6 -----")
    return length*width
}

// define a function to check a temperature. If the temperature is greater than 75, returns 'true', otherwise, it returns a 'false'
function checkTemperature(temperature){
    if (temperature>=75){
        return true
    }
    else{
        return false
    }
}
//EXERCISE
function checkName(){
    let name;

    // prompt for a name
    while(true){
        name = prompt("Enter your name: ");
    
    //if the user cancels or leaves input blank
    if (name === null || name.trim() === ""){
        alert("You forgot to enter a name. Enter a name again:");
    }

    // if the user enters a number
    else if (!isNaN(name)){
        alert(`${name} is invalid! Enter a name again: `)
    }

    // if the input is valid (name)
    else{
        console.log(`Welcome ${name.toUpperCase()} to the class!`);
        break;
    }
    }
}