import React from 'react'
import './Container1.css'
import './Container2.css'
import { CiApple } from "react-icons/ci";
import { GiBread } from "react-icons/gi";
import { GiCorn } from "react-icons/gi";
import { GiCoffeePot } from "react-icons/gi";
import { GiFrenchFries } from "react-icons/gi";
import { RiDrinksLine } from "react-icons/ri";
import { GoStarFill } from "react-icons/go";
import { GoStar } from "react-icons/go";
import almonds from '../assets/almonds.png'
import almonds2 from '../assets/almonds2.png'
import almonds3 from '../assets/almonds3.png'
import almonds4 from '../assets/almonds4.png'
import almonds5 from '../assets/almonds5.png'
const Container1 = () => {
  return (
    <div>
    <div className='g'>
        <div className="g1">
            <div className="g2">
                {/* <div className="g2-off">30%</div> */}
                <div className='g2-t1'><CiApple /></div>
                <div className='g2-t2'><strong>Fruits</strong></div>
                <div className='g2-t3'>320 Items</div>
            </div>
        </div>
        <div className="g1">
            <div className="g2">
                <div className='g2-t1'><GiBread /></div>
                <div className='g2-t2'><strong>Bakery</strong></div>
                <div className='g2-t3'>65 Items</div>
            </div>
        </div>
        <div className="g1">
            <div className="g2">
                <div className='g2-t1'><GiCorn /></div>
                <div className='g2-t2'><strong>Vegetables</strong></div>
                <div className='g2-t3'>548 Items</div>
            </div>
        </div>
        <div className="g1">
            <div className="g2">
                <div className='g2-t1'><GiCoffeePot /></div>
                <div className='g2-t2'><strong>Dairy & Milk</strong></div>
                <div className='g2-t3'>48 Items</div>
            </div>
        </div>
        <div className="g1">
            <div className="g2">
                <div className='g2-t1'><GiFrenchFries /></div>
                <div className='g2-t2'><strong>Snack & Spice</strong></div>
                <div className='g2-t3'>59 Items</div>
            </div>
        </div>
        <div className="g1">
            <div className="g2">
                <div className='g2-t1'><RiDrinksLine /></div>
                <div className='g2-t2'><strong>Juice & Drinks</strong></div>
                <div className='g2-t3'>845 Items</div>
            </div>
        </div>
    </div>
    <br />
    <br />
    <div className='filler'>
        <div className='filler-t1'><strong>Day of The <span className='deal'>Deal</span></strong></div>
        <div className='filler-t2'>Dont wait. The time will never be just right.</div>
        <div className='diller-date'></div>
    </div>
    <br />
    <div className="n-g">
        <div className="n-g1"> 
            <div className='n-g2'>
                <img src={almonds} alt="almonds image" />
            </div>
            <hr />
            <div className="n-g3">
            <div className='n-g1-t1'>Dried Fruits</div>
            <div className='n-g1-t2'>Mixed Nuts Berries Pack</div>
            <br />
            <div className='n-g1-t3'><GoStarFill /><GoStarFill /><GoStarFill /><GoStarFill /><span style={{color: "#999999" }}><GoStar /></span></div>
            <div className='n-g1-t4'><strong>$45.00</strong><span style={{ textDecoration: "line-through", color: "#999999" }}>$56.00</span></div>
    </div>
    </div>
        <div className="n-g1"> 
            <div className='n-g2'>
            <img src={almonds2} alt="almonds2 image" />
            </div>
            <hr />
            <div className="n-g3">
            <div className='n-g1-t1'>Cookies</div>
            <div className='n-g1-t2'>Multi Grain Combo Cookies</div>
            <br />
            <div className='n-g1-t3'><GoStarFill /><GoStarFill /><GoStarFill /><span style={{color: "#999999" }}><GoStar /><GoStar /></span></div>
            <div className='n-g1-t4'><strong>$25.00</strong><span style={{ textDecoration: "line-through", color: "#999999" }}>$30.00</span></div>
    </div>
        </div>
        <div className="n-g1"> 
            <div className='n-g2'>
            <img src={almonds3} alt="almonds image" />
            </div>
            <hr />
            <div className="n-g3">
            <div className='n-g1-t1'>Foods</div>
            <div className='n-g1-t2'>Fresh Mango Juice Pack</div>
            <br />
            <div className='n-g1-t3'><GoStarFill /><GoStarFill /><GoStarFill /><span style={{color: "#999999" }}><GoStar /><GoStar /><GoStar /></span></div>
            <div className='n-g1-t4'><strong>$46.00</strong><span style={{ textDecoration: "line-through", color: "#999999" }}>$65.00</span></div>
    </div>
        </div>
        <div className="n-g1"> 
            <div className='n-g2'>
            <img src={almonds4} alt="almonds image" />
            </div>
            <hr />
            <div className="n-g3">
            <div className='n-g1-t1'>Dried Fruits</div>
            <div className='n-g1-t2'>Dates Value Fresh Pouch</div>
            <br />
            <div className='n-g1-t3'><GoStarFill /><GoStarFill /><GoStarFill /><span style={{color: "#999999" }}><GoStar /><GoStar /></span></div>
            <div className='n-g1-t4'><strong>$78.00</strong><span style={{ textDecoration: "line-through", color: "#999999" }}>$85.00</span></div>
    </div>
        </div>
        <div className="n-g1"> 
            <div className='n-g2'>
            <img src={almonds5} alt="almonds image" />
            </div>
            <hr />
            <div className="n-g3">
            <div className='n-g1-t1'>Foods</div>
            <div className='n-g1-t2'>Stick Fiber Masala Magic</div>
            <br />
            <div className='n-g1-t3'><GoStarFill /><GoStarFill /><span style={{color: "#999999" }}><GoStar /><GoStar /><GoStar /></span></div>
            <div className='n-g1-t4'><strong>$45.00</strong><span style={{ textDecoration: "line-through", color: "#999999" }}>$50.00</span></div>
    </div>
        </div>
    </div><br /><br />
    </div>
  )
}

export default Container1