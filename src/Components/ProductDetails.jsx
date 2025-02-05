import React from 'react'
import { useParams } from "react-router-dom";
import '../styles/home.css';
import { products } from './Home';
const ProductDetails = () => {
const { id } = useParams();
const product = products.find((p) => p.id === parseInt(id));
if (!product) {
    return <h6 style={{ color: "red", fontSize: "1.5rem" }}>Error:Product not found!!</h6>
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
