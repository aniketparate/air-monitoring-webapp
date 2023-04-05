import Dropdownmenu from './DropdownMenu'
import DateSelect from './DateSelect'
import TimeSelect from './TimeSelect'
import '../App.css'

const DropdownArea = () => {
  return (
    <div className="respon-droparea">
      <div className="d-flex justify-content-around responsive-dropdownarea">
        <Dropdownmenu
          nameholder={'State'}
          options={['Maharashtra']}
          placeholder={'Select State'}
        />
        <Dropdownmenu
          nameholder={'City'}
          options={['Mumbai']}
          placeholder={'Select District'}
        />
        <Dropdownmenu
          nameholder={'Station'}
          options={[
            'Kurla, Mumbai',
            'Chhatrapati Shivaji Intl. Airport (T2), Mumbai',
            'Bandra Kurla Complex, Mumbai',
          ]}
          placeholder={'Select Station'}
        />
      </div>
      <div className="d-flex justify-content-around date-time-padding">
        <DateSelect nameholder={'Date'} />
        <TimeSelect nameholder={'Time'} />
      </div>
    </div>
  )
}

export default DropdownArea
