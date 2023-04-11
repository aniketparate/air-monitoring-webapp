import React, { useState, useEffect } from 'react'
import CanvasJSReact from '../canvasjs.react'
import { parse } from 'papaparse'
import { TextDecoder } from 'text-encoding'
// import csvData from './demo.csv'
import csvData from '../kurla_dataset.csv'
import airPortData from '../airport_june_2019_empty.csv'

// const CanvasJS = CanvasJSReact.CanvasJS
const CanvasJSChart = CanvasJSReact.CanvasJSChart

const BarChart = ({ date, attr }) => {
  //   const [data, setData] = useState([])
  const [options, setOptions] = useState({})

  useEffect(() => {
    // console.log(date)
    const fetchData = async () => {
      const response = await fetch(airPortData)
      const buffer = await response.arrayBuffer()
      const decoder = new TextDecoder('utf-8')
      const csv = decoder.decode(buffer)
      const parsedData = parse(csv, { header: true }).data
      const selectedData = parsedData.filter((d) => {
        const label = d.From_Date.split(' ')[0] === date
        return label
      })

      setOptions({
        // title: {
        //   text: 'Bar Chart from CSV Data',
        // },
        axisY: {
          title: attr,
        },
        height: 80,
        data: [
          {
            type: 'column',
            dataPoints: selectedData.map((d) => ({
              label: d.From_Date,
              y: Number(d[attr]),
            })),
          },
        ],
      })
    }
    fetchData()
  }, [date])

  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  )
}

export default BarChart
