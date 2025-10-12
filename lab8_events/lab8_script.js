/**
 * Aqeel Hussain
 * Lab 8, events
 * Oct 7, 2025
 */
console.log("Aqeel Hussain")
let btnpressme = document.querySelector(".btnpressme")
btnpressme.addEventListener("click", function(e){
    if(e.target.textContent == "PRESS ME!"){
        e.target.textContent = "Key was pressed"
    }
    else{
        e.target.textContent = "PRESS ME!"
    }

    // toggle between classes in css
    e.target.classList.toggle("btnactive")
})

/** event delegation */
let list = document.querySelector("#list")

list.addEventListener("click", function(event){
    // check if the clicked element is a <li> event
    if(event.target.tagName.toLowerCase()==="li"){
        // remove the clicked <li> events
        event.target.remove()
    }
})

/** prevent default */
const qcclink = document.querySelector(".qcclink")
qcclink.addEventListener("click", function(e){
    e.preventDefault()
    alert("Website is under maintenance")
})

/** WINDOW EVENT */
let btnscrollby = document.querySelector(".btnscrollby")
let content = document.querySelector("#content")
btnscrollby.addEventListener("click", function(){
    window.scrollBy(100,0)
})
/** photo gallery scrolling */
const btnright = document.querySelector(".btnright")
const btnleft = document.querySelector(".btnleft")

// define a function to scroll the gallery by an image size
function scrollGallery(pixels){
    document.querySelector("div.gallery-container").scrollBy({
        left: pixels,
        behavior: "smooth"
    })
}

// add event to each button
btnright.addEventListener("click",function(){
    scrollGallery(500)
})
btnleft.addEventListener("click",function(){
    scrollGallery(-500)
})

// exercise
let clickCount = 0
const clickCircle = document.getElementById("clickCircle")
const resetBtn = document.getElementById("resetBtn")

clickCircle.addEventListener("click", function(){
    clickCount++
    clickCircle.textContent = clickCount
})

resetBtn.addEventListener("click", function(){
    clickCount = 0
    clickCircle.textContent = clickCount
})