import DropdownArea from './DropdownArea'
import MapBarsArea from './MapBarsArea'

const Tab1 = ({ handleDate, selectedDate, date }) => {
  return (
    <div>
      <DropdownArea handleDate={handleDate} selectedDate={selectedDate} />
      <MapBarsArea date={date} />
    </div>
  )
}

export default Tab1
