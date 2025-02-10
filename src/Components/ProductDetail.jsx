import React from 'react'
import { useParams } from "react-router-dom";
import '../styles/home.css';
import '../styles/product.css'
import { Card } from './Shops';
const ProductDetail = () => {
    //for products in shops
    const { ids } = useParams();
    const shop = Card.find((shop) => shop.ids == ids);
    if (!shop) {
        return <h6 style={{ color: "red", fontSize: "1.5rem" }}>Error:Product not found!!</h6>
    }
    return (
        <div>
            <div className="newcardss">
                <div className="products-card">
                    <div className="image">
                        <img src={shop.pic1} alt={Card.name} />
                    </div>
                    <div className="cards-details">
                        <h3>{shop.title}</h3> <br />
                        <h4>Itaque repellat corrupti cumque neque ipsam, deleniti accusamus doloremque! <br />
                            Quaerat perspiciatis eveniet natus enim sequi, nihil aliquid. Voluptas doloremque  <br />
                            dignissimos incidunt repellat? Quibusdam aliquam eveniet, voluptas corrupti  <br />
                            maiores neque.Beatae quod inventore, cumque dolorum sequi facere dolores deleniti,<br />
                            voluptates ducimus cupiditate delectus deserunt iste.</h4>
                        <p className="prices">{shop.cost}</p>
                        <div className="star">
                            {"★".repeat(shop.ratings)}
                            {"☆".repeat(5 - shop.ratings)}
                        </div>
                        <div className="colors-options">
                            {shop.color.map((color, index) => (
                                <span key={index} className="colors-circle" style={{ backgroundColor: color }}></span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
