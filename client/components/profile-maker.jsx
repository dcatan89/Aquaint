import React from 'react';
import Button from './button';

const topicsArr = [
  'My Name is',
  'My Birthday is',
  'I am a',
  'My Occupation is',
  'What is one surprising fact',
  'Make a lasting Impression'
];

const inputsArr = [
  'fullName',
  'birthday',
  'sex',
  'occupation',
  'fact',
  'profilePic'
];

const profile = {};

export default class MakeProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      value: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderButton = this.renderButton.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(e) {
    const { index, value } = this.state;
    const form = document.querySelector('form');
    profile[inputsArr[index]] = value;
    this.setState({ index: this.state.index + 1 });
    this.setState({ value: ' ' });
    form.reset();
    e.preventDefault();
  }

  renderButton() {
    const { index } = this.state;
    if (index > 5) {
      return (
          <div className="container">
            <div className="row half-height justify-content-center align-items-center">
              <h1 className="text-center text-light col-sm-6 font-lg" >Profile Created</h1>
            </div>
            <a href="#" className="row">
              <div className="col col-lg-12 text-center">
                <Button classes={'btn btn-outline-light  col-6 col-sm-6 rounded-pill'} text={'Proceed'} />
              </div>
            </a>
          </div>
      );
    }
    return (
      <form className="container"onSubmit={this.handleSubmit}>
        <div className="row half-height align-items-center">
          <h1 className="text-center text-light col-sm-6 font-lg" >{topicsArr[index]}</h1>
          <div className='col-sm-6'>
            <input onChange={this.handleChange} required className="form-control form-control" type="text" placeholder={inputsArr[index]} aria-label=".form-control" />
          </div>
        </div>
        <div className="row justify-content-center align-items-center half-height">
          <div className="col text-center">
            <Button type={'submit'} click={this.handleSubmit} classes={'btn btn-outline-light col-6 col-sm-6 rounded-pill'} text={'Continue'} />
          </div>
        </div>
      </form>
    );
  }

  render() {
    return (
      <div className="bgc-gradient">
        {this.renderButton()}
      </div>
    );
  }
}
