import React from "react";
import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./ColumnChart.css";
import Loader from "../../components/Loader/Loader";
import useFetch from "../../utils/useFetch";


function ColumnChart({ userID }) {
  const [data, isLoading] = useFetch(
    `http://localhost:3000/user/${userID}/activity`
  );
  const [values, setValues] = useState(null);

  useEffect(() => {
    if (data !== null) {
      let results = [];

      data.sessions.map((item, i) => {
        results.push({
          day: i + 1,
          kilogram: item.kilogram,
          calories: item.calories
        });
      });

      setValues(results);
    }
  }, [data]);

  if (isLoading) {
    return <Loader />;
  }

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${payload[0].value}`}kg</p>
          <p className="label">{`${payload[1].value}`}Kcal</p>
        </div>
      );
    }
  
    return null;
  };

  return (
    <div className="barchart">
    <h2 className="barchart-title">Activité quotidienne</h2>
    <div className="barchart-container">

    <ResponsiveContainer width="100%" height="90%">
      <BarChart
        width={900}
        height={200}
        data={values}
        margin={{
          top: 10,
          right: 20,
          left: 10,
          bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="1 1" vertical={false} />
        <XAxis
          dataKey="day"
          axisLine={{ stroke: "#B5AEB2" }}
          tickLine={false}
          tick={{ fill: "#B5AEB2" }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#B5AEB2" }}
          orientation="right"
        ></YAxis>
        <Tooltip content={<CustomTooltip />} />
        <Legend formatter={(value) => <span className="text-color-class">{value}</span>}           
          verticalAlign="top"
          align="right"
          wrapperStyle={{ paddingBottom: "65px" }}
          iconSize={8}
          />
        <Bar
          dataKey="kilogram"
          name="Poids (kg)"
          fill="#000000"
          barSize={7}
          radius={[3, 3, 0, 0]}
          legendType="circle"
          cx="2" cy="2"
        />
        <Bar
          dataKey="calories"
          name="Calories brûlées (kCal)"
          fill="#FF0000"
          barSize={7}
          radius={[3, 3, 0, 0]}
          legendType="circle"
        />
      </BarChart>
    </ResponsiveContainer>
    </div>
        </div>
  );
}
export default ColumnChart;
