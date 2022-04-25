import React from 'react';
import { Nav } from '../components';
import { calculateAge } from '../lib';

export default class FriendsProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: null
    };
  }

  componentDidMount() {
    fetch(`/api/matchlist/${this.props.profileId}`)
      .then(res => res.json())
      .then(profile => this.setState({ profile }));
  }

  render() {
    if (!this.state.profile) return null;
    const { fullName, birthday, image, fact, occupation, cityName } = this.state.profile;
    return (
    <div className="bg-dark vh100">
      <Nav />
      <div className="container  all-height">
        <div className="row justify-content-center mt-3 align-items-center">
          <div className="card border-light d-flex justify-content-center text-center bg-secondary mb-3">
              <div className=" row justify-content-center overflow-hidden col-12  p-3">
                <img className="card-img-top text=center rounded col-12 max-height-450px col-lg-12 object-contain all-height" src={image} alt={fullName}/>
              </div>
              <div className="card-body">
                <h3 className="card-title text-light">{`${fullName} (${calculateAge(birthday)}), ${cityName}`}</h3>
                <hr className='my-4 text-dark'/>
                <div className="row justify-content-center mt-3 gap-3">
                  <div className="col-12 col-lg-8">
                    <h4 className="card-text text-light">What Do You Do for a living?</h4>
                    <p className="card-text text-light">{occupation}</p>
                  </div>
                  <div className="col-12 col-lg-8">
                    <h4 className="card-text text-light">What is one Interesting Fact About Yourself?</h4>
                    <p className="card-text text-light">{fact}</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
