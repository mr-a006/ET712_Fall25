console.log("Aqeel Hussain")
// collect the elements
let myform = document.querySelector("#form1")
let greeting = document.querySelector(".greeting")
let displayusername = document.querySelector(".display_username")

// collect data within the form after the submit button is pressed
myform.addEventListener("submit", function(event){
    // prevent the default form behavior
    event.preventDefault()

    // collect the data
    let usernameInput = document.querySelector("#username")
    let usernamevalue = usernameInput.value

    if(usernamevalue.trim() === ""){
        alert("Please enter a username")
        return;
    }

    // after the validation passes, the data is sent to the server
    // in html, after the validation, the greeting message will display with the user name
    greeting.style.display = "block"
    displayusername.textContent = usernamevalue

    // clear the username text field
    usernameInput.value = ""

    // submit the form after validation
    myform.submit()
})
let btnsubmit = document.querySelector(".btnsubmit")

window.addEventListener("load", function(){
    btnsubmit.disabled = true
})

let username_error_msg = document.querySelector(".username_error_msg")
let usernameInput = document.querySelector("#username")
usernameInput.addEventListener("input", function(){
    usernamevalue = usernameInput.value
    usernamevaluelength = usernamevalue.length
    if(usernamevaluelength >=5){
        username_error_msg.textContent = ""
        btnsubmit.disabled = false
        usernameInput.classList.add("active_input_valid")
    }
    else if(usernamevaluelength==20){
        username_error_msg.textContent = "username can't be 20+ characters"
    }
    else{
        username_error_msg.textContent = "username must be between 5 and 20 characters"
        btnsubmit.disabled = true
        usernameInput.classList.remove("active_input_valid")
        usernameInput.classList.add("active_input_invalid")
    }
})

/**
 * Oct 21, 2025
 */
// collect the element
const inputpassword = document.querySelector("#password")

// add a focus event to the input
inputpassword.addEventListener("focus", function(){
    inputpassword.classList.add("active_input_valid")
})
// add a blur event to an input
inputpassword.addEventListener("blur", function(){
    inputpassword.classList.remove("active_input_valid")
    inputpassword.classList.add("active_input_invalid")
})

// shuffled word
const originalWord = "javascript"

// function to shuffle the original word
function shuffleWord(word){
    return word
    .split("")
    .sort(()=>Math.random()-0.5)
    .join("")
}


// collect the elements
const scrambleword = document.querySelector("#shuffledword")
const guessInput = document.querySelector("#guessInput")
const wordfeedback = document.querySelector('#wordfeedback')

// show shuffled word
const shuffled = shuffleWord(originalWord)
scrambleword.textContent = shuffled

// add the input event
guessInput.addEventListener("input", function(){
    // collect characters typed in the input without 
    const guess = guessInput.value

    if(guess === originalWord){
        wordfeedback.textContent = "Correct!";
        guessInput.classList.add("active_input_valid")
    }
    else{
        wordfeedback.textContent = "Try again!";
        guessInput.classList.remove("active_input_valid")
        guessInput.classList.add("active_input_invalid")
    }
})

const takenUsernames = ['admin', 'user123', 'testuser', 'guest', 'peterpan'];

usernameInput.addEventListener("input", function() {
    const usernamevalue = usernameInput.value.trim();
    const usernamevaluelength = usernamevalue.length;
    usernameInput.classList.remove("active_input_valid", "active_input_invalid");

    // check username length
    if (usernamevaluelength < 5 || usernamevaluelength > 20) {
        username_error_msg.textContent = "Username must be between 5 and 20 characters.";
        username_error_msg.style.color = "crimson";
        btnsubmit.disabled = true;
        usernameInput.classList.add("active_input_invalid");
        return;
    }

    // check if username is taken
    if (takenUsernames.includes(usernamevalue.toLowerCase())) {
        username_error_msg.textContent = "Username is already taken.";
        username_error_msg.style.color = "crimson";
        btnsubmit.disabled = true;
        usernameInput.classList.add("active_input_invalid");
    } else {
        username_error_msg.textContent = "Username is available!";
        username_error_msg.style.color = "green";
        btnsubmit.disabled = false;
        usernameInput.classList.add("active_input_valid");
    }
});
