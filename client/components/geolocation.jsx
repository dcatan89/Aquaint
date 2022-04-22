import { Map, GoogleApiWrapper, Marker, Circle } from 'google-maps-react';
import Radar from 'radar-sdk-js';
import React from 'react';
import Nav from './nav-bar';

const mapStyles = {
  position: 'relative',
  width: '100%',
  height: '100%'
};

const style = {
  width: '100%',
  height: '100%'
};

Radar.initialize(process.env.REACT_APP_RADAR_KEY);

export class Geolocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: 33.634940430843194, lng: -117.74014631397628, enabled: false, city: null, state: null };
    this.enableLocation = this.enableLocation.bind(this);
    this.renderLocation = this.renderLocation.bind(this);
    this.submitLocations = this.submitLocations.bind(this);
  }

  enableLocation(e) {
    const { lat, lng } = this.state;
    const map = navigator.geolocation;
    this.setState({ enabled: true });
    if (map) {
      map.getCurrentPosition(position =>
        this.setState({ lat: position.coords.latitude, lng: position.coords.longitude })
      );
    }
    fetch(`https://api.radar.io/v1/geocode/reverse?coordinates=${lat},${lng}`,
      {
        headers: {
          Authorization: `${process.env.REACT_APP_RADAR_KEY}`,
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => (
        this.setState({ city: data.addresses[0].city, state: data.addresses[0].stateCode })
      )
      );
  }

  submitLocations(e) {
    const { city, state, lat, lng } = this.state;
    e.preventDefault();
    const locationsData = {
      cityName: `${city},${state}`,
      lat,
      lng
    };
    this.props.onSubmit(locationsData);
    this.setState({ lat: 33.634940430843194, lng: -117.74014631397628, enabled: false, city: null, state: null });
    location.hash = '#';
  }

  renderLocation() {
    const { city, state } = this.state;
    return (
      <>
        <div className='row justify-content-center'>
          <div className="text-center col-12 col-md-12">
            <h1 className='text-light text-center col-12 col-md-12'>{` Your Location: ${city} , ${state}`}</h1>
          </div>
        </div>
        <form onSubmit={this.submitLocations}>
          <div className='row justify-content-center'>
            <div className=" text-center col-12 col-md-12 mb-5 mt-5">
                <button className='btn btn-outline-light col-8 col-md-6'>Aquaint Yourself (Continue to Home Page)</button>
            </div>
          </div>
        </form>
      </>
    );
  }

  render() {
    const { enabled, lng, lat } = this.state;
    let hidden;
    enabled
      ? hidden = 'hidden'
      : hidden = '';
    return (
      <div className='bgc-gradient vh100'>
        <div className="container">
          <Nav />
          <div className={`row justify-content-center ${hidden}`}>
            <div className=" text-center col-12 col-md-12">
              <button className='btn btn-outline-light col-8 col-md-6 mt-5 mb-5' onClick={this.enableLocation}>Enable Location</button>
            </div>
            <div className="col-6 col-lg-8">
              <p className="text-center text-light" >*Your Locations Services need to be turned on for this to workout</p>
            </div>
          </div>
          { enabled
            ? this.renderLocation()
            : null
        }
            <div className=' row justify-content-center vh100'>
            <div className="col-12">
                <Map google={this.props.google} zoom={14} containerStyle={mapStyles} style={style} initialCenter={{ lat, lng }} center={{ lat, lng }}>
                  <Marker position={{ lat, lng }} onClick={this.onMarkerClick} name={'You'} />
                  <Circle radius={1000} center={{ lat, lng }} strokeOpacity={0} strokeWeight={5} fillColor='#FF0000' fillOpacity={0.2} />
                </Map>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: `${process.env.REACT_APP_API_KEY}`
})(Geolocation);
