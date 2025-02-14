import React, { useState, useEffect } from 'react';
import './dashboard_styles/sidebar.css';
import { Link } from 'react-router-dom'
import { IoPersonCircle } from "react-icons/io5";
import { IoMdCart, IoMdSettings, IoMdSunny } from "react-icons/io";
import { MdDashboard, MdBarChart, MdReviews, MdLocalOffer, MdPeople,MdPerson } from "react-icons/md";
import { FiShoppingBag } from "react-icons/fi";
import { TbLayoutSidebarLeftCollapseFilled, TbLayoutSidebarLeftExpandFilled } from "react-icons/tb";


const Sidebar = () => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);

    return (
        <div className="dashboard">
            {/* Sidebar */}
            <div className={`sidebar ${isSidebarVisible ? "visible" : "hidden"}`}>
                <div className="topbar">
                    <IoPersonCircle className='icon' /><h3>Admin Panel</h3>
                    <button className="toggle-btn" onClick={() => setIsSidebarVisible(!isSidebarVisible)}>
                        {isSidebarVisible ? <TbLayoutSidebarLeftCollapseFilled /> : <TbLayoutSidebarLeftExpandFilled />}
                    </button>
                </div>
                <ul>
                    <Link to="/dashboard" className='nav-link'><li><MdDashboard className='nav-icon' /> Dashboard</li></Link>
                    <Link to="/productview" className='nav-link'><li><FiShoppingBag className='nav-icon' /> Products</li></Link>
                    <Link to="/orders" className='nav-link'><li><IoMdCart className='nav-icon' /> Orders</li></Link>
                    <Link to="/customers" className='nav-link'><li><MdPerson className='nav-icon' /> Customers</li></Link>
                    <Link to="/vendorview" className='nav-link'><li><MdPeople className='nav-icon' /> Vendors</li></Link>
                    {/* <li><MdBarChart className='nav-icon' /> Statistics</li> */}
                    <li><MdReviews className='nav-icon' /> Reviews</li>
                    <li><MdLocalOffer className='nav-icon' /> Hot Offers</li>
                    <Link to="/contactview" className='nav-link'><li><IoPersonCircle className='nav-icon' />Contacts</li></Link>
                    <Link to="/settings" className='nav-link'><li><IoMdSettings className='nav-icon' /> Settings</li></Link>
                </ul>
            </div>
            {!isSidebarVisible && (
                <button className="show-btn" onClick={() => setIsSidebarVisible(true)}>
                    <TbLayoutSidebarLeftExpandFilled />
                </button>
            )}
        </div>
    )
}

export default Sidebar
