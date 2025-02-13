import React, { useEffect, useState } from 'react'
import './dashboard_styles/topbar.css';
import { IoMdSunny } from 'react-icons/io';
import { FiSearch } from "react-icons/fi";
import { LuMoonStar } from 'react-icons/lu';
import { MdNotifications } from "react-icons/md";
const Navbar = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setIsDarkTheme(true);
            document.body.classList.add('dark-theme');
        } else {
            setIsDarkTheme(false);
            document.body.classList.add('light-theme');
        }
    }, []);
    const toggleTheme = () => {
        setIsDarkTheme((prev) => {
            const newTheme = !prev;
            document.body.classList.toggle('dark-theme', newTheme);
            document.body.classList.toggle('light-theme', !newTheme);
            localStorage.setItem('theme', newTheme ? 'dark' : 'light');
            return newTheme;
        });
    };
    return (
        <div className={`navbar ${isDarkTheme ? 'dark' : 'light'}`}>
            <div className="search-box">
                <FiSearch className="search-icon" />
                <input type="text" placeholder="Search products..." className="input" />

            </div>
            <button className="theme-toggle" onClick={toggleTheme}>
                {isDarkTheme ? <IoMdSunny /> : <LuMoonStar />}
            </button>
            <MdNotifications className='notifications' />
        </div>
    )
}

export default Navbar
