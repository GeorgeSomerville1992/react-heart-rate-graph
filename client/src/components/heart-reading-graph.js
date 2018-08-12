import React from 'react';
import { array } from 'prop-types';
import { GraphContainer } from './styles';
import { LineChart,
  CartesianGrid,
  Line,
  Legend,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer } from 'recharts';

function HeartReadingGraph(props) {
  return (
    <GraphContainer>
      <ResponsiveContainer height="100%">
        <LineChart data={props.heartRateValues}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <Legend strokeDasharray="3 3" />
          <XAxis dataKey="dateTime" />
          <YAxis dataKey="meanAverage" />
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="minimum" stroke="#8884d8" activeDot={{r: 8}} />
          <Line type="monotone" dataKey="maximum" stroke="#82ca9d" />
          <Line type="monotone" dataKey="meanAverage" stroke="#FF0000" />
        </LineChart>
      </ResponsiveContainer>
    </GraphContainer>
  )
}

HeartReadingGraph.propTypes = {
  heartRateValues: array.isRequired,
}

export default HeartReadingGraph