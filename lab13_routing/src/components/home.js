import React from "react";
import '../App.css'
import aboutimg from '../images/about.jpg'
import contactimg from '../images/contact.jpg'
import { Link } from "react-router-dom";

const Home = function(){
    return(
        <>
            <header className="header">
                <h1 className="headertitle">Welcome to React Routing</h1>
            </header>
            <main className="maincontainer">
                <div className="cardimg">
                    <Link>
                        <img src={aboutimg}/>
                    </Link>

                </div>
                <div className="cardimg">
                    <img src={contactimg}/>
                </div>
            </main>
        </>
    )
}

export default Home
