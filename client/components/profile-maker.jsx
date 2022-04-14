import React from 'react';

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
  }

  handleIndexChange(e) {
    const { index } = this.state;
    index > 4
      ? this.setState({ index: 0 })
      : this.setState({ index: this.state.index + 1 });
  }

  render() {
    const { index } = this.state;
    return (
      <h1 className="text-center" onClick={this.handleIndexChange}>{topicsArr[index]}</h1>
    );
  }
}
