import React from 'react';
import GoogleMapReact from 'google-map-react';
import classes from './map.module.css';
import FaMapMarkerAlt from 'react-icons/fa';

const LocationPin = ({ text }) => (
    <div className="pin">
        <p className={classes.pin-text}>{text}</p>
    </div>
)

const Map = ({ location, zoomLevel }) => (
    <div className={classes.map}>  
      <div className={classes.google__map}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyD8x-v8nmuq6lsF90vkKG2acrynDijLPrM' }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
);

export default Map;