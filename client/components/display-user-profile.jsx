import React from 'react';
import { calculateAge } from '../lib';

export default class DisplayProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { img: '', profile: '', index: 1 };
    this.changeIndex = this.changeIndex.bind(this);
  }

  componentDidMount() {
    fetch('/api/userProfiles')
      .then(response => response.json())
      .then(profileData => {
        this.setState({ profile: profileData[0] });
      });

    fetch('/api/images')
      .then(response => response.json())
      .then(imgData => {
        this.setState({ img: imgData[0].image });
      });
  }

  changeIndex(e) {
    const { index } = this.state;
    this.setState({ index: index + 1 });
    fetch('/api/userProfiles')
      .then(response => response.json())
      .then(profileData => {
        this.setState({ profile: profileData[index] });
      });
    fetch('/api/images')
      .then(response => response.json())
      .then(imgData => {
        this.setState({ img: imgData[index].image });
      });
  }

  render() {
    const { img, profile } = this.state;
    return (
      <div className="row border pb-3 rounded">
      <h1 className="text-light border-bottom col-12 col-lg-12 text-center ">{profile.fullName}</h1>
      <div className="col-12 col-sm-8 col-lg-6">
        <img className="mb-1 all-height rounded" src={img}></img>
      </div>
        <div className="col-12 bgc-gradient-2 rounded border col-md-4 col-lg-6">
          <h1 className="text-light ">{`Age:${calculateAge(profile.birthday)}`}
            <span className='ms-5'>{` Sex:${profile.sex}`}</span>
          </h1>
          <h1 className="text-light mt-5">What is one Surprising Fact?</h1>
          <div className="text-light">{profile.fact}</div>
          <h1 className="text-light mt-5">What Do You Do?</h1>
          <div className="text-light">{profile.occupation}</div>
          <div className="col text-center">
            <button onClick={this.changeIndex} className="btn btn-outline-light rounded-pill">NEXT</button>
          </div>
        </div>
    </div>
    );
  }
}
