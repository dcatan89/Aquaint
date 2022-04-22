import React from 'react';
import { calculateAge } from '../lib';

export default class DisplayProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { img: '', imgs: '', user: '', profile: '', index: 1, profiles: [], location: [], locations: [], userLocation: {} };
    this.submitMatch = this.submitMatch.bind(this);
  }

  componentDidMount() {
    fetch('/api/userProfiles')
      .then(response => response.json())
      .then(profileData => {
        const newProfile = profileData;
        const userProfile = newProfile.shift();
        this.setState({
          user: userProfile,
          profile: newProfile[0],
          profiles: newProfile
        });
      });

    fetch('/api/images')
      .then(response => response.json())
      .then(imgData => {
        const newImg = imgData;
        this.setState({
          img: newImg[0],
          imgs: newImg
        });
      });

    fetch('/api/locations')
      .then(response => response.json())
      .then(locationsData => {
        const newlocation = locationsData;
        const userLocation = newlocation.shift();
        this.setState({
          userLocation: userLocation,
          location: newlocation[0],
          locations: newlocation
        });
      });
  }

  submitMatch(e) {
    const { index, profiles, imgs, user, profile } = this.state;
    this.setState({
      index: index + 1,
      profile: profiles[index],
      img: imgs[index]
    });
    const matched = {
      isMatched: true,
      requestedProfileId: user.profileId,
      acceptedProfileId: profile.profileId
    };
    this.props.onSubmit(matched);
    e.preventDefault();
  }

  render() {
    const { img, profile } = this.state;
    if (profile === undefined) {
      return (
        <>
      <h1 className="text-light"> No more People in Your Area </h1>
        <a href="#">
          <button className="rounded-pill btn btn-outline-light">Back to Home Page</button>
        </a>
        </>
      );
    }
    return (
    <div className="row border pb-3 rounded">
      <h1 className="text-light border-bottom col-12 col-lg-12 text-center ">{profile.fullName}</h1>
      <div className="col-12 col-sm-8 col-lg-6">
        <img className="mb-1 all-height rounded" src={img.image}></img>
      </div>
      <div className="col-12 bgc-gradient-2 rounded  pr-4 col-md-4 col-lg-6">
        <h3 className="text-light">{`Age:${calculateAge(profile.birthday)}`}
          <span className='ms-5 '>{` Sex:${profile.sex}`}</span>
        </h3>
        <h1 className="text-light text-center mt-5">What is one Surprising Fact?</h1>
        <p className="text-light text-center">{profile.fact}</p>
        <h1 className="text-light text-center mt-5">What Do You Do?</h1>
        <p className="text-light text-center">{profile.occupation}</p>
        <div className="row justify-content-center">
          <button onClick={this.submitMatch} className="btn btn-outline-light col-2 text-center rounded-pill">&#10003;</button>
        </div>
      </div>
    </div>
    );
  }
}
