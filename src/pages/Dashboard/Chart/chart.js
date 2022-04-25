import React from 'react'
import ChartWrapper from './chart.style'

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  {
    name: 'January',
    Total: 1300,
  },
  {
    name: 'February',
    Total: 697,
  },
  {
    name: 'March',
    Total: 2198,
  },
  {
    name: 'April',
    Total: 905,
  },
  {
    name: 'May',
    Total: 1693,
  },
  {
    name: 'June',
    Total: 1503,
  },
]

export default function Chart() {
  return (
    <ChartWrapper>
      <h3>last 6 months (revenue)</h3>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id='total' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor='#A59CFE' stopOpacity={0.8}></stop>
              <stop offset='95%' stopColor='#DDD1FC' stopOpacity={0}></stop>
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <CartesianGrid strokeDasharray="3 3" className='chartGrid' />
          <Tooltip />
          <Area type="monotone" dataKey="Total" stroke="#9873F0" fillOpacity={1} fill="url(#total)" />
        </AreaChart>
      </ResponsiveContainer>
    </ChartWrapper>
  )
}
