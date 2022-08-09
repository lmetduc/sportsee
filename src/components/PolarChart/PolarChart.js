import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const data = [
  {
    subject: 'Math',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Chinese',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'English',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Geography',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Physics',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'History',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

const Container = styled.div`
margin-bottom: 25px;
height: 320px;
border-radius: 5px;
background-color: #fbfbfb;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
padding: 25px;
`;


const Header = styled.header`
	display: flex;
	justify-content: space-between;
	h2 {
		font-weight: 500;
		font-size: 15px;
		color: #20253a;
	}
`;

const Text = styled.p`
	font-weight: 500;
	font-size: 14px;
	color: #74798c;
	margin-left: 10px;
`;

const Dot = styled.div`
	height: 8px;
	width: 8px;
	border-radius: 50%;
	background-color: ${(props) => props.color};
	align-self: center;
	margin-left: 30px;
`;

const Legend = styled.div`
	display: flex;
	.units {
		display: flex;
	}
`;

export default class Example3 extends PureComponent {


  render() {
    return (

      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis dataKey="subject" 
                      stroke="white"
                      dy={4}
                      tickLine={false}
                      tick={{
                        fontSize: 12,
                        fontWeight: 500,}}/>
          <Radar name="Mike" dataKey="A" stroke="#ff0000" fill="#ff0000" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>


      
    );
  }
}