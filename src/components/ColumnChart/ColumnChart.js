import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./ColumnChart.css";
import styled from 'styled-components';
import PropTypes from 'prop-types';

const data = [
    {
      name: '1',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: '2',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const Title = styled.h2`
position:absolute;
left: 20%;
top: 15%;
transform: translate(-50%, -50%);
font-size: 20px;
color: #20253A;
font-weight: 700;
`;
  
  export default class Example1 extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';
  
    render() {
      return (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={1800}
            height={300}
            data={data}
            margin={{
              top: 15,
              right: 30,
              left: 15,
              bottom: 15,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Title>Activités quotidiennes</Title>
            <Legend verticalAlign="top" wrapperStyle={{ paddingBottom: '65px' }}/>
            <Bar dataKey="pv" fill="#000000" barSize={7} radius={[3, 3, 0, 0]}/>
            <Bar dataKey="uv" fill="#FF0000" barSize={7} radius={[3, 3, 0, 0]}/>
          </BarChart>
        </ResponsiveContainer>
      );
    }
  }
  