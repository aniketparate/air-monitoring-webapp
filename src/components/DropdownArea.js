import Dropdownmenu from './DropdownMenu'
import DateSelect from './DateSelect'

const DropdownArea = () => {
  return (
    <div className="d-flex justify-content-around">
      <Dropdownmenu
        nameholder={'State'}
        options={['Maharashtra']}
        placeholder={'Select a State'}
      />
      <Dropdownmenu
        nameholder={'City'}
        options={['Mumbai']}
        placeholder={'Select a District'}
      />
      <Dropdownmenu
        nameholder={'Station'}
        options={['']}
        placeholder={'Select a Station'}
      />
      <DateSelect nameholder={'Date'} />
    </div>
  )
}

export default DropdownArea
