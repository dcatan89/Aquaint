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

export default class MakeProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
    this.handleIndexChange = this.handleIndexChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleIndexChange(e) {
    const { index } = this.state;
    index > 4
      ? this.setState({ index: 0 })
      : this.setState({ index: this.state.index + 1 });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    const { index } = this.state;
    return (
      <div className="container">
        <form>
          <div className="row">
            <h1 className="text-center col-sm-6" >{topicsArr[index]}</h1>
            <div className='col-sm-6'>
              <input className="form-control form-control" type="text" placeholder="First Name" aria-label=".form-control" />
            </div>
          </div>
          <div className="row col justify-content-center align-items-center text-center">
            <div>
              <Button type={'submit'} submit={this.handleSubmit} click={this.handleIndexChange} classes={'btn btn-outline-light bgc-gradient col-6 col-sm-6 rounded-pill'} text={'Continue'} />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
