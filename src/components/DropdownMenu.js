import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import '../App.css'

const Dropdownmenu = ({ nameholder, options, placeholder }) => {
  return (
    <div className="d-flex">
      <p className="align-self-center m-0 px-1 py-2 border bg-light">
        {nameholder}
      </p>
      <Dropdown
        className="dropdown-width"
        options={options}
        placeholder={placeholder}
      />
    </div>
  )
}

export default Dropdownmenu
