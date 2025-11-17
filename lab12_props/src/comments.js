import React from "react";
import avataruser1 from './images/avatar_batman.jpg'
import './App.css'

const User = function(props){
    return(
        <>
            <section className="card">
                <a><img src={props.image}></img></a>
                <div className="content">
                </div>
                <div>
                    <p>Posted on <span className="date">{props.date}</span></p>
                </div>
                <div className="comment">
                    <p><i>{props.msg}</i></p>
                </div>
            </section>
        </>
    )
}

export default User