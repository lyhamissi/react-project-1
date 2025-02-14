import React from 'react'
import './dashboard_styles/dashboardview.css'
import Chart from './Chart'
import { IoMdCart } from 'react-icons/io'
import { MdAttachMoney, MdPerson } from "react-icons/md";
import { FcSalesPerformance } from "react-icons/fc";
import Piechart from './Piechart';
import { MdModeEdit, MdDelete, MdAdd } from "react-icons/md";
import { products } from '../Components/Home';
const DashoboardView = () => {
  return (
    <div>
      <h3>Dashboard</h3>
      <div className="widgets">
        <div className="widget">

          <div className="icon-container">
            <IoMdCart className="ordericon" />
          </div>
          <div className="text-container">
            <p className="title">Orders</p>
            <p className="count">150</p>
          </div>
        </div>
        <div className="widget">

          <div className="icon-container">
            <MdAttachMoney className="ordericon" />
          </div>
          <div className="text-container">
            <p className="title">Revenues</p>
            <p className="count">$12,500</p>
          </div>

        </div>
        <div className="widget">
          <div className="icon-container">
            <MdPerson className="ordericon" />
          </div>
          <div className="text-container">
            <p className="title">Customers</p>
            <p className="count">1,245</p>
          </div>
        </div>
        <div className="widget">
          <div className="icon-container">
            <FcSalesPerformance className="ordericon" />
          </div>
          <div className="text-container">
            <p className="title">Sales</p>
            <p className="count">325</p>
          </div>
        </div>
      </div>
      <div className="title"><h3>Sales Overview</h3>
        {/* <h3 className='visitor'>Visitors</h3> */}
      </div>
      <div className="widgetts">

        <div className="chart"> <Chart /></div>
        <div className="chart"> <Piechart /></div>
      </div>
      <div className="top">
        <h3>Products Overview</h3>
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
                <td><MdModeEdit className='edit' /></td>
                <td><MdDelete className='delete' /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="top">
        <h3>Orders Overview</h3>
      </div>
      <div className="table-section">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Date</th>
              <th>Customer</th>
              <th>Paid</th>
              <th>Status</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2025-16-4</td>
              <td>Blandine</td>
              <td>Yes</td>
              <td>Pending</td>
              <td><MdModeEdit className='edit' /></td>
              <td><MdDelete className='delete' /></td>
            </tr>
            <tr>
              <td>2</td>
              <td>2025-11-2</td>
              <td>Afua</td>
              <td>Yes</td>
              <td>Shipped</td>
              <td><MdModeEdit className='edit' /></td>
              <td><MdDelete className='delete' /></td>
            </tr>
          </tbody>

        </table>
      </div>
    </div>
  )
}

export default DashoboardView
