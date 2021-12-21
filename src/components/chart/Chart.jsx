import { LineChart, Line, CartesianGrid, ResponsiveContainer, XAxis, Tooltip } from 'recharts';

import './chart.scss';
import React from 'react'

export default function Chart({ title, data, dataX, dataLine, grid }) {
  return (
    <div className='chart-container'>
      <h3>{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart width={400} height={200} data={data} >
          <Line type="monotone" dataKey={dataLine} stroke='#8884d8' />
          <XAxis dataKey={dataX} />
          {grid && <CartesianGrid stroke='#ccc' />}
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>

    </div >
  )
}
