import React from "react"
import "./App.css"

const Modalwindow = function(props){
    // function to close the modal window
    const closemodalwindow = ()=>{
        const modalwindow = document.querySelector(".modalWindow")
        modalwindow.style.display = "none"
    }

    // function to collect comment
    const collectcomment = ()=>{
    let commentarea = document.querySelector(".commentarea")
    const commentlist = document.querySelector(".commentlist")
    const modalusername = document.querySelector(".modalusername").textContent
    const postedate = new Date().toLocaleDateString()
    const modalwindow = document.querySelector(".modalWindow")

    /** append comment from the modal window to the comment list */
    commentlist.innerHTML += `<li><em><b>${modalusername}</b></em> --- ${commentarea.value} --- <span style="font-size:0.8rem; color:gray">Posted on ${postedate}</span></li>`
    commentarea.value = ""
    modalwindow.style.display = "none"
    }

return(
    <>
        {/* modal window */}
        <section className="modalWindow">
            <div className="modalcontent">
            <header className="modalheader">
                <p>Add Feedback to <b className="modalusername"></b></p>
                <p className="closemodal" onClick={closemodalwindow}>&#x58;</p>
            </header>

            <main className="modalbody">
                <input className="commentarea" type="text" placeholder="Type your comments..."/>
                <button className="btnpostfeedback" onClick={collectcomment}>Post Feedback</button>
            </main>
            </div>
        </section>
    </>

)
}
export default Modalwindow