import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Legend
} from "recharts";
import "./Area.css"
const Data = [
  {
    year: 2005,
    England: 20,
    India: 10,
    Germany: 21,
  },
  {
    year: 2007,
    England: 60,
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

const Areas = () => {
  return (
    <div id="AreasChart">
        <h3>Chart</h3>
        <h2>Area</h2>
      <ResponsiveContainer width="90%" aspect={2}>
        <AreaChart data={Data}>
          <XAxis dataKey="year" interval={"preserveStartEnd"} />
          <YAxis tickFormatter={(value) => value + "%"} />
          <Area type="monotone" dataKey="India" stroke="blue" fill="blue" opacity={1}/>
          <Area type="monotone" dataKey="Germany" fill="aqua" stroke="aqua" opacity={0.7}/>
          <Area type="monotone" dataKey="England" fill="red" stroke="red" opacity={0.5}/>
          <Legend id="arealegend"/>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Areas;
