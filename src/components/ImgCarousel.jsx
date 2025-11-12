import { Carousel } from 'react-bootstrap';
import "./ImgCarousel.css";
import cimg from '../assets/1.png';
import cimg1 from '../assets/2.png';

const ImgCarousel = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img src={cimg1} alt="Second slide" />
          <Carousel.Caption>
            <div className="carousel-cont">
              <div className="carousel-cont-content d-flex align-item-start">
                <div className="carousel-cont-t1">Starting at <strong>$29.99</strong></div>
                <div className="carousel-cont-t2">Explore fresh &<br />juicy fruits</div>  
                <button className='carousel-cont-t3' id='shop'>Shop Now</button>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={cimg} alt="Third slide" />
          <Carousel.Caption>
            <div className="carousel-cont">
              <div className="carousel-cont-content d-flex align-item-start">
                <div className="carousel-cont-t1">Starting at <strong>$20.00</strong></div>
                <div className="carousel-cont-t2">Organic & healthy<br />vegetables</div>  
                <button className='carousel-cont-t3' id ='shop'>Shop Now</button>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br />
    </div>
  );
};

export default ImgCarousel;
