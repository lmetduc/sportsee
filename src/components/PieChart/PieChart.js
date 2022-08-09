import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const data = [
  { name: 'Group A', value: 400 },
];
const COLORS = ['#ff0000', 'rgba(0, 0, 0, 0.65)'];

const Container = styled.div`
position:relative;
width:258px;
height:263px;
`;

const Title = styled.h2`
position:absolute;
left: 20%;
top: 15%;
transform: translate(-50%, -50%);
font-size: 14px;
color: #20253A;
font-weight: 700;
`;

const Text = styled.p`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 15px;
    line-height: 26px;
    font-weight: 700;
    text-align: center;
    color: #74798C;
`

const Score = styled.span`
    color: rgba(0, 0, 0, 0.8);
    font-weight: 700;
    font-size: 26px;
`

export default class Example2 extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o';

  render() {
    return (
        <Container>
            <Title>Score</Title>
            <ResponsiveContainer width='100%' height='100%'>
      <PieChart width={200} height={200} onMouseEnter={this.onPieEnter} align="center">
        <Pie
          data={data}
          cx={this.props.width / 2}
          cy={100}
          innerRadius={60}
          outerRadius={70}
          startAngle={90}
          cornerRadius="50%"
          fill="#ffffff"
          paddingAngle={2}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
          ))}
        </Pie>
      </PieChart>
      </ResponsiveContainer>
      <Text>
                <Score>{12}%<br/></Score>
                de votre<br/> objectif
            </Text>
      </Container>
    );
  }
}


