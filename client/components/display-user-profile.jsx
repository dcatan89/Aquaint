import React from 'react';

export default class DisplayProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { img: '' };
  }

  componentDidMount() {
    fetch('/api/userProfiles')
      .then(response => response.json())
      .then(profileData => profileData);

    fetch('/api/images')
      .then(response => response.json())
      .then(imgData =>
        this.setState({ img: imgData.image }));
  }

  render() {
    const { img } = this.state;
    return (
    <>
    <h1 className="text-light">Hello World</h1>
    <img src={`${img}`}></img>
    </>
    );
  }
}
