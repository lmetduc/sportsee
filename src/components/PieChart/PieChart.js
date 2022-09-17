import React, { PureComponent, useState, useEffect } from "react";
import {
  PieChart as PieChartReCharts,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";
import useFetch from "../../utils/useFetch";
import Loader from "../../components/Loader/Loader";
import "./PieChart.css";
import UserFactory from "../../factories/UserFactory";


function PieChart({ userID }) {
  const [data, isLoading] = useFetch(`http://localhost:3000/user/${userID}`, UserFactory, "api");

  const [values, setValues] = useState(null);
  const [endAngle, setEndAngle] = useState(null);

  useEffect(() => {
    if (data !== null) {
      const results = [
        {
          value: data.todayScore * 100,
        },
      ];

      setValues(results);
      setEndAngle(-360 * data.todayScore);
    }
  }, [data]);

  if (isLoading) {
    return <Loader />;
  }

  const COLORS = ["#999999"];
  const pieData = [{ fillColor: "#eeeeee" }];
  const fullPie = [
    {
      nameKey: "name",
      value: 360,
    },
  ];

  return (
    <div className="piechart">
      <h2 className="piechart-title">Score</h2>
      <div className="piechart-container">
        <ResponsiveContainer width="100%" height="100%">
          <PieChartReCharts width={200} height={200} align="center">
            <Pie
              data={values}
              cx="50%"
              cy="50%"
              outerRadius={65}
              innerRadius={65}
              startAngle={0}
              endAngle={360}
              cornerRadius="50%"
              paddingAngle={2}
              stroke={"none"}
              blendStroke={true}
              isAnimationActive={false}
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.fillColor}
                  cornerRadius="50%"
                  style={{
                    filter: `drop-shadow(0px 0px 3px ${
                      COLORS[index % COLORS.length]
                    }`,
                  }}
                />
              ))}
            </Pie>
            <Pie
              data={values}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={70}
              startAngle={90}
              endAngle={endAngle + 90}
              cornerRadius="50%"
              fill="#ff0000"
              paddingAngle={1}
              dataKey="value"
            ></Pie>
          </PieChartReCharts>
        </ResponsiveContainer>
        <div className="text">
          <div className="score">
            {data.todayScore * 100}%<br />
          </div>
          de votre
          <br /> objectif
        </div>
      </div>
    </div>
  );
}

PieChart.propTypes = {
  userID : PropTypes.number.isRequired,
  todayScore : PropTypes.number
}



export default PieChart;
