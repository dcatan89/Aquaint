import React from 'react';
import { Navbar, Offcanvas, Container } from 'react-bootstrap';

const navProfileStyles = {
  position: 'absolute',
  right: 0
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
              <div className=' row justify-content-end navbar-nav col-4' style={navProfileStyles} >
                <span className='text-light col-9 align-self-center text-end'>{`Hello, ${props.fullName}`}</span>
              <a href={`#matchProfile?profileId=${props.profileId}`} className="col-3 py-2">
                  <img src={ props.image} className='rounded-circle col-12 border-white' />
                </a>
              </div>
            </div>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>

          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
