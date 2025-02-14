import React from 'react'
import { stores } from '../Components/Vendor'
import { MdModeEdit, MdDelete, MdAdd } from "react-icons/md";
const VendorView = () => {
    return (
        <div>
            <div className="top">
                <h3>Sellers</h3>
                <button type="submit" className='add'><MdAdd className='plus' />Add Vendor</button>
            </div>
            <div className="table-section">
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Names</th>
                            <th>Location</th>
                            <th colSpan={2}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stores.map((store, index) => (
                            <tr key={index}>
                                <td>{store.id}</td>
                                <td><img src={store.profile} className="product-img" />{store.name}</td>
                                <td>{store.location}</td>
                                <td><MdModeEdit className='edit' /></td>
                                <td><MdDelete className='delete' /></td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default VendorView
