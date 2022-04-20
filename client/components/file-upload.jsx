import Button from './button';
import React from 'react';

export default class ProfilePic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.fileInputRef = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const myForm = new FormData();

    myForm.append('image', this.fileInputRef.current.files[0]);

    fetch('/api/images', {
      method: 'POST',
      body: myForm
    })
      .then(response => response.json())
      .then(data => {
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
                    <input
                      id="bttn"
                      className='text-light'
                      required
                      type="file"
                      name="image"
                      ref={this.fileInputRef}
                      accept=".png, .jpg, .jpeg, .gif"
                    />
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
