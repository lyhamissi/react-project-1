import React from 'react'
import vendor1 from '../assets/vendor1.jpg';
import vendor2 from '../assets/vendor2.jpg';
import vendor3 from '../assets/vendor3.jpg';
import vendor4 from '../assets/vendor4.jpg';
import vendor5 from '../assets/vendor5.jpg';
import vendor6 from '../assets/vendor6.jpg';
import owner1 from '../assets/owner1.jpg';
import owner2 from '../assets/owner2.jpg'
import owner3 from '../assets/owner3.jpg'
import owner4 from '../assets/owner4.jpg'
import owner5 from '../assets/owner5.jpg'
import owner6 from '../assets/owner6.jpg'
import '../styles/vendor.css';
import { IoIosArrowDroprightCircle } from "react-icons/io";
const Vendor = () => {
  const stores = [
    {
      name: "John Doe's Store",
      src: vendor1,
      profile: owner1,
      rating: 5,
      location: "Central Park, New York, United States (US)",
    },
    {
      name: "Jessica's Store",
      src: vendor2,
      profile: owner2,
      rating: 4,
      location: "Central Park,New York, United States(US)",
    },
    {
      name: "Santa Monica's Store",
      src: vendor3,
      profile: owner3,
      rating: 4.5,
      location: "Central Park,New York, United States(US)",
    },
    {
      name: "Digital Good's Store",
      src: vendor4,
      profile: owner4,
      rating: 4.5,
      location: "Central Park,New York, United States(US)",
    },
    {
      name: "The Glass Store",
      src: vendor5,
      profile: owner5,
      location: "Central Park,New York, United States(US)",
    },
    {
      name: "John Doe's Store",
      src: vendor6,
      profile: owner6,
      rating: 5,
      location: "Central Park,New York, United States(US)",
    }
  ];
  return (
    <div>
      <h1 className='About'>Store List</h1>
      {/* <div className="store-header">
        <p>Total stores showing: 6</p>
        <div className="store-header-actions">
          <button className="filter-btn">
            <FaFilter className="icon" /> Filter
          </button>
          <label className="sort-label">
            Sort by:
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="sort-dropdown"
            >
              <option value="Most Recent">Most Recent</option>
              <option value="Highest Rated">Highest Rated</option>
              <option value="Lowest Price">Lowest Price</option>
            </select>
          </label>
          <div className="view-icons">
            <FaTh className="grid-view" />
            <FaBars className="list-view" />
          </div>
        </div>
      </div> */}
      <div className="store">
        {stores.map((store, index) => (
          <div className="stores" key={index}>
            <div className="store-overlay">
              <h3 className='title'>{store.name}</h3>
              <div className="stars">{"⭐".repeat(store.rating)}</div>
              <p>{store.location}</p>
            </div>
            <img src={store.src} alt="" className="store-image" />
            <div className="profile-circle">
              <img src={store.profile} alt="Owner" />
            </div>
            <IoIosArrowDroprightCircle className='arrow' />
          </div>
        ))}
      </div>

    </div>
  )
}

export default Vendor
