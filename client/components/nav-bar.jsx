import React, { useState, useEffect } from 'react';
import { Navbar, Offcanvas, Container, CloseButton } from 'react-bootstrap';

const navProfileStyles = {
  position: 'absolute',
  right: 5
};

const iconStyles = {
  position: 'absolute'
};

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: [] };
  }

  componentDidMount() {
    fetch('/api/matchProfiles')
      .then(response => response.json())
      .then(profileData => {
        const newProfile = profileData;
        const userProfile = newProfile.shift();
        this.setState({ user: userProfile });
      });
  }

  render() {
    const { image, fullName, profileId } = this.state.user;
    return (
      <Nav2 image={image} fullName={fullName} profileId={profileId} />
    );
  }
}

function Nav2(props) {
  const [show, setShown] = useState(false);
  const handleClose = () => setShown(false);
  const handleOpen = () => setShown(true);
  return (
    <Navbar bg="dark" className='border-bottom border-light navbar-expand-md' expand={false} >
      <Container fluid>
        <Navbar.Brand href="#home" className="text-light">Aquaint</Navbar.Brand>
            <div className={'collapse navbar-collapse'} id="navbarNavAltMarkup">
              <div className="navbar-nav ">
                <a className="nav-item nav-link active text-light hover-blue" href="#home">
                  <p className='hover-blue mb-0'>Home</p>
                </a>
                <a className="nav-item nav-link active text-light hover-blue" href={`#aquaint?profileId=${props.profileId}`}>
                  <p className='hover-blue mb-0'>Match</p>
                </a>
                <a className="nav-item nav-link active text-light hover-blue" href={`#matchedlist?profileId=${props.profileId}`}>
                  <p className='hover-blue mb-0'>Matchlist</p>
                </a>
              </div>
              <ReverseGeoCode />
              <div className=' row justify-content-end navbar-nav col-4 border-primary' style={navProfileStyles} >
                <span className='text-light col-8 align-self-center text-end pe-0'>{`Hello, ${props.fullName}`}</span>
                <a className="col-4 p-4 rounded-circle cursor-pointer" onClick={handleOpen}>
              <img src={props.image} height={'50px'} width={'50px'} className='rounded-circle col-12 col-lg-6 border-white' />
                </a>
              </div>
            </div>
        <Navbar.Toggle variant='light' onClick={handleOpen} className= 'text-light btn-light border-light' aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas show={show} onClick={handleClose} className='bg-dark' id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end">
          <Offcanvas.Header className='text-light pb-0' >
            <Offcanvas.Title id="offcanvasNavbarLabel" className="col-12 row justify-content-center"><h2 className='text-center'>Aquaint</h2></Offcanvas.Title>
            <CloseButton onClick={handleClose} variant="white" />
          </Offcanvas.Header>
          <Offcanvas.Body className='text-center max-height-150px pb-0'>
            <div className=' row justify-content-center col-12 col-lg-12 border-primary max-height-125px me-1' >
              <a className="col-3 col-lg-6  px-1 cursor-pointer" href={`#edit?profileId=${props.profileId}`}>
                <svg style={iconStyles} onClick={() => { location.hash = 'edit'; }} className='svg-edit' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" width="30px" height="30px"><path fill="none" stroke="#F7F7F7" strokeMiterlimit="10" strokeWidth="2" d="M18.4,3.1L4,17.4V20h2.6L20.9,5.6V5.5L18.4,3.1L18.4,3.1z" /><path fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="2" d="M15.5,5.5l3,3" /></svg>
                <img src={props.image} height={'50px'} width={'50px'} className='rounded  col-12 col-lg-6 border-white' />
              </a>
            </div>
            <a className='col-4' href={`#matchProfile?profileId=${props.profileId}`}>
              <p className="text-center text-muted cursor-pointer col-12 "><small className="hover-white me-4">View Profile</small></p>
            </a>
          </Offcanvas.Body>
          <Offcanvas.Body className="pt-0">
            <ul className="navbar-nav justify-content-end text-light flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link text-light bg-hover-light" aria-current="page" href="#home">
                  <h3 className='hover-blue'>Home</h3>
                </a>
              </li>
              <li className="nav-item text-light">
                <a className="nav-link text-light bg-hover-light" aria-current="page" href={`#aquaint?profileId=${props.profileId}`}>
                  <h3 className='hover-blue'>Match</h3>
                </a>
              </li>
              <li className="nav-item text-light">
                <a className="nav-link text-light bg-hover-light" aria-current="page" href={`#matchedlist?profileId=${props.profileId}`}>
                  <h3 className='hover-blue'>Matchlist</h3>
                </a>
              </li>
            </ul>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

function ReverseGeoCode() {
  const [coords, setCoords] = useState(null);
  const [userLocation, setLocation] = useState(null);
  const [modal, setOpen] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(data => {
          setLocation(data.results);
        });
      setCoords({ lat: position.coords.latitude, lng: position.coords.longitude });
    });
  }, []);

  return (
  <>
  <div className="row align-items-center">
    <h5 className="text-light" style={{ position: 'absolute' }}>
      <i onClick={() => setOpen(!modal)} className=" text-right cursor-pointer fas fa-map-marker-alt">{coords && userLocation}</i>
    </h5>
  </div>
  </>
  );
}
