import React, { PureComponent } from "react";
import { useState, useEffect } from "react";
import Loader from "../../components/Loader/Loader";
import useFetch from "../../utils/useFetch";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

function PolarChart({ userID }) {
  const [data, isLoading] = useFetch(
    `http://localhost:3000/user/${userID}/performance`
  );
  const [values, setValues] = useState(null);

  useEffect(() => {
    if (data !== null) {
      let results = [];

      data.data.map((item) => {
        results.push({
          kind: Translate(data.kind[item.kind]),
          value: item.value,
        });
      });

      setValues(results);
    }
  }, [data]);

  if (isLoading) {
    return <Loader />;
  }


  function Translate(kind) {
    switch (kind) {
      case "intensity":
        return "Intensité";
      case "speed":
        return "Vitesse";
      case "strength":
        return "Force";
      case "endurance":
        return "Endurance";
      case "energy":
        return "Energie";
      case "cardio":
        return "Cardio";
      default:
        return kind;
    }
  }

  return (

    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="50%" data={values}>
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
export default PolarChart;
