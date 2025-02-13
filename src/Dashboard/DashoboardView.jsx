import React from 'react'
import './dashboard_styles/dashboardview.css'
import Chart from './Chart'
import { PieChart } from 'recharts'
const DashoboardView = () => {
  return (
    <div>
      <h3>Dashboard</h3>
      <div className="widgets">
        <div className="widget">
          <h2>Orders</h2>
          <p>150</p>
        </div>
        <div className="widget">
          <h2>Revenue</h2>
          <p>$12,500</p>
        </div>
        <div className="widget">
          <h2>Customers</h2>
          <p>1,245</p>
        </div>
        <div className="widget">
          <h2>Sales</h2>
          <p>325</p>
        </div>
      </div>
      <div className="title"><h3>Sales Overview</h3><h3>Visitors</h3></div>
      <div className="widgetts">
      
        <div className="chart"> <Chart /></div>
        
        <div className="chart"> <PieChart/></div>
      </div>
    </div>
  )
}

export default DashoboardView
