import React from 'react';
import Button from './button';
import Nav from './nav-bar';

const topicsArr = [
  'My Name is',
  'My Birthday is',
  'I am a',
  'My Occupation is',
  'What is one surprising fact'
];

const placeHolderArr = [
  'First Name and Last Name',
  'MM/DD/YYYY',
  '...',
  '... Astronaut, A Good Friend',
  'Write Something Interesting'
];

const inputArr = [
  'fullName',
  'birthday',
  'sex',
  'occupation',
  'fact'
];

const newProfile = {};
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
    this.handleProfileSubmit = this.handleProfileSubmit.bind(this);
    this.fileInputRef = React.createRef();
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { index, value } = this.state;
    const form = document.querySelector('form');
    newProfile[inputArr[index]] = value;
    this.setState({ index: this.state.index + 1 });
    this.setState({ value: '' });
    form.reset();
  }

  handleProfileSubmit(e) {
    this.props.onSubmit(newProfile);
    location.hash = '#FILE';
    e.preventDefault();
  }

  renderButton() {
    const { index } = this.state;
    if (index > 4) {
      return (
            <div className="container vh100">
              <Nav />
              <form onSubmit={this.handleProfileSubmit}>
                <div className="row height250px justify-content-center align-items-center">
                  <h1 className="text-center text-light col-sm-6 font-lg" > Profile Confirmed</h1>
                </div>
                <div className="col col-lg-12 text-center">
                  <Button type={'submit'} classes={'btn btn-outline-light  col-6 col-sm-6 rounded-pill'} text={'Confirm'} />
                </div>
              </form>
            </div>
      );
    }
    return (
      <form className="container vh100"onSubmit={this.handleSubmit}>
        <Nav />
        <div className="row height250px align-items-center">
          <h1 className="text-center text-light col-sm-6 font-lg" >{topicsArr[index]}</h1>
          <div className='col-sm-6'>
            <input onChange={this.handleChange} required className="form-control form-control" type="text" placeholder={placeHolderArr[index]} aria-label=".form-control" />
          </div>
        </div>
        <div className="row justify-content-center align-items-center half-height">
            <div className="col text-center">
              <Button type={'submit'} classes={'btn btn-outline-light col-6 col-sm-6 rounded-pill'} text={'Continue'} />
            </div>
        </div>
      </form>
    );
  }

  render() {
    return (
      <div className="bgc-gradient vh100">
        {this.renderButton()}
      </div>
    );
  }
}
