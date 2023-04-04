import React, { useState } from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

const DateSelect = ({ nameholder }) => {
  const [startDate, setStartDate] = useState(new Date())
  return (
    <div className="d-flex">
      <p className="align-self-center m-0 px-1 py-2 border bg-light">
        {nameholder}
      </p>
      <DatePicker
        className="p-2"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    </div>
  )
}

export default DateSelect
