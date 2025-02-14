import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { MdCircle } from "react-icons/md";
const data = [
  { name: "Orders", value: 50 },
  { name: "Purchased Products", value: 30 },
  { name: "Vendors", value: 18 },
  { name: "Increase of Sales", value: 20 }
];

const COLORS = ["#0a1172", "#3b5998", "#4a69bd", "#6a89cc"];

const Piechart = () => {
  return (
    <div style={{ textAlign: "center", position: "relative" }}>
      <PieChart width={600} height={300}>
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0a1172" stopOpacity={1} />
            <stop offset="100%" stopColor="#4a69bd" stopOpacity={1} />
          </linearGradient>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0a1172" stopOpacity={0.8} />
            <stop offset="100%" stopColor="#6a89cc" stopOpacity={1} />
          </linearGradient>
          <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0a1172" stopOpacity={0.7} />
            <stop offset="100%" stopColor="#82ccdd" stopOpacity={1} />
          </linearGradient>
          <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0a1172" stopOpacity={0.6} />
            <stop offset="100%" stopColor="#60a3bc" stopOpacity={1} />
          </linearGradient>
        </defs>

        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={80}
          outerRadius={95}
          label={false}
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={`url(#grad${index + 1})`} />
          ))}
        </Pie>

        <Tooltip />
      </PieChart>
      <div style={{position: "absolute",top: "43%",left: "50.5%",transform: "translate(-50%, -50%)",fontWeight: "bold",fontSize: "20px",}}>
        97.14%
        <p style={{ fontSize: "14px", color: "#666", margin: "5px 0 0" }}>
          Sales growth
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginTop: "20px" }}>
        {data.map((item, index) => (
          <div key={index} style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <MdCircle style={{ color: COLORS[index], fontSize: "18px" }} />
            <span style={{ fontSize: "14px", color: "#333" }}>{item.name} {item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Piechart;
