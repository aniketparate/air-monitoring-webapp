import Tab1 from './Tab1'
import Tab2 from './Tab2'

import React, { useState } from 'react'

const View2 = () => (
  <div>
    View 2 <br />
    {/* <button onClick={() => onClick('view1')}>Go to view 1</button> */}
    <p>Inside view 2</p>
  </div>
)

const Navbar = ({ handleDate, selectedDate, date }) => {
  const [currentView, setCurrentView] = useState(1)

  return (
    <div>
      <nav class="navbar bg-info">
        <form class="container-fluid justify-content-around">
          <button
            class="btn btn-outline-success me-2 text-dark"
            type="button"
            onClick={() => setCurrentView(1)}
          >
            Historic Data
          </button>
          <button
            class="btn btn-outline-success me-2 text-dark"
            type="button"
            onClick={() => setCurrentView(2)}
          >
            Sensor Data
          </button>
        </form>
      </nav>

      {currentView === 1 ? (
        <Tab1 handleDate={handleDate} selectedDate={selectedDate} date={date} />
      ) : (
        ''
      )}
      {currentView === 2 ? <Tab2 /> : ''}
    </div>
  )
}

export default Navbar
