import React from 'react';
import {Link} from 'react-router-dom';
import './dashboard_styles/productview.css'
import { MdModeEdit, MdDelete,MdAdd } from "react-icons/md";
import { products } from '../Components/Home';
const ProductView = () => {
    return (
        <div>
            <div className="top">
                <h3>List of Products</h3>
                <button type="submit" className='add'><Link to="/addproduct" className="nav-links"><MdAdd className='plus'/>Add Product</Link></button>
            </div>
            <div className="table-section">
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Status</th>
                            <th colSpan={2}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                        <tr key={index}>
                            <td>{product.id}</td>
                            <td>
                                <img src={product.image} alt={product.name} className="product-img" />
                                {product.name}
                            </td>
                            <td>{product.price}</td>
                            <td>{product.stock}</td>
                            <td>{product.status}</td>
                            <td><MdModeEdit className='edit'/></td>
                            <td><MdDelete className='delete'/></td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default ProductView
