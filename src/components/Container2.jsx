import React from 'react'
import "./Container2.css"
import { GoStarFill } from "react-icons/go";
import { GoStar } from "react-icons/go";
import almonds from '../assets/almonds.png'
import almonds2 from '../assets/almonds2.png'
import almonds3 from '../assets/almonds3.png'
import almonds4 from '../assets/almonds4.png'
import almonds5 from '../assets/almonds5.png'
import almonds6 from '../assets/almonds6.png'
import almonds7 from '../assets/almonds7.png'
import almonds8 from '../assets/almonds8.png'
import almonds9 from '../assets/almonds9.png'
import almonds10 from '../assets/almonds10.png'

const Container2 = () => {
  return (
    <div>
      <div className="b-img-b">
        <div className='b-img-b-t'>
          <div className="b-img-b-text">
            <div className='filler1-t1'>
              <strong>
                <div style={{ textAlign: 'end' }}> Fresh Fruits</div>
                <div>Healthy Products</div>
              </strong>
            </div>
            <div className='filler1-t2'><span className='filler1-t2-sub1'><strong>30% off Sale</strong><span className='filler1-t2-sub2'>Hurry up!!!</span></span></div><br />
            <div className="b-img-b-text-but">
            <button className='filler1-but'>shop now</button>
            </div>
          </div>
        </div>
      </div><br /><br />
      <div className="fillers d-flex">
        <div className='filler2'>
          <div className='filler2-t1'><strong><span className='deal2'>New </span>Arrivals</strong></div>
          <div className='filler2-t2'>Shop online for new arrivals and get free shipping!</div>
          <div className='diller2-date'></div>
        </div>
        <div className='con-r'>
          <ul>
            <li>ALL</li>
            <li>SNACK & SPICES</li>
            <li>FRUITS</li>
            <li>VEGETABLES</li>
          </ul>
        </div>
      </div><br />
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
            <div className='n-g1-t3'><GoStarFill /><GoStarFill /><GoStarFill /><span style={{color: "#999999" }}><GoStar /><GoStar /></span></div>
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
    </div><br />
    <div className="n-g">
        <div className="n-g1"> 
            <div className='n-g2'>
                <img src={almonds6} alt="almonds image" />
            </div>
            <hr />
            <div className="n-g3">
            <div className='n-g1-t1'>Fresh Fruit</div>
            <div className='n-g1-t2'>Natural Hub Cherry Karonda</div>
            <br />
            <div className='n-g1-t3'><GoStarFill /><GoStarFill /><GoStarFill /><GoStarFill /><GoStarFill /></div>
            <div className='n-g1-t4'><strong>$49.00</strong><span style={{ textDecoration: "line-through", color: "#999999" }}>$65.00</span></div>
    </div>
    </div>
        <div className="n-g1"> 
            <div className='n-g2'>
            <img src={almonds7} alt="almonds2 image" />
            </div>
            <hr />
            <div className="n-g3">
            <div className='n-g1-t1'>Foods</div>
            <div className='n-g1-t2'>Fresh Mango Juice Pack</div>
            <br />
            <div className='n-g1-t3'><GoStarFill /><GoStarFill /><GoStarFill /><GoStarFill /><span style={{color: "#999999" }}><GoStar /></span></div>
            <div className='n-g1-t4'><strong>$20.00</strong><span style={{ textDecoration: "line-through", color: "#999999" }}>$21.00</span></div>
    </div>
        </div>
        <div className="n-g1"> 
            <div className='n-g2'>
            <img src={almonds8} alt="almonds image" />
            </div>
            <hr />
            <div className="n-g3">
            <div className='n-g1-t1'>Tuber Root</div>
            <div className='n-g1-t2'>Fresh Organic Ginger Pack</div>
            <br />
            <div className='n-g1-t3'><GoStarFill /><GoStarFill /><span style={{color: "#999999" }}><GoStar /><GoStar /><GoStar /></span></div>
            <div className='n-g1-t4'><strong>$2.00</strong><span style={{ textDecoration: "line-through", color: "#999999" }}>$3.00</span></div>
    </div>
        </div>
        <div className="n-g1"> 
            <div className='n-g2'>
            <img src={almonds9} alt="almonds image" />
            </div>
            <hr />
            <div className="n-g3">
            <div className='n-g1-t1'>Foods</div>
            <div className='n-g1-t2'>Natural Hub Cherry Karonda</div>
            <br />
            <div className='n-g1-t3'><GoStarFill /><GoStarFill /><GoStarFill /><GoStarFill /><span style={{color: "#999999" }}><GoStar /></span></div>
            <div className='n-g1-t4'><strong>$49.00</strong><span style={{ textDecoration: "line-through", color: "#999999" }}>$65.00</span></div>
    </div>
        </div>
        <div className="n-g1"> 
            <div className='n-g2'>
            <img src={almonds10} alt="almonds image" />
            </div>
            <hr />
            <div className="n-g3">
            <div className='n-g1-t1'>Fresh Fruit</div>
            <div className='n-g1-t2'>Fresh Mango Juice Pack</div>
            <br />
            <div className='n-g1-t3'><GoStarFill /><GoStarFill /><GoStarFill /><span style={{color: "#999999" }}><GoStar /><GoStar /></span></div>
            <div className='n-g1-t4'><strong>$20.00</strong><span style={{ textDecoration: "line-through", color: "#999999" }}>$21.00</span></div>
    </div>
        </div>
    </div><br /><br />
    </div>
  )
}

export default Container2