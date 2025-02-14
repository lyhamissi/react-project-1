import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Product A', pv: 500 },
    { name: 'Product B', pv: 1000 },
    { name: 'Product C', pv: 2500 },
    { name: 'Product D', pv: 1500 },
    { name: 'Product E', pv: 3000 },
    { name: 'Product F', pv: 2000 },
    { name: 'Product G', pv: 4500 },
];

const Charts = () => {
    return (
        <div className="chartcontainer">
        <ResponsiveContainer width="110%" height={300}>
            <AreaChart data={data} margin={{ top:2, right: 55, left: -20, bottom: 0 }}>
                <defs>
                    <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0a1172" stopOpacity={1} />
                        <stop offset="100%" stopColor="#60a3bc" stopOpacity={0.8} />
                    </linearGradient>
                </defs>

                <XAxis dataKey="name"  tick={{ fill: "#333", fontSize: 14}} className='axis-text'/>
                <YAxis  tick={{ fill: "#333", fontSize: 14}} className='axis-text' />
                <Tooltip />
                <Area 
                    type="monotone" 
                    dataKey="pv" 
                    stroke="#0a1172" 
                    fill="url(#areaGradient)" 
                />
            </AreaChart>
        </ResponsiveContainer>
        </div>
    );
};

export default Charts;
