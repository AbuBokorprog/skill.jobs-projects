import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Statics = () => {
  const data = [
    { name: "assignment-1", id: 1, marks: 60 },
    { name: "assignment-2", id: 2, marks: 56 },
    { name: "assignment-3", id: 3, marks: 60 },
    { name: "assignment-4", id: 4, marks: 60 },
    { name: "assignment-5", id: 5, marks: 58 },
    { name: "assignment-6", id: 6, marks: 58 },
    { name: "assignment-7", id: 7, marks: 59 },
    { name: "assignment-8", id: 8, marks: 60 },
  ];

  return (
    <div>
      <div className="text-center flex justify-around items-center bg-slate-300">
        <img className="w-44" src="All Images/Vector.png" alt="" />
        <h2 className="text-4xl font-semibold">Statics</h2>
        <img className="w-44" src="All Images/Vector-1.png" alt="" />
      </div>
      <div className="my-10 container-lg mx-20">
        <AreaChart
          width={1100}
          height={400}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="1" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis dataKey="marks" />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="marks"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </div>
    </div>
  );
};

export default Statics;
