import React from 'react'
import { useParams } from "react-router-dom";
import '../styles/home.css';
import { products } from './Home';
import '../styles/product.css'
const ProductDetails = () => {
const { id } = useParams();
const prod = products.find((prod) => prod.id == id);
if (!prod) {
    return <h6 style={{ color: "red", fontSize: "1.5rem" }}>Error:Product not found!!</h6>
}
return (
    <div>
        <div className="newcardss">
        <div className="products-card">
            <div className="image">
        <img src={prod.image} alt={prod.name} />
        </div>
        <div className="cards-details">
            <h3>{prod.name}</h3> <br />
            <h4>Itaque repellat corrupti cumque neque ipsam, deleniti accusamus doloremque! <br /> 
            Quaerat perspiciatis eveniet natus enim sequi, nihil aliquid. Voluptas doloremque  <br />
            dignissimos incidunt repellat? Quibusdam aliquam eveniet, voluptas corrupti  <br />
            maiores neque.Beatae quod inventore, cumque dolorum sequi facere dolores deleniti,<br /> 
               voluptates ducimus cupiditate delectus deserunt iste.</h4>
            <p className="prices">{prod.price}</p>
            <div className="star">
                {"★".repeat(prod.rating)}
                {"☆".repeat(5 - prod.rating)}
            </div>
            <div className="colors-options">
                {prod.colors.map((color, index) => (
                    <span key={index} className="colors-circle" style={{ backgroundColor: color }}></span>
                ))}
            </div>
        </div> 
    </div>
    </div>
    </div>
)
}

export default ProductDetails
