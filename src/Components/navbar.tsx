import React from "react";
import SmoothScroll from "./smoothScroll";

function Navbar(){
    return(    
        <nav className="navbar">
            {/* <ul>
                <li><a href="#About">About</a></li>
                <li><a href="#project">Project</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#Resume">Resume</a></li>
            </ul> */}
        <li><SmoothScroll targetId="About">About</SmoothScroll></li>
        <li><SmoothScroll targetId="project">Project</SmoothScroll></li>
        <li><SmoothScroll targetId="contact">Contact</SmoothScroll></li>
        <li><SmoothScroll targetId="resume">Resume</SmoothScroll></li>
        </nav>
    )
}

export default Navbar;