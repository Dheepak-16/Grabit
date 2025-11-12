import React from 'react'
import './Container4.css';
import nuts1 from '../assets/nuts1.png'
import nuts2 from '../assets/nuts2.png'
import nuts3 from '../assets/nuts3.png'
import nuts4 from '../assets/nuts4.png'
import nuts5 from '../assets/nuts5.png'
import nuts6 from '../assets/nuts6.png'
import nuts7 from '../assets/nuts7.png'
import nuts8 from '../assets/nuts8.png'
import nuts9 from '../assets/nuts9.png'
import { PiLessThan } from "react-icons/pi";
import { PiGreaterThan } from "react-icons/pi";
const Container4 = () => {
    return (
        <div>
            <div className="c-container">
                <div className="c-container-cont">
                    <div className="c-container-cont-img">
                        <div className="c-container-cont-img-content">
                            <div className='c-container-cont-img-t1'>
                                <div className="img-t1-subt1">Our Top Most <br />Products Check It <br />Now</div>
                            </div>
                            <button className='img-ti-subt1-but'>Shop Now</button>
                        </div>
                    </div>
                </div>
                <div className="c-container-cont1">
                    <div className="c-container-cont1-sub">
                        <div className="c-container-cont1-sub-sub1">
                            <div className='hed1'>Trending <span style={{color:'#5CAF90'}}>Items</span></div>
                            <span><PiLessThan /><PiGreaterThan /></span>
                        </div>
                        <div className="c-container-cont1-sub-sub1">
                            <div className='hed1'>Top <span style={{color:'#5CAF90'}}>Rated</span></div>
                            <span><PiLessThan /><PiGreaterThan /></span>
                        </div>
                        <div className='c-container-cont1-sub-sub1'>
                            <div className='hed1'>Top <span style={{color:'#5CAF90'}}>Selling</span></div>
                            <span><PiLessThan /><PiGreaterThan /></span>
                        </div>
                    </div>
                    <div className="c-container-cont2">
                        <div className="c-container-cont2-sub-sub1">
                            <div className="c-container-cont2-sub-sub1-sub1">
                                <img src={nuts1} alt="" />
                            </div>
                            <div className="c-container-cont2-sub-sub1-sub2">
                                <span className='s1'>Healthy Nutmix, 200g pa...</span>
                                <span className='s2'>DriedFruit</span>
                                <span className='s3'><strong>$42.00</strong> <span style={{ textDecoration: "line-through", color: "#999999" }}>$45.00</span></span>
                                </div>                                                        
                           </div>
                        <div className="c-container-cont2-sub-sub1">
                            <div className="c-container-cont2-sub-sub1-sub1">
                                <img src={nuts2} alt="" />
                            </div>
                            <div className="c-container-cont2-sub-sub1-sub2">
                                <span className='s1'>Ginger - Organic</span>
                                <span className='s2'>Vegetables</span>
                                <span className='s3'><strong>$62.00</strong> <span style={{ textDecoration: "line-through", color: "#999999" }}>$65.00</span></span>
                            </div>
                        </div>
                        <div className="c-container-cont2-sub-sub1">
                            <div className="c-container-cont2-sub-sub1-sub1">
                                <img src={nuts3} alt="" />
                            </div>
                            <div className="c-container-cont2-sub-sub1-sub2">
                                <span className='s1'>Lemon - Seedless</span>
                                <span className='s2'>Vegetables</span>
                                <span className='s3'><strong>$42.00</strong> <span style={{ textDecoration: "line-through", color: "#999999" }}>$45.00</span></span>
                            </div>
                        </div>
                        <div className="c-container-cont2-sub-sub1">
                            <div className="c-container-cont2-sub-sub1-sub1">
                                <img src={nuts4} alt="" />
                            </div>
                            <div className="c-container-cont2-sub-sub1-sub2">
                                <span className='s1'>Organic Fresh Tomato</span>
                                <span className='s2'>Vegetables</span>
                                <span className='s3'><strong>$25.00</strong> <span style={{ textDecoration: "line-through", color: "#999999" }}>$30.00</span></span>
                            </div>
                        </div>
                        <div className="c-container-cont2-sub-sub1">
                            <div className="c-container-cont2-sub-sub1-sub1">
                                <img src={nuts5} alt="" />
                            </div>
                            <div className="c-container-cont2-sub-sub1-sub2">
                                <span className='s1'>Dates Value Pouch Date...</span>
                                <span className='s2'>Driedfruit</span>
                                <span className='s3'><strong>$56.00</strong> <span style={{ textDecoration: "line-through", color: "#999999" }}>$78.00</span></span>
                            </div>
                        </div>
                        <div className="c-container-cont2-sub-sub1">
                            <div className="c-container-cont2-sub-sub1-sub1">
                                <img src={nuts6} alt="" />
                            </div>
                            <div className="c-container-cont2-sub-sub1-sub2">
                                <span className='s1'>Mango - Kesar</span>
                                <span className='s2'>Fruits</span>
                                <span className='s3'><strong>$62.00</strong> <span style={{ textDecoration: "line-through", color: "#999999" }}>$65.00</span></span>
                            </div>
                        </div>
                        <div className="c-container-cont2-sub-sub1">
                            <div className="c-container-cont2-sub-sub1-sub1">
                                <img src={nuts7} alt="" />
                            </div>
                            <div className="c-container-cont2-sub-sub1-sub2">
                                <span className='s1'>Coffee with Chocolate C...</span>
                                <span className='s2'>Coffee</span>
                                <span className='s3'><strong>$62.00</strong> <span style={{ textDecoration: "line-through", color: "#999999" }}>$65.00</span></span>
                            </div>
                        </div>
                        <div className="c-container-cont2-sub-sub1">
                            <div className="c-container-cont2-sub-sub1-sub1">
                                <img src={nuts8} alt="" />
                            </div>
                            <div className="c-container-cont2-sub-sub1-sub2">
                                <span className='s1'>Blue Berry</span>
                                <span className='s2'>Fruits</span>
                                <span className='s3'><strong>$25.00</strong> <span style={{ textDecoration: "line-through", color: "#999999" }}>$30.00</span></span>
                            </div>
                        </div>
                        <div className="c-container-cont2-sub-sub1">
                            <div className="c-container-cont2-sub-sub1-sub1">
                                <img src={nuts9} alt="" />
                            </div>
                            <div className="c-container-cont2-sub-sub1-sub2">
                                <span className='s1'>Mixed Nuts & Almonds D...</span>
                                <span className='s2'>Driedfruit</span>
                                <span className='s3'><strong>$10.00</strong> <span style={{ textDecoration: "line-through", color: "#999999" }}>$11.00</span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div><br /><br />
        </div>
    )
}

export default Container4