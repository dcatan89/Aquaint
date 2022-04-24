import React from 'react';

export default class Matches extends React.Component {
  constructor(props) {
    super(props);
    this.state = { matches: [], img: '' };
  }

  componentDidMount() {
    fetch('/api/matchlist')
      .then(response => response.json())
      .then(profileData => {
        const newData = profileData;
        newData.shift();
        this.setState({ matches: profileData });
      });
  }

  render() {
    const { matches } = this.state;
    const matchList = matches.map(profile => {
      return (
        <div key={profile.profileId} className="row align-items-center height50px border-top border-light">
          <li className='text-light'>
            <span>{profile.fullName}</span>
          </li>
        </div>
      );
    });
    return (
      <ul>
        {matchList}
      </ul>
    );
  }
}
