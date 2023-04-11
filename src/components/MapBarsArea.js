import { useRef, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import mapDetail from './mapDetail'
import BarChart from './BarChart'
import '../App.css'
import '../style/map.css'
import '../../node_modules/leaflet/dist/leaflet.css'

const MapBarsArea = ({ date }) => {
  const [center, setCenter] = useState({ lat: 19.07715, lng: 72.866408 })
  const zoomLevel = 13
  const mapRef = useRef()
  const kurlaPos = [19.085952, 72.888366]
  const CSairportPos = [19.100598, 72.874473]
  const chakalaAndheriPos = [19.107241, 72.864135]

  return (
    <div className="row p-5">
      <div className="col text-center" style={{ zIndex: 0 }}>
        <MapContainer
          center={center}
          zoom={zoomLevel}
          scrollWheelZoom={false}
          ref={mapRef}
        >
          <TileLayer url={mapDetail.url} attribution={mapDetail.attribution} />
          <Marker alt="" position={kurlaPos}>
            <Popup>Kurla, Mumbai - MPCB</Popup>
          </Marker>
          <Marker alt="" position={CSairportPos}>
            <Popup>Chhatrapati Shivaji Intl. Airport (T2), Mumbai - MPCB</Popup>
          </Marker>
          <Marker alt="" position={chakalaAndheriPos}>
            <Popup>Chakala-Andheri East, Mumbai - IITM</Popup>
          </Marker>
        </MapContainer>
      </div>
      <div className="col bar-height">
        <div className="row">
          <BarChart date={date} attr={'PM2_5'} />
        </div>
        <div className="row">
          <BarChart date={date} attr={'PM10'} />
        </div>
        <div className="row">
          <BarChart date={date} attr={'NO'} />
        </div>
        <div className="row">
          <BarChart date={date} attr={'NO2'} />
        </div>
        <div className="row">
          <BarChart date={date} attr={'SO2'} />
        </div>
        <div className="row">
          <BarChart date={date} attr={'CO'} />
        </div>
        <div className="row">
          <BarChart date={date} attr={'Ozone'} />
        </div>
      </div>
    </div>
  )
}

export default MapBarsArea
