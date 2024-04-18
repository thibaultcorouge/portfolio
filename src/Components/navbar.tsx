import React, { useState } from 'react';
import SmoothScroll from "./smoothScroll";
import {IoClose, IoMenu} from "react-icons/io5";

const Navbar: React.FC = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const closeMenuOnMobile = () => {
        if (window.innerWidth <= 768) {
            setShowMenu(false);
        }
    }

    return(    
        <nav className="nav">
            <div className="navbar">
                <div id="nav-menu" className={`nav-menu ${showMenu ? "show-menu" : ""}`}>
                    <ul className="navbar-links">
                        <li onClick={closeMenuOnMobile}><SmoothScroll targetId="root" >Home</SmoothScroll></li>
                        <li onClick={closeMenuOnMobile}><SmoothScroll targetId="About">About</SmoothScroll></li>
                        <li onClick={closeMenuOnMobile}><SmoothScroll targetId="Project">Project</SmoothScroll></li>
                        <li onClick={closeMenuOnMobile}><SmoothScroll targetId="contact">Contact</SmoothScroll></li>
                        <li onClick={closeMenuOnMobile}><SmoothScroll targetId="resume">Resume</SmoothScroll></li>
                    </ul>
                    <div className="nav-close" id="nav-close" onClick={toggleMenu}>
                       <IoClose />
                    </div>
                </div>
                <div className="nav-toggle" id="nav-toggle" onClick={toggleMenu}>
                    <IoMenu />
                </div>
            </div>
        </nav>
    )

}
export default Navbar;