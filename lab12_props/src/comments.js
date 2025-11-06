import React from "react";
import avataruser1 from './images/avatar_batman.jpg'
import './App.css'

const User = function(props){
    return(
        <>
            <section className="card">
                <a><img src={props.img}></img></a>
                <div className="content">
                    <a className="author">Batman</a>
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