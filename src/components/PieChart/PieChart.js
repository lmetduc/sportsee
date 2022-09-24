import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import {
  Cell,
  Pie,
  PieChart as PieChartReCharts,
  ResponsiveContainer,
} from "recharts";
import Loader from "../../components/Loader/Loader";
import UserFactory from "../../factories/UserFactory";
import useFetch from "../../utils/useFetch";
import "./PieChart.css";

function PieChart({ userID }) {
    
  // fetch data from API or mock (comment or uncomment url part)
  const [data, isLoading] = useFetch(
     //`http://localhost:3000/user/${userID}`,
    
     `./mock/piechart.json`,
     UserFactory,
     "api"
    );
  


  const [values, setValues] = useState(null);
  const [endAngle, setEndAngle] = useState(null);

  useEffect(() => {
    if (data !== null) {
      const results = [
        {
          // convert todayScore in percentage
          value: data.todayScore * 100,
        },
      ];

      setValues(results);

      // define where graph starts and its direction
      setEndAngle(-360 * data.todayScore);
    }
  }, [data]);

  if (isLoading) {
    return <Loader />;
  }

  const COLORS = ["#999999"];
  const pieData = [{ fillColor: "#eeeeee" }];

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
            {console.log(data)}
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
  userID: PropTypes.number.isRequired,
};

export default PieChart;
