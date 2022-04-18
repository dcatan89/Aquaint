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
  'fact'
];
const newProfile = {};
export default class MakeProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      value: '',
      isClicked: false
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
    newProfile[inputsArr[index]] = value;
    this.setState({ index: this.state.index + 1 });
    this.setState({ value: '' });
    form.reset();
  }

  handleProfileSubmit(e) {
    this.setState({
      index: this.state.index + 1,
      isClicked: true
    });
    this.props.onSubmit(newProfile);
    e.preventDefault();
  }

  renderButton() {
    const { index, isClicked } = this.state;
    if (index > 4) {
      return (
            <div className="container">
              <form onSubmit={this.handleProfileSubmit}>
                <div className="row half-height justify-content-center align-items-center">
                  <h1 className="text-center text-light col-sm-6 font-lg" >{!isClicked ? 'Confirming Profile' : 'Profile Confirmed'}</h1>
                </div>
                 {
                !isClicked
                  ? (<div className="col col-lg-12 text-center">
                    <Button type={'submit'} classes={'btn btn-outline-light  col-6 col-sm-6 rounded-pill'} text={'Confirm'} />
                  </div>
                    )
                  : null
                }
              </form>
              {
              isClicked
                ? (
                <div className="col col-lg-12 text-center">
                  <a href="#FILE">
                    <Button classes={'btn btn-outline-light  col-6 col-sm-6 rounded-pill'} text={'Proceed'} />
                  </a>
                 </div>
                  )
                : null
              }
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
              <Button type={'submit'} classes={'btn btn-outline-light col-6 col-sm-6 rounded-pill'} text={'Continue'} />
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
