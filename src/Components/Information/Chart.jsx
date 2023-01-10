import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip
} from 'recharts'


const Chart = ({title, data, datakey, grid}) => {
    return (
        <>
        <h1 style={{textAlign:'center'}}>نمودار این کالکشن</h1>
        <div className="chart">
        <ResponsiveContainer width='100%' aspect={4}>
        <LineChart data={data}>
        <XAxis dataKey="name" stroke='black'/>
        <Line type='monotone' dataKey={datakey} stroke='blue'/>
        <Tooltip />
        {grid && <CartesianGrid stroke="black"/>}
        </LineChart>
        </ResponsiveContainer>
        </div>
        </>
    )
}


export default Chart