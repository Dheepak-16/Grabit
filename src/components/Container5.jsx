import React from 'react'
import './Container5.css'
import cherry1 from '../assets/cherry1.png'
import cherry2 from '../assets/cherry2.png'
import cherry3 from '../assets/cherry3.png'
import cherry4 from '../assets/cherry4.png'
import cherry5 from '../assets/cherry5.png'
const Container5 = () => {
  return (
    <div>
        <div className="cont-blog">
            <div className="cont-blog-text">
            <div className="blog-t1">Latest <span style={{color:'#5CAF90'}}>Blog</span></div>
            <div className="blog-t2">We tackle intresting topics every day in 2023.</div>
            </div>
            <div className="all_blogs">
            <div className="blog-t3">All Blogs</div>
            </div>
        </div><br />
        <div className="n-cont">
            <div className="n-cont-content">
                <div className="n-cont-content-img">
                    <img src={cherry1} alt="" />
                </div>
                <div className="n-cont-content-text">
                    <div className='n-cont-content-text1'>June 30,2022 - <span className='sp1'>Organic</span></div>
                    <div className='n-cont-content-text2'>Marketing Guide: 5 Steps <br />to Success to way.</div>
                    <div className='n-cont-content-text3'>Read More</div>
                </div>
            </div>
            <div className="n-cont-content">
                <div className="n-cont-content-img">
                    <img src={cherry2} alt="" />
                </div>
                <div className="n-cont-content-text">
                    <div className='n-cont-content-text1'>April 02,2022 - <span className='sp1'>Fruits</span></div>
                    <div className='n-cont-content-text2'>Best way to solve business deal issue in market.</div>
                    <div className='n-cont-content-text3'>Read More</div>
                </div>
            </div>
            <div className="n-cont-content">
                <div className="n-cont-content-img">
                    <img src={cherry3} alt="" />
                </div>
                <div className="n-cont-content-text">
                    <div className='n-cont-content-text1'>March 09,2022 - <span className='sp1'>Vegetables</span></div>
                    <div className='n-cont-content-text2'>31 grocery customer <br />service stats know in 2019.</div>
                    <div className='n-cont-content-text3'>Read More</div>
                </div>
            </div>
            <div className="n-cont-content">
                <div className="n-cont-content-img">
                    <img src={cherry4} alt="" />
                </div>
                <div className="n-cont-content-text">
                    <div className='n-cont-content-text1'>January 25,2022 - <span className='sp1'>Fastfood</span></div>
                    <div className='n-cont-content-text2'>Business idea to grow <br />your business traffic.</div>
                    <div className='n-cont-content-text3'>Read More</div>
                </div>
            </div>
            <div className="n-cont-content">
                <div className="n-cont-content-img">
                    <img src={cherry5} alt="" />
                </div>
                <div className="n-cont-content-text">
                    <div className='n-cont-content-text1'>December 10,2021 - <span className='sp1'>Fruits</span></div>
                    <div className='n-cont-content-text2'>Marketing Guide: 5 Steps way to success.</div>
                    <div className='n-cont-content-text3'>Read More</div>
                </div>
            </div>
        </div><br /><hr /><br /><br />
    </div>
  )
}

export default Container5