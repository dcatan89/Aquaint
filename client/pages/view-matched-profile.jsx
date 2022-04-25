import React from 'react';

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
    const { profile } = this.state;
    return <h1 className="textlight">{profile}</h1>;
  }
}
