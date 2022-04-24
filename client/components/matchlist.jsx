import React from 'react';

export default class Matches extends React.Component {
  constructor(props) {
    super(props);
    this.state = { matches: [] };
  }

  componentDidMount() {
    fetch('/api/matchlist')
      .then(response => response.json())
      .then(profileData => {
        this.setState({ matches: profileData });
      });
  }

  render() {
    const { matches } = this.state;
    const matchList = matches.map(profile => {
      return (
        <li className="row justify-content-between mb-3 mt-3 border-bottom  border-light" key={profile.profileId}>
          <div className="col-5 row justify-content-center col-lg-4">
            <div className="col-8 col-lg-8 mb-3">
              <img className="max-height-100px rounded-circle col-12 col-lg-8" src={profile.image}></img>
            </div>
          </div>
          <div className="col-5 col-lg-4 text-light row justify-content-center align-items-center">
            <h3>{profile.fullName}</h3>
          </div>
          <div className="col-2 col-lg-4 text-light row align-items-center">
            <a href="#matchedlist" className='text-green'>
              <h5 className="fas fa-chevron-right col-12 d-flex justify-content-end"></h5>
            </a>
          </div>
        </li>
      );
    });
    return (
      <ul>
      {matchList}
      </ul>
    );
  }
}
