import Button from './button';
import React from 'react';

export default class ProfilePic extends React.Component {
  constructor(props) {
    super(props);
    this.state = { profileId: [] };
    this.fileInputRef = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch('/api/matchProfiles')
      .then(response => response.json())
      .then(profileData => {
        this.setState({ profileId: profileData[0].profileId });
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    const myForm = new FormData();
    myForm.append('image', this.fileInputRef.current.files[0]);
    myForm.append('profileId', `${this.state.profileId}`);
    fetch('/api/images', {
      method: 'POST',
      body: myForm
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ profileId: '' });
        this.fileInputRef.current.value = null;
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  render() {
    return (
      <div className="bgc-gradient">
        <div className="container">
          <div className="row min-vh-100 pb-5 justify-content-center align-items-center">
            <div className="col-12">
              <h1 className="text-center text-light mb-5">Make A Lasting Impression</h1>
              <form onSubmit={this.handleSubmit}>
                <div className="row justify-content-between align-items-center">
                  <label className='col-6 col-md-6'>
                    <input className="form-control text-muted rounded" type="file" name="image" accept=".png, .jpg, .jpeg, .gif" ref={this.fileInputRef} id="formFile" />
                  </label>
                  <div className="col-6 col-md-6">
                    <button type="submit" className="btn btn-outline-light col-12">Upload Picture</button>
                  </div>
                </div>
              </form>
              <div className="col col-lg-12 mt-5 text-center">
                <a href="#geolocation">
                  <Button classes={'btn btn-outline-light  col-8 col-sm-8 rounded-pill'} text={'Proceed'} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
