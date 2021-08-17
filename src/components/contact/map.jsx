import GoogleMapReact  from 'google-map-react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";
import React from "react";

const LocationMap = (props) => {
  const data = props.data;
  const lat = parseFloat(data && data.acf && data.acf.field_map_gps && data.acf.field_map_gps.split(";")[0]);
  const lng = parseFloat(data && data.acf && data.acf.field_map_gps && data.acf.field_map_gps.split(";")[1]); 
  return (
    <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY}}
          defaultCenter={{lat: lat, lng: lng}}
          defaultZoom={18}
        >
        </GoogleMapReact>
      </div>
  );
};

LocationMap.propTypes = {
	data: PropTypes.object
}
export default withRouter(LocationMap);
