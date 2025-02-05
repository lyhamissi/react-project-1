import React from 'react'
import { useState } from 'react';
import '../styles/home.css'
import image1 from '../assets/product1.jpg'
import image2 from '../assets/product2.jpg'
import image3 from '../assets/product3.jpg'
import image4 from '../assets/product4.jpg'
import image5 from '../assets/product5.jpg'
import image6 from '../assets/product6.jpg'
import image7 from '../assets/new1.jpg'
import image8 from '../assets/new2.jpg'
import image9 from '../assets/new3.jpg'
import { GoHeart } from "react-icons/go";
import { useNavigate } from 'react-router-dom';
export const products = [
  {
    id: 1,
    name: "All In One Bottle",
    price: "$22.00 – $55.00",
    rating: 3,
    colors: ["#6B705C", "#B08968", "#EDEDED"],
    image: image7,
  },
  {
    id: 2,
    name: "Amazon Alexa",
    price: "$49.00 – $69.00",
    rating: 5,
    colors: ["#EDEDED", "#000000"],
    image: image8,
  },
  {
    id: 3,
    name: "Headset Gamer Legion",
    price: "$22.00 – $55.00",
    rating: 4,
    colors: ["#6B705C", "#B08968", "#EDEDED"],
    image: image9,
  },
];
const Home = () => {
  // const [selectProduct, setSelectProduct] = useState();
  const navigation = useNavigate();
  const handleNavigate = (id) => {
    navigation(`/singleproduct/${id}`)
  }

  const items = [
    { src: image1, text: "Body Lotion" },
    { src: image2, text: "Sports" },
    { src: image3, text: "Computer Gadget" },
    { src: image4, text: "Electronics" },
    { src: image5, text: "Watch" },
    { src: image6, text: "Women Clothes" },
  ];
  return (
    <div>
      <div className='containers'>
        <div className="side">
          <li className='list'>Electronics</li>
          <li className='list'>Computer Gadget</li>
          <li className='list'>Fashion</li>
          <li className='list'>Body Lotion</li>
          <li className='list'>Sports</li>
          <li className='list'>Woman Clothes</li>
          <li className='list'>Shoes</li>
          <li className='list'>Watches</li>
        </div>
        <div className="center">
          <h2>Explore our latest and <br /> greatest electronics</h2>  <br />
          <button>SHOP NOW</button>
        </div>

      </div>
      <div className="popular">
        <h3>Popular Categories</h3>
        <div className="card-container">
          {items.map((item, index) => (
            <div className="card" key={index}>
              <img src={item.src} alt={item.text} className="card-image" />
              <div className="card-text">{item.text}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="newarrivals">
        <h3>New Arrival Products</h3>
      </div>
      <div className="newcards">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="card-images">
              <img src={product.image} alt={product.name} />
              <div className="overlay">
                <div className="heart"><GoHeart className='icon' /></div>
                <div className="select-option">Select Option</div>
                <div className="quick-view" onClick={() => handleNavigate(product.id)}>
                  {/* onClick={() => setSelectProduct(product)} */}
                  Quick View</div>
              </div>
            </div>
            <div className="card-details">
              <h3>{product.name}</h3>
              <p className="price">{product.price}</p>
              <div className="stars">
                {"★".repeat(product.rating)}
                {"☆".repeat(5 - product.rating)}
              </div>
              <div className="color-options">
                {product.colors.map((color, index) => (
                  <span key={index} className="color-circle" style={{ backgroundColor: color }}></span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* {selectProduct && (
        <div className="modal-overlay" onClick={() => setSelectProduct(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => setSelectProduct(null)}>
              &times;
            </span>
            <img src={selectProduct.image} alt={selectProduct.name} />
            <h3>{selectProduct.name}</h3>
            <p className="price">{selectProduct.price}</p>
            <div className="stars">
              {"★".repeat(selectProduct.rating)}
              {"☆".repeat(5 - selectProduct.rating)}
            </div>
            <div className="color-options">
              {selectProduct.colors.map((color, index) => (
                <span
                  key={index}
                  className="color-circle"
                  style={{ backgroundColor: color }}
                ></span>
              ))}
            </div>
          </div>
        </div>
      )} */}
      <div className="button"> <button>SHOP NOW</button></div>

    </div>
  )
}

export default Home
