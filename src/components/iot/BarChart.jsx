import React from 'react'
import { CartesianGrid, Line, LineChart, Tooltip, XAxis } from 'recharts'

export default function BarChart() {
    const data = [
        {name: 'Page A', uv: 400, pv: 2400, amt: 2400},
        {name: 'Page A', uv: 450, pv: 2450, amt: 2450},
        {name: 'Page A', uv: 400, pv: 2450, amt: 2400},
        {name: 'Page A', uv: 400, pv: 2400, amt: 2400},
        {name: 'Page A', uv: 450, pv: 2450, amt: 2450},
        {name: 'Page A', uv: 400, pv: 2450, amt: 2400},
        {name: 'Page A', uv: 400, pv: 2400, amt: 2400},
        {name: 'Page A', uv: 450, pv: 2450, amt: 2450},
        {name: 'Page A', uv: 400, pv: 2450, amt: 2400},
    ]
  return (
    <>
        <LineChart
            width={400}
            height={400}
            data={data}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
            >
            <XAxis dataKey="name" />
            <Tooltip />
            <CartesianGrid stroke="#f5f5f5" />
            <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
            <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
        </LineChart>
    </>
  )
}
