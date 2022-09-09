import React, { PureComponent } from 'react';
import { LineChart as LineChartReCharts, Text,Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Rectangle } from 'recharts';
import Loader from "../../components/Loader/Loader";
import { useState, useEffect } from "react";
import useFetch from "../../utils/useFetch";
import "./LineChart.css";
import PropTypes from 'prop-types'
import AverageSessionsFactory from "../../factories/AverageSessionsFactory";


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
    return <Loader color="loader-white"/>
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

  const CustomCursor = (props) => {
    const { points } = props;
    const { x, y } = points[0];
    return (
    <Rectangle
    fill="#ffffff"
    stroke="none"
    x={x}
    y={0}
    width="500"
    height="500"
    opacity={0.1}
  />);
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

      <ResponsiveContainer width="100%" height="100%" margin="10">

        <LineChartReCharts
          width={100}
          height={100}
          data={values}
          margin={{
            top: 5,
            right: 16,
            left: 20,
            bottom: 10,
          }}
        >
          <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill:'#ffffff', opacity:0.6}} dy={20} dx={5} margin={{bottom:20}} padding={{ bottom: 30 }}></XAxis>
          <YAxis hide={true}/>
          <Tooltip 
          content={<CustomTooltip1 />}        
          active={false}
          cursor={<CustomCursor width={100} height={100}/>} 
          tick={{
            fill: "#FFF",
            fontFamily: "Roboto",
            fontSize: "12px",
            opacity: "0.6",
          }}
        />          
          <Line type="natural" dataKey="sessionLength" stroke="#fff" opacity={0.6} activeDot={{ r: 2 }} dot={false} strokeWidth={3} width={100} height={50}/>
        </LineChartReCharts>
      </ResponsiveContainer>
      </div>
      </div>
    );
}

LineChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  area: PropTypes.string,
  title: PropTypes.string,
  titleColor: PropTypes.string,
}

export default LineChart;


