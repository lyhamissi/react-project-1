import React from 'react'
import { useParams } from "react-router-dom";
import '../styles/home.css';
import image7 from '../assets/new1.jpg';
import image8 from '../assets/new2.jpg';
import image9 from '../assets/new3.jpg';
const products = [
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
const ProductDetails = () => {
const { id } = useParams();
const product = products.find((p) => p.id === parseInt(id));
if (!product) {
    return <h2>Product not found</h2>
}
return (
    <div>
        <div className="newcardss">
        <div className="product-card">
        <img src={product.image} alt={product.name} />
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
    </div>
    </div>
)
}

export default ProductDetails
