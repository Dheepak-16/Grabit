import React from 'react'
import './Container6.css'
import logo from '../assets/logo.png'
import play1 from '../assets/play1.png'
import play2 from '../assets/play2.png'
import { GrLocation } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const Container6 = () => {
    return (
        <div>
            <div className="cont-about">
                <div className="cont-about1-box1">
                    <div className='box1-cont1-img'>
                        <img src={logo} alt="Grabit image" />
                    </div>
                    <div className="cont-about1-box2">
                        <span>Grabit is the biggest market of grocery products. Get your daily needs from our <br />store.</span>
                    </div>
                    <div className="cont-about1-box3-box">
                        <div className="cont-about1-box3">
                            <img src={play1} alt="" />
                        </div>
                        <div className="cont-about1-box3">
                            <img src={play2} alt="" />
                        </div>
                    </div>
                </div>
                <div className="cont-about2">
                    <div className="cont-about2-b1">
                        <span>Category</span>
                        <hr />
                            <p>Dried Fruit</p>
                            <p>Cookies</p>
                            <p>Foods</p>
                            <p>Fresh Fruit</p>
                            <p>Tuber Root</p>
                            <p>Vegetables</p>
                    </div>
                    <div className="cont-about2-b1">
                        <span>Company</span>
                        <hr />
                            <p>About us</p>
                            <p>Delivery</p>
                            <p>Legal Notice</p>
                            <p>Terms & conditions</p>
                            <p>Secure payment</p>
                            <p>Contact us</p>
                    </div>
                    <div className="cont-about2-b1">
                        <span>Account</span>
                        <hr />
                            <p>Sign In</p>
                            <p>View Cart</p>
                            <p>Return Policy</p>
                            <p>Become a Vendor</p>
                            <p>TAffiliate Program</p>
                            <p>Payments</p>
                    </div>
                    <div className="cont-about2-b2">
                        <span>Contact</span>
                        <hr />
                        <div className='cont-about2-b2-t1'><GrLocation />
                        <div className='loc'>2548 Broaddus Maple Court, Madisonville KY 4783, USA.</div>
                        </div>
                        <div className='cont-about2-b2-t1'><FaWhatsapp />
                        <div className='con-num'>+00 9876543210</div>
                        </div>
                        <div className='cont-about2-b2-t1'><CiMail />
                        <div className='em'>example@email.com</div>
                        </div>
                        <div className='c-icons'><FaFacebookSquare /> <FaSquareTwitter /> <FaLinkedin /> <FaInstagramSquare />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Container6