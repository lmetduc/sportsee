import PropTypes from "prop-types";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Loader from "../../components/Loader/Loader";
import ActivityFactory from "../../factories/ActivityFactory";
import useFetch from "../../utils/useFetch";
import "./ColumnChart.css";
import { useEffect, useState } from "react";

function ColumnChart({ userID }) {

  //fetch data form .json
  // const [data, setData] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   fetch(`http://localhost:3000/user/12/activity`)
  //     .then((response) => response.json())
  //     .then((response) => {
  //       setIsLoading(false);
  //       setData(response);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);


  // fetch data from API or mock (comment or uncomment url part)
  const [data, isLoading] = useFetch(
  // `http://localhost:3000/user/${userID}/activity`,
   `./mock/columnchart.json`,
   ActivityFactory,
   "api"
  );


  if (isLoading) {
    return <Loader />;
  }

  /**
   * This function is made to custom the tooltip
   * @params payload, active
   * @return customized tooltip components
   */

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
            data={data.sessions}
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
            <Legend
              formatter={(value) => (
                <span className="text-color-class">{value}</span>
              )}
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
              cx="2"
              cy="2"
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

ColumnChart.propTypes = {
  userID: PropTypes.number.isRequired,
};

export default ColumnChart;
