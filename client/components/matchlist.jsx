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
        <li className="row justify-content-space-evenly mb-3 mt-3 border-bottom border-light" key={profile.profileId}>
          <div className="col-6 row justify-content-center col-lg-4">
            <div className="col-6 ">
              <img className="max-height-100px rounded-circle" src={profile.image}></img>
            </div>
          </div>
          <div className="col-6 col-lg-4 text-light">
            <h3>{profile.fullName}</h3>
          </div>
          <div className="col-12 col-lg-4 text-light">
          {profile.cityName}
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
