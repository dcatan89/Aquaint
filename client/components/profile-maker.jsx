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

export default class MakeProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      value: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(e) {
    const form = document.querySelector('form');
    const { index } = this.state;
    index > 4
      ? this.setState({ index: 0 })
      : this.setState({ index: this.state.index + 1 });
    form.reset();
    e.preventDefault();
  }

  render() {
    const { index } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <h1 className="text-center col-sm-6" >{topicsArr[index]}</h1>
            <div className='col-sm-6'>
              <input onChange={this.handleChange} required className="form-control form-control" type="text" placeholder={inputsArr[index]} aria-label=".form-control" />
            </div>
          </div>
          <div className="row col justify-content-center align-items-center text-center">
            <div>
              <Button type={'submit'} click={this.handleSubmit} classes={'btn btn-outline-light bgc-gradient col-6 col-sm-6 rounded-pill'} text={'Continue'} />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
