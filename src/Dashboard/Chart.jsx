import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from "recharts";
const data = [
    {
        "name": "Product A",
        "product": 4000,
        "sales": 2400
    },
    {
        "name": "Product B",
        "product": 3000,
        "sales": 1398
    },
    {
        "name": "Product C",
        "product": 2000,
        "sales": 9800
    },
    {
        "name": "Product D",
        "product": 2780,
        "sales": 3908
    }
];

const Chart = () => {
    return (
        <div>
            <BarChart width={650} height={300} data={data}>
                <CartesianGrid strokeDasharray="2 2" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="product" fill="#8884d8" />
                <Bar dataKey="sales" fill="#82ca9d" />
            </BarChart>
            
        </div>
    )
}

export default Chart
