import React from 'react';
import {FaAlignRight,FaFacebookF,FaLinkedinIn,FaYoutubeSquare,FaPhone,FaCaretRight} from 'react-icons/fa';
import logo from '../images/logo.png';
import {Link} from 'react-router-dom';



export default function NavBar() {
    return (
        <div className="navbar">
            <div className="row">
                <div className="logoBox">
                    <img src={logo} alt="logo-nmc" />
                    <p>Transformtion <br/> Marbre & Granite</p>
                </div>
                <div className="nav_right">
                    <div className="nav_infos">
                        <div className="phone"> <FaPhone/> + 213 560-044-102</div>
                         <div className="social_links">
                             <span><FaFacebookF/></span>
                             <span><FaLinkedinIn/></span>
                             <span><FaYoutubeSquare/></span>
                         </div>
                    </div>
                    <nav>
                    <ul>
                        <Link to="/"><li><FaCaretRight/>Home</li></Link>
                        <Link to="/Products/"><li><FaCaretRight/>Products</li></Link>
                        <Link to="/Exhibition/"><li><FaCaretRight/>Exhibition</li></Link>
                        <Link to="/New/"><li><FaCaretRight/>New</li></Link>
                        <Link to="/Blog/"><li><FaCaretRight/>Blog</li></Link>
                        <Link to="/Contact/"><li><FaCaretRight/>Contact</li></Link>
                    </ul>
                </nav>
               </div>
                </div>
            <div className="hamburger_menu">
                    <span><FaAlignRight/></span>
                </div>
        </div>
    )
}
