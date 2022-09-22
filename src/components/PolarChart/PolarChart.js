import PropTypes from "prop-types";
import React from "react";
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import Loader from "../../components/Loader/Loader";
import PerformanceFactory from "../../factories/PerformanceFactory";
import useFetch from "../../utils/useFetch";

function PolarChart({ userID }) {
  // fetch data from API

  const [data, isLoading] = useFetch(
    `http://localhost:3000/user/${userID}/performance`,
    PerformanceFactory,
    "api"
  );

  if (isLoading) {
    return <Loader />;
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="50%" data={data.activityData}>
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          axisLine={false}
          dataKey="kind"
          stroke="white"
          dy={4}
          tickLine={false}
          tick={{
            fontSize: 10,
            fontWeight: 500,
          }}
        />
        <Radar
          dataKey="value"
          stroke="#ff0000"
          fill="#ff0000"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}

PolarChart.propTypes = {
  userID: PropTypes.number.isRequired,
};

export default PolarChart;
