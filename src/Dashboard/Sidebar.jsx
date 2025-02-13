import React, { useState, useEffect } from 'react';
import './dashboard_styles/sidebar.css';
import { IoPersonCircle } from "react-icons/io5";
import { IoMdCart, IoMdSettings, IoMdSunny } from "react-icons/io";
import { MdDashboard, MdBarChart, MdReviews, MdLocalOffer, MdPeople } from "react-icons/md";
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
                    <li><MdDashboard className='nav-icon' /> Dashboard</li>
                    <li><FiShoppingBag className='nav-icon' /> Products</li>
                    <li><IoMdCart className='nav-icon' /> Orders</li>
                    <li><MdPeople className='nav-icon' /> Customers</li>
                    <li><MdBarChart className='nav-icon' /> Statistics</li>
                    <li><MdReviews className='nav-icon' /> Reviews</li>
                    <li><MdLocalOffer className='nav-icon' /> Hot Offers</li>
                    <li><IoMdSettings className='nav-icon' /> Settings</li>
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
