import React, { useState, useEffect } from 'react'
import CanvasJSReact from '../canvasjs.react'
import { parse } from 'papaparse'
import { TextDecoder } from 'text-encoding'
// import csvData from './demo.csv'
import csvData from '../kurla_dataset.csv'

const CanvasJS = CanvasJSReact.CanvasJS
const CanvasJSChart = CanvasJSReact.CanvasJSChart

function BarChart() {
  //   const [data, setData] = useState([])
  const [options, setOptions] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(csvData)
      console.log(response)
      const buffer = await response.arrayBuffer()
      const decoder = new TextDecoder('utf-8')
      const csv = decoder.decode(buffer)
      console.log(csv)
      const parsedData = parse(csv, { header: true }).data
      const selectedData = parsedData.slice(0, 5)
      console.log(selectedData)

      //   setData(parsedData)
      setOptions({
        title: {
          text: 'Bar Chart from CSV Data',
        },
        data: [
          {
            type: 'column',
            dataPoints: parsedData.map((d) => ({
              label: d.From_Date,
              y: Number(d.PM2_5),
            })),
          },
        ],
      })
    }
    fetchData()
  }, [])

  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  )
}

export default BarChart
