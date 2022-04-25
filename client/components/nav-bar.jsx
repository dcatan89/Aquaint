import React from 'react';

const navProfileStyles = {
  position: 'absolute',
  right: 0
};
export default class Nav extends React.Component {
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
    <div className="container">
    <nav className={`navbar navbar-dark navbar-expand-lg border-bottom border-light justify-content-between ${this.props.class}`}>
        <a className="navbar-brand ms-1" href="#">Aquaint</a>
        <button className={'navbar-toggler'} type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={'collapse navbar-collapse'} id="navbarNavAltMarkup">
        <div className="navbar-nav text-light">
          <a className="nav-item nav-link active text-light" href="#">Home <span className="sr-only"></span></a>
            <a className="nav-item nav-link active text-light" href="#aquaint">Match <span className="sr-only"></span></a>
          <a className="nav-item nav-link active text-light" href="#matchedlist">Matchlist <span className="sr-only"></span></a>
        </div>
            <div className=' row justify-content-end navbar-nav col-4' style={navProfileStyles} >
          <span className='text-light col-9 align-self-center text-end'>{`Hello, ${fullName}`}</span>
          <a href={`#matchlist?profileId=${profileId}`} className="col-3">
            <img src={image} className='rounded-circle col-10' />
          </a>
        </div>
      </div>
      </nav>
    </div>
    );
  }
}
