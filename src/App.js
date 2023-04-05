import 'bootstrap/dist/css/bootstrap.min.css'
import DropdownArea from './components/DropdownArea'
import Maps from './components/Maps'
import BarChart from './components/BarChart'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <DropdownArea />
      <Maps />
      <BarChart />
    </div>
  )
}

export default App
