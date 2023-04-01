import React from 'react'
import { CartesianGrid, Line, LineChart, Tooltip, XAxis } from 'recharts'

export default function LineCharts() {
    const data = [
        {name: 'page', pv: 2000, amt: 2400},
        {name: '2014', pv: 2200, amt: 2450},
        {name: '2015', pv: 2500, amt: 2400},
        {name: '2016', pv: 2300, amt: 2400},
        {name: '2017', pv: 2200, amt: 2450},
        {name: '2018', pv: 2400, amt: 2400},
        {name: '2019', pv: 2600, amt: 2400},
        {name: '2021', pv: 2700, amt: 2450},
        {name: '2022', pv: 3200, amt: 2400},
    ]
  return (
    <>
        <LineChart
            width={700}
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
