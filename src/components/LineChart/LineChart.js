import React, { PureComponent } from 'react';
import { LineChart as LineChartReCharts, Text,Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Loader from "../../components/Loader/Loader";
import { useState, useEffect } from "react";
import useFetch from "../../utils/useFetch";
import "./LineChart.css";


function LineChart({userID}) {
  const [values, setValues] = useState(null)
  const [data, isLoading] = useFetch(`http://localhost:3000/user/${userID}/average-sessions`)


  useEffect(() => {
    if (data !== null) {
      let results = [];

      data.sessions.map((item) => {
        results.push({
          day: Convert(item.day),
          sessionLength: item.sessionLength,
        });
      });

      setValues(results);
    }
  }, [data]);

  if(isLoading){
    return <Loader />
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

  function Convert(value) {
    switch (value) {
      case 1:
        return "L";
      case 2:
        return "M";
      case 3:
        return "M";
      case 4:
        return "J";
      case 5:
        return "V";
      case 6:
        return "S";
      case 7:
        return "D";
      default:
        return value;
    }
  }


    return (
      <div className="linechart">
      <h2 className="linechart-title">Durée moyenne des sessions</h2>
      <div className="linechart-container">

      <ResponsiveContainer width="100%" height="100%">

        <LineChartReCharts
          width={500}
          height={300}
          data={values}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill:'#ffffff', opacity:0.6}}></XAxis>
          <YAxis hide={true}/>
          <Tooltip content={<CustomTooltip1 />}             
              cursor={{
              stroke: "rgba(0, 0, 0, 0.1)",
              strokeWidth: 32,

            }}/>
          <Line type="monotone" dataKey="sessionLength" stroke="#fff" opacity={0.6} activeDot={{ r: 2 }} dot={false} />
        </LineChartReCharts>
      </ResponsiveContainer>
      </div>
      </div>
    );
}

export default LineChart;