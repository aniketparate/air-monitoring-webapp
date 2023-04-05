import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import './../App.css'

import 'react-datepicker/dist/react-datepicker.css'

const DateSelect = ({ nameholder }) => {
  const [startDate, setStartDate] = useState(new Date())
  console.log(startDate)
  return (
    <div className="d-flex" style={{ zIndex: 3 }}>
      <p className="align-self-center m-0 px-1 py-2 border bg-light">
        {nameholder}
      </p>
      <div className="">
        <DatePicker
          className="p-2 input-width"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>
    </div>
  )
}

export default DateSelect
