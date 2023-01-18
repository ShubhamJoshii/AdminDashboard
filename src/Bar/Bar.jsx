import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
} from "recharts";
import "./Bar.css";
const Bars = () => {
  const Data = [
    {
      year: 2020,
      England: 78,
      India: 68,
      Germany: 57,
    },
    {
      year: 2010,
      England: 48,
      India: 30,
      Germany: 36,
    },
    {
      year: 2022,
      England: 84,
      India: 100,
      Germany: 70,
    },
  ];
  return (
    <div id="Bar">
      <h3>Chart</h3>
      <h2>Bar</h2>
      <ResponsiveContainer  height="90%" aspect={2}>
        <BarChart data={Data}>
          <XAxis dataKey="year" />
          <YAxis tickFormatter={(value) => value + "%"} />
          <Tooltip />
          <Bar dataKey="England" fill="#00BDAE" />
          <Bar dataKey="Germany" fill="lightGreen" />
          <Bar dataKey="India" fill="#357CD2" />
          <Legend id="arealegend" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
export default Bars;
