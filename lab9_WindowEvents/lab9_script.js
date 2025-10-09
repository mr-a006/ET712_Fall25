let displaypixels = document.querySelector(".displaypixels")
// read the pixels from the y axis
window.addEventListener("scroll", function(){
    let y_pixels = this.window.scrollY
    displaypixels.innerHTML = `${y_pixels} px away from the top`
})

// to the top
const toTop = document.querySelector(".toTop")
window.addEventListener("scroll", function(){
    let y_pixels = window.scrollY
    if (y_pixels>600){
        toTop.style.display = "block"
    }
    else{
        toTop.style.display = "none"
    }
})

// resize event: change background color if the window is resized
window.addEventListener("resize", function(){
    displaypixels.style.backgroundColor = "crimson"
})

// load event: when the page finishes loading, open an alert dialog
window.addEventListener("load", function(){
    this.alert("Page fully loaded!")
})

// MODAL WINDOW
const openmodal1 = document.querySelector("#openmodal1")
const modalOverlay = document.querySelector("#modalOverlay")
const closeBtn = document.querySelector("#closeBtn")

openmodal1.addEventListener("click", function(){
    modalOverlay.style.display = "block"
})

closeBtn.addEventListener("click", function(){
    modalOverlay.style.display = "none"
})