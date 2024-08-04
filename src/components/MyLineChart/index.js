import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { AiOutlineInfoCircle } from "react-icons/ai"; // Import an info circle icon

const MyLineChart = () => {
  const data = [
    { name: "Jan", sales: 4000, orders: 2400 },
    { name: "Feb", sales: 3000, orders: 1398 },
    { name: "Mar", sales: 2000, orders: 9800 },
  ];

  return (
    <div style={{ position: "relative", width: "100%", height: "400px" }}>
      <h2 style={{ display: "flex", alignItems: "center" }}>
        Sales vs Orders
        <AiOutlineInfoCircle style={{ marginRight: "8px" }} />
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis
            tickFormatter={(tick) => `${tick / 1000}k`}
            domain={[0, "dataMax"]}
            ticks={[0, 400, 800, 1200, 1600]}
          />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sales" stroke="#8884d8" />
          <Line type="monotone" dataKey="orders" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MyLineChart;
