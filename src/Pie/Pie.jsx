import React from "react";
import { ResponsiveContainer, Pie, PieChart } from "recharts";
import "./Pie.css";
const Pies = () => {
  const Data = [
    { value: 18 },
    { value: 8 },
    { value: 15 },
    { value: 11 },
    { value: 18 },
    { value: 14 },
    { value: 16 },
  ];
  return (
    <div id="PieChart">
      <h3>Chart</h3>
      <h2>Pie</h2>
      <ResponsiveContainer width="90%" aspect={2}>
        <PieChart width={730} height={250}>
          <Pie
            data={Data}
            dataKey="value"
            fill="lightGreen"
            stroke="black"
            label
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Pies;
