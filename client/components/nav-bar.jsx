import React, { useState } from 'react';
import { Navbar, Offcanvas, Container, CloseButton } from 'react-bootstrap';

const navProfileStyles = {
  position: 'absolute',
  right: 5
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
    <Navbar bg="dark" className='border-bottom border-light navbar-expand-md' expand={false}>
      <Container fluid>
        <Navbar.Brand href="#" className="text-light">Aquaint</Navbar.Brand>
            <div className={'collapse navbar-collapse'} id="navbarNavAltMarkup">
              <div className="navbar-nav ">
                <a className="nav-item nav-link active text-light" href="#">Home</a>
                <a className="nav-item nav-link active text-light" href="#aquaint">Match</a>
                <a className="nav-item nav-link active text-light" href="#matchedlist">Matchlist</a>
              </div>
              <div className=' row justify-content-end navbar-nav col-4 border-primary' style={navProfileStyles} >
                <span className='text-light col-8 align-self-center text-end'>{`Hello, ${props.fullName}`}</span>
                <a className="col-4 p-4 rounded-circle cursor-pointer" onClick={handleOpen}>
                  <img src={props.image} className='rounded-pill col-12 col-lg-8 border-white' />
                </a>
              </div>
            </div>
        <Navbar.Toggle onClick={handleOpen} className= 'text-light btn-light border-light' aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas show={show} onClick={handleClose} className='bg-dark' id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end">
          <Offcanvas.Header className='text-light' >
            <Offcanvas.Title id="offcanvasNavbarLabel" className="col-12 row justify-content-center"><h2 className='text-center'>Aquaint</h2></Offcanvas.Title>
            <CloseButton onClick={handleClose} variant="white" />
          </Offcanvas.Header>
          <Offcanvas.Body className='text-center max-height-100px pb-0'>
            <div className=' row justify-content-center col-12 col-lg-12 border-primary max-height-100px me-1' >
              <a className="col-3 col-lg-6  px-1 cursor-pointer">
                <img src={props.image} className='rounded  col-12 col-lg-6 border-white' />
              </a>
            </div>
            <p className="text-center text-muted cursor-pointer col-12 "><small className="hover-white me-4">View Profile</small></p>
          </Offcanvas.Body>
          <Offcanvas.Body className="pt-0">
            <ul className="navbar-nav justify-content-end text-light flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link text-light bg-hover-light" aria-current="page" href="#">
                  <h3 className='hover-blue'>Home</h3>
                </a>
              </li>
              <li className="nav-item text-light">
                <a className="nav-link text-light bg-hover-light" aria-current="page" href="#aquaint">
                  <h3 className='hover-blue'>Match</h3>
                </a>
              </li>
              <li className="nav-item text-light">
                <a className="nav-link text-light bg-hover-light" aria-current="page" href="#matchedlist">
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
