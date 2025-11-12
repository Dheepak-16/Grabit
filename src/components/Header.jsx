import React from 'react'
import "./Header.css"
import logo from '../assets/logo.png'
import { BiSolidOffer } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa";
import { GoSearch } from "react-icons/go";

const Header = () => {
    return (
        <div>
            <div className='cont1'>
                <div className='cont1-b1'>
                    <img src={logo} alt="Grabit image" />
                </div>
                <div className="cont1-b2">
                    <div className="search-container">
                        <input className='search-box' type="text" placeholder='Search Products...' />
                        <GoSearch className="search-icon" />
                    </div>
                </div>
                <div className="cont1-b3">
                    <div className='sub-cont1-b3'>
                        <div className="sub-b3">
                            <i class="bi bi-person"></i>
                        </div>
                        <div className="sub-sub-b3">
                            <span className='t1'>Account</span><br />
                            <span className='t2'>LOGIN</span>
                        </div>
                    </div>
                    <div className='sub-cont1-b3'>
                        <div className="sub-b3">
                            <i class="bi bi-heart"></i>
                        </div>
                        <div className="sub-sub-b3">
                            <span className='t1'>Wishlist</span><br />
                            <span className='t2'>3-ITEMS</span>
                        </div>
                    </div>
                    <div className='sub-cont1-b3'>
                        <div className="sub-b3">
                            <i class="bi bi-bag"></i>
                        </div>
                        <div className="sub-sub-b3">
                            <span className='t1'>Cart</span><br />
                            <span className='t2'>3-ITEMS</span>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className='cont2'>
                <div className="cont2-b1">
                    <div className='cont2-b1-text'>
                        <i class="bi bi-ui-checks-grid"></i>
                    </div>
                    <div className='cont2-b1-text'> All Categories</div>
                    <a className='down' href=""><FaChevronDown /></a>
                </div>
                <div className="cont2-b2">
                    <nav>
                        <div className="hov">
                            <li><a href="" className='home-a'>Home</a></li>
                            <div className="drop" style={{marginTop:'30px'}}>
                                <div className="home-drop">
                                    <li><a href="">Grocery</a></li>
                                    <li><a href="">Fashion</a></li>
                                    <li><a href="">Fashion 2</a></li>
                                </div>
                            </div>
                        </div>
                        <div className="hov">
                            <li><a href="" className=' home-a'>Categories</a></li>
                            <div className="drop" style={{marginTop:'10px'}}>
                                <div className="drop1-grid">
                                    <div className="drop1-b1">
                                        <li>Classic</li><hr />
                                        <li>Left Sidebar 3 Column</li>
                                        <li>Left Sidebar 4 Column</li>
                                        <li>Right Sidebar 3 Column</li>
                                        <li>Right Sidebar 4 Column</li>
                                        <li>Full Width 4 Column</li>
                                    </div>
                                    <div className="drop1-b1">
                                        <li>Banner</li><hr />
                                        <li>Left Sidebar 3 Column</li>
                                        <li>Left Sidebar 4 Column</li>
                                        <li>Right Sidebar 3 Column</li>
                                        <li>Right Sidebar 4 Column</li>
                                        <li>Full Width 4 Column</li>
                                    </div>
                                    <div className="drop1-b1">
                                        <li>Columns</li><hr />
                                        <li>3 Column Full Width</li>
                                        <li>4 Column Full Width</li>
                                        <li>5 Column Full Width</li>
                                        <li>6 Column Full Width</li>
                                        <li>Banner 3 Column</li>
                                    </div>
                                    <div className="drop1-b1">
                                        <li>List</li><hr />
                                        <li>Shop Left Sidebar</li>
                                        <li>Shop Right Sidebar</li>
                                        <li>Banner Left Sidebar</li>
                                        <li>Banner Right Sidebar</li>
                                        <li>Full Width 2 Column</li>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <li><a href="">Products</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Pages</a></li>
                        <li className='off'><BiSolidOffer /><a href="">Offers</a></li>
                    </nav>
                </div>
                <div className="cont2-b3">
                    <div className='cont2-b3-text'>
                        <i class="bi bi-geo-alt"></i>
                    </div>
                    <div className='cont2-b3-text'> New York</div>
                    <a className='down' href=""><FaChevronDown /></a>
                </div>
            </div>
            <hr />
            <br />
        </div>
    )
}

export default Header