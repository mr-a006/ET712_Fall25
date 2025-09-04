/**
 * Aqeel Hussain
 * lab 3, loops
 * Sept 4, 2025
 */
console.log("Aqeel Hussain")
console.log(`\n ----- example 1: for loop as a counter -----`)
// for loop to print from 0 to 5 (include)
for(let x = 0; x <= 5 ; x++ ){
    console.log(x)
}
console.log(`\n ----- example 2: for loop with conditional statement -----`)
// print all even numbers between -20 and 20 (inclusive)
for(let x = -20; x <= 20; x++ ){
    if(x%2 == 0){
        console.log(x)
    }
}

console.log(`\n ----- example 3: for loop as a decrement counter -----`)
// print numbers from 3 to 0 --> 3,2,1,0
for(let x = 3; x >= 0; x-- ){
    console.log(x)
}
console.log(`\n ----- example 4: for loop in an array -----`)
let cars = ['Mazda', 'BMW', 'Tesla', 'Jeep', 'Honda']
for(let index = 0; index<cars.length ; index++){
    console.log(cars[index])
}
console.log("\nfor loop using 'of' statement")
for(let each of cars){
    console.log(each)
}

console.log(`\n ----- example 5: application using for loops -----`)
let car_counter = 0;
for(let index = 0; index<cars.length ; index++){
    // find how many car's name has more than 4 characters
    if(cars[index].length > 4){
        car_counter ++ 
    }
}
console.log(`There is/are ${car_counter} car's name with 4+ characters`)

console.log(`\n ----- example 6: application using for loops -----`)
// ask the user to guess number between 1 and 9. The user has three chances
let GUESS = 8
for(let counter = 1; counter <= 3 ; counter++){
    let user_number = parseInt(prompt("Enter a number between 1 and 9"))
    console.log(`User guess = ${user_number}`)
    if(user_number === GUESS){
        console.log(`Great! the number is ${GUESS}`)
        break
    }
    else if(user_number>GUESS){
        console.log(`Wrong! the number should be lower`)
    }
    else if(user_number<GUESS){
        console.log(`Wrong! the number should be higher`)
    }

    if(counter===3){
        console.log(`Better luck next time`)
    }
}

console.log(`\n ----- example 7: while loop as a counter -----`)
// print from 0 to 5
let y = 0
while(y<=5){
    console.log(y)
    y++
}

console.log(`\n ----- example 8: validate an input -----`)
// check if the input number is between 1 and 9
let number = parseInt(prompt("Enter a number between 1 and 9 "))
// use while loop to recollect the number if the number is not between 1 and 9
while(number<1 || number>9){
    number = parseInt(prompt("ERROR: Enter a number between 1 and 9 "))
}
console.log(`The collected number is ${number}`)

console.log(`\n ----- example 9: simulate a bank transaction -----`)
let balance = 1000
while(true){
    user_transaction = parseInt(prompt("How can I help you today?\nPress 1 for account balance\nPress 2 for deposit\nPress 3 for withdraw\nAny other number to exit"))

    if (user_transaction <1 || user_transaction > 2){
        console.log(`Thank you for visiting QCC bank!`)
        break
    }
    switch(user_transaction){
        case 1:
            console.log(`Your balance is ${balance}`)
            break
        case 2:
            let deposit = parseInt(prompt("How much do you want to deposit? "))
            if (deposit>0){
                balance += deposit
            }
            else{
                console.log(`Error! invalid amount`)
            }
            break
        default:
            console.log(`Thank you for visiting QCC bank!`)
            break
    }



}
console.log("----- EXCERCISE A -----")


console.log("----- EXCERCISE B -----")
let PIN = 1234
let attempt_counter = 3
while(true){
    // collect a pin number
    let user_pin = parseInt(prompt("Enter a pin number"))
    //pin doesn't match
    if(){
        user_pin = parseInt(prompt("Enter a pin number"))
        attempt_counter --
    }
    else{
        console.log(`Welcome to your account`)
        break
    }

}