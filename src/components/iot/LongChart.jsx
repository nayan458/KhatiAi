import React from 'react'
import { BarChart, XAxis, YAxis } from 'recharts'

export default function LongChart() {
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
  
  <BarChart width={600} height={300} data={data}>
    <XAxis dataKey="name" tick={renderCustomAxisTick} />
    <YAxis />
    <Bar dataKey="uv" barSize={30} fill="#8884d8"
      label={renderCustomBarLabel}/>
  </BarChart>
        {/* <BarChart width={600} height={300} data={data}>
            <XAxis dataKey="name" tick={renderCustomAxisTick} />
            <YAxis/>
            <Bar dataKey="uv" barSize={30} fill="#8884d8"
            label={renderCustomBarLabel}/>
        </BarChart> */}
    </>
  )
}