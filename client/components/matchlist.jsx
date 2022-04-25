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
         <UserProfiles profile={profile} />
        </li>
      );
    });

    if (matches.length === 0) {
      return (
        <div className="row justify-content-center align-items-center height250px">
          <h3 className="col-12 col-lg-8 text-light text-center">Currently Have No Matches</h3>
          <div className="col-12 text-center col-lg-6">
            <a href="#aquaint">
              <button className="btn btn-outline-light">Try Your Luck Today</button>
            </a>
          </div>
        </div>
      );
    }
    return (
      <ul>
      {matchList}
      </ul>
    );
  }
}

function UserProfiles(props) {
  const { profileId, fullName, image } = props.profile;
  return (
    <>
      <div className="col-5 row justify-content-center col-lg-4">
        <div className="col-8 col-lg-8 mb-3">
          <img className="max-height-100px rounded-circle col-12 col-lg-8" src={image}></img>
        </div>
      </div>
      <div className="col-5 col-lg-4 text-light row justify-content-center align-items-center">
        <h3>{fullName}</h3>
      </div>
      <div className="col-2 col-lg-4 text-light row align-items-center">
        <a href={`#matchlist?profileId=${profileId}`} className='text-light'>
          <h5 className="fas fa-chevron-right col-12 d-flex justify-content-end"></h5>
        </a>
      </div>
    </>
  );
}
