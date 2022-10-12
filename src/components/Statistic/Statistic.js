import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Statistic = () => {
  const topics = useLoaderData();
  const { data } = topics;
  console.log(data);

  return (
    <div>
      <p className="bg-black dark:text-lime-500 rounded-xl text-3xl font-mono font-extrabold inline-block mt-3 p-3">Statistic</p>
      <div className="grid grid-cols-1 justify-center items-center m-10 gap-10 overflow-hidden">
        <div className="flex justify-center bg-black ">
          <ResponsiveContainer width="90%" aspect={3}>
            <LineChart width={450} height={300} data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="total" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="flex justify-center ">
          <ResponsiveContainer width="90%" aspect={3}>
            <BarChart
              className="bg-white  "
              width={450}
              height={300}
              data={data}
            >
              <Bar dataKey="total" fill="#000" />
              <Tooltip></Tooltip>
              <XAxis dataKey="name" />
              <YAxis />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
