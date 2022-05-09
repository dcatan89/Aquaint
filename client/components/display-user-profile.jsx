import React from 'react';
import { calculateAge } from '../lib';

export default class DisplayProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: '', profile: '', index: 1, profiles: [] };
    this.submitMatch = this.submitMatch.bind(this);
    this.submitReject = this.submitReject.bind(this);
  }

  componentDidMount() {
    fetch(`/api/aquaint/${this.props.profileId}`)
      .then(response => response.json())
      .then(profileData => {
        const newProfile = profileData;
        this.setState({ profile: newProfile[0], profiles: newProfile });
      });

    fetch('/api/matchedlist')
      .then(response => response.json())
      .then(profileData => {
        const newProfile = profileData;
        const userProfile = newProfile.shift();
        this.setState({ user: userProfile });
      });
  }

  submitReject(e) {
    const { index, profiles } = this.state;
    this.setState({
      index: index + 1,
      profile: profiles[index]
    });
    e.preventDefault();
  }

  submitMatch(e) {
    const { index, profiles, profile } = this.state;
    this.setState({
      index: index + 1,
      profile: profiles[index]
    });
    const matched = {
      profileId: profile.profileId,
      acceptedProfileId: `${this.props.profileId}`
    };
    this.props.onSubmit(matched);
    e.preventDefault();
  }

  render() {
    const { profile, user } = this.state;
    if (profile === undefined) {
      return (
      <div className="height500 row align-items-center justify-content-center">
        <div className="col-12 ">
          <h1 className="text-light col-12 font-large text-center mb-3"> {`Hey ${user.fullName}, looks like there's no more people in ${user.cityName} `} </h1>
          <p className="text-light col-12 font-large text-center mb-3">Try Again Later</p>
          <div className="col-12  text-center mt-3">
            <a className="text-center" href="#home">
              <button className="rounded-pill btn btn-outline-light box-sh-b">Back to Home Page</button>
            </a>
          </div>
        </div>
      </div>
      );
    }
    return (
    <div className="row border mt-5 pb-3  rounded">
      <h1 className="text-light border-bottom col-12 col-lg-12 text-center ">{profile.fullName}</h1>
      <div className=" row  mb-2 col-12 col-sm-8 col-lg-6 pe-0">
        <div className=" align-self-center col-12 pt-2 pb-0 pe-0 ">
            <img className="mb-1 box-sh-b  col-12 rounded" src={profile.image}></img>
        </div>
      </div>
      <div className="col-12 pr-4 pt-2 col-md-4 col-lg-6">
        <div className='bgc-gradient-2 p-1 rounded col-12 box-sh-b'>
          <div className="row col-12 text-center">
            <h3 className="text-light ps-3">{`Age: ${calculateAge(profile.birthday)}`}
              <span className='ms-5 '>{` Sex: ${profile.sex}`}</span>
            </h3>
          </div>
          <h1 className="text-light text-center mt-5">What is one Surprising Fact?</h1>
          <p className="text-light text-center">{profile.fact}</p>
          <h1 className="text-light text-center mt-5">What Do You Do?</h1>
          <p className="text-light text-center">{profile.occupation}</p>
          <div className="row pb-1 gap-3 justify-content-center">
              <button onClick={this.submitReject} className="btn btn-outline-light col-2 text-center hover-red rounded-pill">&#10005;</button>
            <button onClick={this.submitMatch} className="btn btn-outline-light col-2 text-center hover-green rounded-pill">&#10003;</button>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
