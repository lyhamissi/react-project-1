import React from 'react'
import '../styles/shop.css'
import image1 from '../assets/shop.jpg';
import image7 from '../assets/new1.jpg'
import image8 from '../assets/new2.jpg'
import image9 from '../assets/new3.jpg'
import { GoHeart } from "react-icons/go";
import image10 from '../assets/mouse.jpg';
import image11 from '../assets/watch.jpg';
import image12 from '../assets/headset.jpg';
import image13 from '../assets/cream.jpg';
import image14 from '../assets/cam.jpg';
import image15 from '../assets/shoes.jpg';
import { useNavigate } from 'react-router-dom';
export const Card = [
  {
    ids: 1,
    pic1: image7,
    title: "All In One Bottle",
    cost: "$22.00 – $55.00",
    ratings: 4,
    color: ["#6B705C", "#B08968", "#EDEDED"]
  },
  {
    ids: 2,
    pic1: image8,
    title: "Amazon Alexa",
    cost: "$49.00 – $69.00",
    ratings: 3,
    color: ["#6B705C", "#B08968", "#EDEDED"]
  },
  {
    ids: 3,
    pic1: image9,
    title: "Headset Gamer",
    cost: "$22.00 – $55.00",
    ratings: 5,
    color: ["#6B705C", "#B08968", "#EDEDED"]
  },
  {
    ids: 4,
    pic1: image12,
    title: "Headset Gamer Legion Plus",
    cost: "$22.00 – $55.00",
    ratings: 5,
    color: ["#6B705C", "#B08968", "#EDEDED"]
  },
  {
    ids: 5,
    pic1: image11,
    title: "JDoe’s Styling Watch  ",
    cost: "$22.00 – $33.00",
    ratings: 5,
    color: ["#6B705C", "#B08968", "#EDEDED"]
  },
  {
    ids: 6,
    pic1: image14,
    title: "Jessi Cam Recorder",
    cost: "$22.00 – $55.00",
    ratings: 5,
    color: ["#6B705C", "#B08968", "#EDEDED"]
  },
  {
    ids: 7,
    pic1: image15,
    title: "John Sport Shoes",
    cost: "$22.00 – $55.00",
    ratings: 5,
    color: ["#6B705C", "#B08968", "#EDEDED"]
  },
  {
    ids: 8,
    pic1: image10,
    title: "Mouse Raxer 3000DPI",
    cost: "$22.00 – $55.00",
    ratings: 4,
    color: ["#6B705C", "#B08968", "#EDEDED"]
  },
  {
    ids: 9,
    pic1: image13,
    title: "Santa Monica Facial Cream",
    cost: "$22.00 – $55.00",
    ratings: 5,
    color: ["#6B705C", "#B08968", "#EDEDED"]
  },
]
const Shops = () => {
  const [price, setPrice] = React.useState(79);

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };
  const navigate = useNavigate();
  const handleNavigation = (ids) => {
    navigate  (`/product/${ids}`)
  }

  return (
    <div>
      <div className='shop'>
        <h1 className='shops'>Shop</h1>
        <img src={image1} alt="" />

      </div>
      <div className="shop-container">
        <div className="sides">
          <h3>Categories</h3>
          <ul>
            <li className="lists">Body Lotion (1)</li>
            <li className="lists">Computer Gadget (3)</li>
            <li className="lists">Electronics (5)</li>
            <li className="lists">Fashion (3)</li>
            <li className="lists">General (1)</li>
            <li className="lists">Shoes (2)</li>
            <li className="lists">Sports (3)</li>
            <li className="lists">Watch (1)</li>
            <li className="lists">Woman Clothes (3)</li>
          </ul>
          <hr />
          <h3>Color</h3><br />
          <div className="color-options">
            <span className="color" style={{ backgroundColor: "#c4b89a" }}></span>
            <span className="color" style={{ backgroundColor: "#a67c52" }}></span>
            <span className="color" style={{ backgroundColor: "#e0dfdf" }}></span>
            <span className="color" style={{ backgroundColor: "#ffffff", border: "1px solid #ddd" }}></span>
          </div><hr />
          <div className="ratings">
            <h3>Ratings</h3>
            <div className="rating-option">
              <span className="stars">★★★★★</span>
              <span className="count">(8)</span>
            </div>
            <div className="rating-option">
              <span className="stars">★★★★☆</span>
              <span className="count">(4)</span>
            </div>
            <div className="rating-option">
              <span className="stars">★★★☆☆</span>
              <span className="count">(1)</span>
            </div>
          </div>
          <hr />

          <h3>Price</h3>
          <div className="price-range">
            <input type="range" min="0" max="79" value={price} onChange={handlePriceChange} className="slider" />
            <div className="price-values">
              <span className="price-box">$0</span>
              <span className="price-box">${price}</span>
            </div>

          </div>
        </div>
        <div className="main-conten">
          <div className="top-bar">
            <span>Showing 1-9 of 13 results</span>
            <select className="sort-dropdown">
              <option>Default sorting</option>
              <option>Sort by popularity</option>
              <option>Sort by average rating </option>
              <option>Sort by latest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
          <div className="products">
            {Card.map((product) => (
              <div className="product" key={product.ids}>
                <div className="image-container">
                  <img src={product.pic1} alt={Card.title} />
                  <div className="overlay">
                    <div className="heart"><GoHeart className='icon' /></div>
                    <div className="select-options">Select Option</div>
                    <div className="quick-views" onClick={() => handleNavigation(product.ids)}>Quick View</div>
                  </div>
                </div>
                <div className="cards-details">
                  <h5>{product.title}</h5>
                  <p className='price'>{product.cost}</p>
                  <div className="starss">
                    {"★".repeat(product.ratings)}
                    {"☆".repeat(5 - product.ratings)}
                  </div>

                  <div className="color-options">
                    {product.color.map((color, index) => (
                      <span key={index} className='color-circle' style={{ backgroundColor: color }}></span>
                    ))}

                  </div>
                </div>
              </div>

            ))}

          </div>
        </div>
      </div>
    </div >
  )
}

export default Shops
