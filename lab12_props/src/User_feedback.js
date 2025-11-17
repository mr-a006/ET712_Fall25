import React from "react";
import './App.css'
import Modalwindow from './modalwindow'

const User_feedback = function(props){
        // open modal window
        const openmodalwindow = ()=>{
            document.querySelector(".modalusername").textContent = props.username
            const modalwindow = document.querySelector(".modalWindow")
            modalwindow.style.display = "block"
        }

    return(
        <>
        <div className="feedbackcontainer">
            <section className="feedbackcard">
                <div className="content">{props.username}</div>
                <div className="description">{props.children}</div>
                <div className="cardfooter">
                    <p className="addicon" onClick={openmodalwindow}><span>&#10011;</span>Add Feedback</p>
                </div>

            </section>
        </div>

        {/** modal window */}
            <Modalwindow/>
        </>
    )
}

export default User_feedback