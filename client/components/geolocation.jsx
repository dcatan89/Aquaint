import { Map, GoogleApiWrapper, Marker, Circle } from 'google-maps-react';
import React from 'react';

const mapStyles = {
  width: '100%',
  height: '100%'
};
export class Geolocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: 33.634940430843194, lng: -117.74014631397628, enabled: false, city: null, state: null };
    this.enableLocation = this.enableLocation.bind(this);
    this.renderLocation = this.renderLocation.bind(this);
  }

  componentDidMount() {
    const map = navigator.geolocation;
    if (map) {
      map.getCurrentPosition(position =>
        this.setState({ lat: position.coords.latitude, lng: position.coords.longitude })
      );
    }
  }

  enableLocation(e) {
    const { lat, lng } = this.state;
    this.setState({ enabled: true });
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

  renderLocation() {
    const { city, state } = this.state;
    return (
      <div className='row justify-content-center'>
        <div className=" text-center col-12 col-md-12">
          <button className='btn btn-outline-light col-8 col-md-6'>{`${city} , ${state}`}</button>
        </div>
      </div>
    );
  }

  render() {
    const { enabled, lng, lat } = this.state;
    let button;

    if ((lng || lat) === null) {
      button = <button className='btn btn-outline-dark col-8 col-md-6' disabled onClick={this.enableLocation}>Enable Location</button>;
    } else {
      button = <button className='btn btn-outline-light col-8 col-md-6' onClick={this.enableLocation}>Enable Location</button>;
    }

    return (
      <div className='bgc-gradient min-100vh'>
        <div className="bgc=gradient">
          <div className='row justify-content-center'>
            <div className=" text-center col-12 col-md-12">
              {button}
            </div>
          </div>
          { enabled
            ? this.renderLocation()
            : null
        }
        </div>
      { enabled
        ? (<div className=" bgc-gradient small-height">
            <div className=' row justify-content-center small-height'>
              <Map google={this.props.google} zoom={14} style={mapStyles} initialCenter={{ lat, lng }} center={{ lat, lng }}>
                <Marker position={{ lat, lng }} onClick={this.onMarkerClick} name={'You'}/>
                <Circle radius={1000} center={{ lat, lng }} strokeOpacity={0} strokeWeight={5} fillColor='#FF0000' fillOpacity={0.2} />
              </Map>
              </div>
            </div>
          )
        : null
  }
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: `${process.env.REACT_APP_API_KEY}`
})(Geolocation);
