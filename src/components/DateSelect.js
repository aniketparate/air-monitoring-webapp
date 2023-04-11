import React from 'react'
import DatePicker from 'react-datepicker'
import './../App.css'
import 'react-datepicker/dist/react-datepicker.css'

const DateSelect = ({ nameholder, handleDate, selectedDate }) => {
  return (
    <div className="d-flex date-cont-center" style={{ zIndex: 3 }}>
      <p className="align-self-center m-0 px-1 py-2 border bg-light">
        {nameholder}
      </p>
      <div className="">
        <DatePicker
          dateFormat="dd/MM/yyyy"
          className="p-2 input-width"
          selected={selectedDate}
          onChange={handleDate}
        />
      </div>
    </div>
  )
}

export default DateSelect
