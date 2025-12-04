console.log("Aqeel Hussain")
console.log('------ Example 1: console -----')
console.warn("Warning! check the last line before proceed!")
console.error("ERROR, port is not available!")
console.trace("TRACE LOCATION")

setTimeout(()=>{
    console.warn("Warning! input string for the next line")
}, 3000)

console.log('------ Example 2: creating a simple module file -----')
// const name = require("./mod.js")
import helper from "./mod.js"
console.log(helper("Peter"))