import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

const Dropdownmenu = ({ nameholder, options, placeholder }) => {
  //   const options = ['one', 'two', 'three']

  //   const defaultOption = 'Select State'

  return (
    <div className="d-flex">
      <p className="align-self-center m-0 px-1 py-2 border bg-light">
        {nameholder}
      </p>
      <Dropdown options={options} placeholder={placeholder} />
    </div>
  )
}

export default Dropdownmenu
