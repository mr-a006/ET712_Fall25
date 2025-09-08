/*
Homework 1: control flow and loops
Aqeel Hussain
*/

console.log("\n------ Program 1: conditional statement -----")
let userInput = prompt("Please enter something:");

// check if user clicked cancel
if (userInput === null) {
    console.log("Null and void!");
} 
// check if user entered a blank answer
else if (userInput === "") {
    console.log("Your answer was blank!");
} 
else {
    let number = Number(userInput);

    // check for valid number
    if (!isNaN(number)) {
        if (number > 0) {
            console.log("Think positively!");
        } else if (number < 0) {
            console.log("Never have negative balance!");
        } else {
            console.log("Yin and Yang!");
        }
    } else {
        // check for invalid number
        console.log("That's not a number.");
    }
}

console.log("\n------ Program 2: for loop and nested conditional statement -----")
let numbers = [];

for (let i = 0; i < 10; i++) {
    let input = prompt(`Enter number ${i + 1} of 10:`);

    // if input is invalid keep asking
    while (input === null || input.trim() === "" || isNaN(Number(input))) {
        input = prompt(`Invalid input! Please enter a valid number (${i + 1} of 10):`);
    }

    numbers.push(Number(input));
}

let count3 = 0;
let count5 = 0;
let count7 = 0;

// check multiples
for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    
    if (num % 3 === 0) {
        count3++;
    }

    if (num % 5 === 0) {
        count5++;
    }

    if (num % 7 === 0) {
        count7++;
    }
}

// output
console.log(`${count3} numbers are multiple of 3`);
console.log(`${count5} numbers are multiple of 5`);
console.log(`${count7} numbers are multiple of 7`);