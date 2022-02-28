import React from 'react';
import {LoremIpsum} from 'react-lorem-ipsum';
import {FaCopyright,FaFacebookF,FaLinkedinIn,FaYoutubeSquare,FaMapMarkedAlt,FaPhoneAlt,FaEnvelope,FaRegClock,FaCaretRight} from 'react-icons/fa';
import {Link} from 'react-router-dom';


export default function Footer() {
    return (
        <div className="footer">
            <div className="inner">
                <div className="up-footer">
                    <div className="aboutUs">
                        <h5><span>About</span> Us</h5>
                        <p><LoremIpsum p={1} avgWordsPerSentence={2}/></p>
                        <div className="social_links">
                            <Link><span><FaFacebookF/></span></Link>
                             <Link><span><FaLinkedinIn/></span></Link>
                             <Link><span><FaYoutubeSquare/></span></Link>
                             
                         </div>
                    </div>
                    <div className="getInTouch">
                    <h5><span>Get in </span>Touch</h5>
                    <ul>
                        <li><span><FaMapMarkedAlt/></span><p>01 route d'alger,khezrouna,Blida,Algeria.</p></li>
                        <li><span><FaPhoneAlt/></span><p>00 213 560 044 102</p> </li>
                        <li><span><FaEnvelope/></span><p>contact@newmarbrecontinental.com</p> </li>
                        <li><span><FaRegClock/></span><p>01 route d'alger,khezrouna,Blida,Algeria.</p> </li>
                    </ul>
                    </div>
                    <div className="usefulLinks">
                        <h5><span>Useful</span> links</h5>
                        <ul>
                            <Link to="/"><li><FaCaretRight/><p> Why marble is the better choice</p></li></Link>
                            <Link to="/"><li><FaCaretRight/><p> Tip and tricks</p></li></Link>
                            <Link to="/"><li><FaCaretRight/><p> Things you should avoid</p></li></Link>
                            <Link to="/"><li><FaCaretRight/><p> Algerian Marble</p></li></Link>
                            <Link to="/"><li><FaCaretRight/><p> Difference between marble and granite</p></li></Link>
                        </ul>
                    </div>
                    <div className="latest">
                        <h5><span>Latest</span></h5>
                        <div className="grid-spot">
                            <Link to="/" className="spot-1"></Link>
                            <Link to="/" className="spot-2"></Link>
                            <Link to="/" className="spot-3"></Link>
                            <Link to="/" className="spot-4"></Link>
                            <Link to="/" className="spot-5"></Link>
                            <Link to="/" className="spot-6"></Link>
                        </div>
                    </div>
                </div>
                <div className="middle-footer">
                    <p><LoremIpsum p={1} avgSentencesPerParagraph={1}/></p>
                    <div className="newsletter">
                        <input 
                        name="username"
                        value="Your name"
                        />
                        <input
                        name="email"
                        value="Your email"
                        />
                        <button className="btn btn-danger" type="submit">SUBSCRIBE</button>
                    </div>
                </div>
            </div>
            <div className="bottom-footer">
                    <div className="rights">
                        <p>
                        <span><FaCopyright/>New Marbre Continental.All rights reserved.</span>
                        
                        </p>
                    </div>
                    <div className="policy">
                        <ul>
                            <Link to="/"><li>About</li></Link>
                            <Link to="/"><li>Terms</li></Link>
                            <Link to="/"><li>Privacy</li></Link>
                            <Link to="/"><li>Contact</li></Link>
                        </ul>
                    </div>
                </div>
        </div>
    )
}
