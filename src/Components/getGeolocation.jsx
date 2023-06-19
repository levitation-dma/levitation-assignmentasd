import React from 'react'
import { useGeolocated } from 'react-geolocated'

const Geolocation = ({ getData }) => {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false
      },
      userDecisionTimeout: 5000
    })
  return !isGeolocationAvailable ? (
    <div>Your browser does not support Geolocation</div>
  ) : !isGeolocationEnabled ? (
    <div>Geolocation is not enabled</div>
  ) : coords ? (
    <div className='grid grid-flow-col'>
      <h3>Latitude is : {coords.latitude}</h3>
      <h3>Longitude is : {coords.latitude}</h3>
      {getData(coords.latitude,coords.longitude)}
    </div>
  ) : (
    <div>Getting the location data&hellip; </div>
  )
}
export default Geolocation
