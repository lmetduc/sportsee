import React, { PureComponent } from "react";
import {
  LineChart as LineChartReCharts,
  Text,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Rectangle,
} from "recharts";
import Loader from "../../components/Loader/Loader";
import { useState, useEffect } from "react";
import useFetch from "../../utils/useFetch";
import "./LineChart.css";
import PropTypes from "prop-types";
import AverageSessionsFactory from "../../factories/AverageSessionsFactory";

function LineChart({ userID }) {
  const [data, isLoading] = useFetch(
    `http://localhost:3000/user/${userID}/average-sessions`, AverageSessionsFactory, "api"
  );

  if (isLoading) {
    return <Loader color="loader-white" />;
  }

  const CustomTooltip1 = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip1">
          <p className="label1">{`${payload[0].value}`} min</p>
        </div>
      );

    }


    return null;
  };

  CustomTooltip1.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array,
  };


  /**
   * 
   */
  const CustomCursor = (props) => {
    const { points, width, height } = props;
    const { x } = points[0];
    return (
      <Rectangle
        fill="#000000"
        stroke="none"
        x={x}
        y={0}
        width={width}
        height={height}
        opacity={0.1}
        outline="none"
      />
    );
  };



  return (
    <div className="linechart">
      <h2 className="linechart-title">Durée moyenne des sessions</h2>
      <div className="linechart-container">
        <ResponsiveContainer width="100%" height="100%" margin="10">
          <LineChartReCharts
            data={data.sessions}
            margin={{
              top: 45,
              right: 0,
              left: 0,
              bottom: 30,
            }}
          >
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#ffffff", opacity: 0.6 }}
              dy={20}
              dx={0}
              margin={{ bottom: 20 }}
              padding={{ bottom: 30, left: 20, right: 20 }}
            ></XAxis>
            <YAxis hide={true} />
            <Tooltip
              content={<CustomTooltip1 />}
              active={false}
              cursor={<CustomCursor width={500} height={500} />}
              tick={{
                fill: "#FFF",
                fontFamily: "Roboto",
                fontSize: "12px",
                opacity: "0.6",
              }}
            />
            <Line
              type="natural"
              dataKey="sessionLength"
              stroke="#fff"
              opacity={0.6}
              activeDot={{ r: 2 }}
              dot={false}
              strokeWidth={3}
              width={100}
              height={50}
            />
          </LineChartReCharts>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

LineChart.propTypes = {
  userID : PropTypes.number.isRequired
};

export default LineChart;
