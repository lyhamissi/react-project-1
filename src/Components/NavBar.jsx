import React from 'react'
import '../styles/navbar.css'
import { Link } from 'react-router-dom'
import { GoPerson, GoHeart, GoMail } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
const NavBar = () => {
    return (
        <div>
            <div className="above">
                <h1>Botiga</h1>
                <select name="" id="categories">
                    <option value="">All Categories</option>
                    <option value="">Uncategorized</option>
                    <option value="">Body Lotion</option>
                    <option value="">Electronics</option>
                    <option value="">General</option>
                    <option value="">Shoes</option>
                    <option value="">Watch</option>
                    <option value="">Woman clothes</option>
                    <option value="">Fashion </option>
                    <option value="">Sports</option>
                    <option value="">Computer Gadgets</option>
                </select>
                <div className="search-box">
                    <input type="text" placeholder="Search products..." className="input" />
                    <FiSearch className="search-icon" />
                </div>
                <div className="icons">
                    <div className="icon-wrapper">
                        <GoPerson className="icon" />
                    </div>
                    <div className="icon-wrapper">
                        <GoMail className="icon" />
                        <span className="badge">0</span>
                    </div>
                    <div className="icon-wrapper">
                        <GoHeart className="icon" />
                        <span className="badge">0</span>
                    </div>
                </div>



            </div>
            <div className='container'>

                <div className='logo'>
                    <select name="" id="">
                        <option value="" id="white">Trending Categories</option>
                        <option value="">Body Lotion</option>
                        <option value="">Electronics</option>
                        <option value="">General</option>
                        <option value="">Shoes</option>
                        <option value="">Watch</option>
                        <option value="">Woman clothes</option>
                    </select>
                </div>
                <div className="header">
                    <Link to="/home" className='nav-link'><li>Home</li></Link>
                    <Link to="/shop" className='nav-link'><li>Shop</li></Link>
                    <Link to="/vendor" className='nav-link'><li>Vendors</li></Link>
                    <Link to="/about" className='nav-link'><li>Blog</li></Link>
                    <Link to="/contact" className='nav-link'><li>Contact</li></Link>
                    <Link to="/login" className='nav-link'><li>Login</li></Link>
                </div>
                <div className='button'><BsTelephone />800-123-4567</div>
            </div>
        </div>
    )
}

export default NavBar
