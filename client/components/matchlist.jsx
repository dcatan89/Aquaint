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
        this.setState({ matches: profileData, img: profileData[0].image });
      });
  }

  render() {
    const { img } = this.state;
    return (
      <ul>
        <li>
          <img src={img}></img>
        </li>
      </ul>
    );
  }
}
