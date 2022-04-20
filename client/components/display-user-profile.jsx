import React from 'react';

export default class DisplayProfile extends React.Component {
  componentDidMount() {
    fetch('/api/userProfiles')
      .then(response => response.json())
      .then(profileData => profileData);

    fetch('/api/images')
      .then(response => response.json())
      .then(imgData => imgData);
  }

  render() {
    return <h1 className="text-light">Hello World</h1>;
  }
}
