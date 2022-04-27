import React, { useState } from 'react';

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
    <div className="container-fluid">
      <nav className={`navbar navbar-dark navbar-expand-md border-bottom border-light justify-content-between ${this.props.class}`}>
          <a className="navbar-brand ms-1" href="#">Aquaint</a>
        <CollapsedNavBar />
        <div className={'collapse navbar-collapse'} id="navbarNavAltMarkup">
          <div className="navbar-nav ">
            <a className="nav-item nav-link active text-light" href="#">Home</a>
            <a className="nav-item nav-link active text-light" href="#aquaint">Match</a>
            <a className="nav-item nav-link active text-light" href="#matchedlist">Matchlist</a>
          </div>
          <div className=' row justify-content-end navbar-nav col-4' style={navProfileStyles} >
            <span className='text-light col-9 align-self-center text-end'>{`Hello, ${fullName}`}</span>
            <a href={`#matchlist?profileId=${profileId}`} className="col-3 py-2">
              <img src={image} className='rounded-circle col-12 border-white' />
            </a>
          </div>
        </div>
      </nav>
    </div>
    );
  }
}

function CollapsedNavBar() {
  const [show, setShow] = useState(false);

  const openCanvas = () => setShow(!show);

  return (
    <>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" onClick={openCanvas} data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    {
    show === false
      ? null
      : (
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
        <button type="button" className="btn-close text-reset" onClick={openCanvas} data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
        )
}
    </>
  );
}
