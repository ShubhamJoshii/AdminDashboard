import React from "react";
import "./Lines.css";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
} from "recharts";
const Data = [
  {
    year: 2005,
    England: 28,
    India: 10,
    Germany: 21,
  },
  {
    year: 2007,
    England: 44,
    India: 20,
    Germany: 24,
  },
  {
    year: 2010,
    England: 48,
    India: 30,
    Germany: 36,
  },
  {
    year: 2013,
    England: 50,
    India: 39,
    Germany: 38,
  },
  {
    year: 2017,
    England: 66,
    India: 50,
    Germany: 54,
  },
  {
    year: 2020,
    England: 78,
    India: 68,
    Germany: 57,
  },
  {
    year: 2022,
    England: 84,
    India: 100,
    Germany: 70,
  },
];

const Lines = () => {
  return (
    <div className="Lines">
      <h3>Chart</h3>
      <h2>Lines</h2>
      <ResponsiveContainer width="90%" aspect={2}>
        <LineChart data={Data}>
          <XAxis dataKey="year" interval={"preserveStartEnd"} />
          <YAxis tickFormatter={(value) => value + "%"} />
          {/* <Tooltip contentStyle={{backgroundColor:"yellow"}}/> */}
          <Line dataKey="India" stroke="aqua" activeDot={{ r: 5 }} />
          <Line dataKey="Germany" stroke="blue" activeDot={{ r: 5 }} />
          <Line dataKey="England" stroke="red" activeDot={{ r: 5 }} />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Lines;
