console.log("Aqeel Hussain")
// collect the elements
let myform = document.querySelector(".myform")
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
    }
    else{
        username_error_msg.textContent = "username must be between 5 and 20 characters"
        btnsubmit.disabled = true
    }
})