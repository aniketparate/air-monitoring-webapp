import 'bootstrap/dist/css/bootstrap.min.css'
import DropdownArea from './components/DropdownArea'
import MapBarsArea from './components/MapBarsArea'
import Navbar from './components/Navbar'
import './App.css'
import { useState } from 'react'

const App = () => {
  const [currentView, setCurrentView] = useState(1)
  const [startDate, setStartDate] = useState(new Date())

  // DateSelect
  const reg1 = /^(\d{1})\/(\d{1})\/(\d{4})$/ // d/m/yyyy
  const reg2 = /^(\d{1})\/(\d{2})\/(\d{4})$/ //d/mm/yyyy
  const reg3 = /^(\d{2})\/(\d{1})\/(\d{4})$/
  const reg4 = /^(\d{2})\/(\d{2})\/(\d{4})$/
  var date = startDate.toLocaleDateString()
  var newDate
  if (reg1.test(date)) {
    newDate = date.replace(reg1, '0$1-0$2-$3')
    console.log(newDate)
  } else if (reg2.test(date)) {
    newDate = date.replace(reg2, '0$1-$2-$3')
    console.log(newDate)
  } else if (reg3.test(date)) {
    newDate = date.replace(reg3, '$1-0$2-$3')
    console.log(newDate)
  } else {
    newDate = date.replace(reg4, '$1-$2-$3')
    console.log(newDate)
  }

  const handleDate = (d) => {
    setStartDate(d)
  }

  return (
    <div className="App">
      <Navbar handleDate={handleDate} selectedDate={startDate} date={newDate} />
      {/* <DropdownArea handleDate={handleDate} selectedDate={startDate} />
      <MapBarsArea date={newDate} /> */}
    </div>
  )
}

export default App
