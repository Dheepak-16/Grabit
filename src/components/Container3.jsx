import React from 'react'
import "./Container3.css"
import { Col, Container, Row } from 'react-bootstrap'
import { LiaTruckMovingSolid } from "react-icons/lia";
import { FaHandHoldingDroplet } from "react-icons/fa6";
import { LuBadgePercent } from "react-icons/lu";
import { FaDonate } from "react-icons/fa";
const Container3 = () => {
  return (
    <div>
      <Container fluid="xs">
        <Row>
          {/* <div className="cont-c"> */}
          <Col lg={6}>
            <div className="cont-c-img1">
              <div className="cont-c-img-t-c">
                {/* <div className='cont-c-img1-off-c'>
                <div className="cont-c-img1-off"></div>
                </div> */}
              <div className="cont-c-img1-t">
                <div className='cont-c-img-t-t1'>Tasty Snack </div>
                <div>& Fastfood</div>
              </div>
              <div className="cont-c-img1-t2">
                <div>The Flavor of</div>
                <div>Something Special</div>
              </div>
              <button>Shop Now</button>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="cont-c-img2">
              <div className="cont-c-img-t-c">
              <div className="cont-c-img1-t">
                <div className='cont-c-img-t-t1'>Fresh Fruits</div>
                <div>& Veggies</div>
              </div>
              <div className="cont-c-img1-t2">
                <div>A Healthy Meal For</div>
                <div>Every One</div>
              </div>
              <button>Shop Now</button>
              </div>
            </div>
          </Col>
          {/* </div> */}
        </Row>
      </Container><br /><br />
      <div className="cont-cont">
        <div className="cont-cont-c1">
          <div className='cont-cont-c1-ic'><LiaTruckMovingSolid /></div>
          <div className='cont-cont-c1-t1'>Free Shipping</div>
          <div className='cont-cont-c1-t2'>Free shipping on all US order or <br />order above $200</div>
        </div>
        <div className="cont-cont-c1">
          <div className='cont-cont-c1-ic'><FaHandHoldingDroplet /></div>
          <div className='cont-cont-c1-t1'>Free Shipping</div>
          <div className='cont-cont-c1-t2'>Free shipping on all US order or <br />order above $200</div>
        </div>
        <div className="cont-cont-c1">
          <div className='cont-cont-c1-ic'><LuBadgePercent /></div>
          <div className='cont-cont-c1-t1'>Free Shipping</div>
          <div className='cont-cont-c1-t2'>Free shipping on all US order or <br />order above $200</div>
        </div>
        <div className="cont-cont-c1">
          <div className='cont-cont-c1-ic'><FaDonate /></div>
          <div className='cont-cont-c1-t1'>Free Shipping</div>
          <div className='cont-cont-c1-t2'>Free shipping on all US order or <br />order above $200</div>
        </div>
      </div><br /><br />
    </div>
  )
}

export default Container3
