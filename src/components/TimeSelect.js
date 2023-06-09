import React, { useState } from 'react'
import TimePicker from 'react-time-picker'
import '../App.css'

const TimeSelect = ({ nameholder }) => {
  const [date, newDate] = useState(new Date())
  console.log(date)
  return (
    <div className="d-flex">
      <p className="align-self-center m-0 px-1 py-2 border bg-light">
        {nameholder}
      </p>
      <TimePicker
        value={date}
        onChange={(date) => newDate(date)}
        format="hh:00 a"
        clearIcon={null}
        clockIcon={null}
      />
    </div>
  )
}

export default TimeSelect
