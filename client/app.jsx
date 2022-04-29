import React from 'react';
import { SignIn, Home, MatchingProfiles, MatchedList, FriendsProfile, EditProfile } from './pages';
import { parseRoute } from './lib';
import { MakeProfile, ProfilePic, Geolocation } from './components';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userProfiles: [],
      locations: [],
      matches: [],
      user: [],
      images: [],
      route: parseRoute(window.location.hash)
    };
    this.addProfile = this.addProfile.bind(this);
    this.addLocation = this.addLocation.bind(this);
    this.addMatches = this.addMatches.bind(this);
    this.addUser = this.addUser.bind(this);
    this.addImage = this.addImage.bind(this);
  }

  componentDidMount() {
    window.onhashchange = e =>
      this.setState({ route: parseRoute(window.location.hash) });
  }

  addProfile(newProfile) {
    fetch('/api/matchProfiles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newProfile)
    })
      .then(response => response.json())
      .then(data => {
        const newProfile = this.state.userProfiles;
        const newestProfile = newProfile.concat(data);
        this.setState({ userProfiles: newestProfile });
      });
  }

  addLocation(locationData) {
    fetch('/api/locations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(locationData)
    })
      .then(response => response.json())
      .then(data => {
        const newLocation = this.state.locations.concat(data);
        this.setState({ locations: newLocation });
      });
  }

  addMatches(matched) {
    fetch('/api/matches', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(matched)
    })
      .then(response => response.json())
      .then(data => {
        const newMatches = this.state.matches.concat(data);
        this.setState({ matches: newMatches });
      });
  }

  addUser(user) {
    fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .then(data => {
        const newUser = this.state.user.concat(data);
        this.setState({ user: newUser });
      });
  }

  addImage(images) {
    fetch('/api/images/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(images)
    })
      .then(response => response.json())
      .then(data => {
        const newImages = this.state.images.concat(data);
        this.setState({ images: newImages });
      });
  }

  renderPage() {
    const { route } = this.state;

    if (route.path === '') {
      return <Home />;
    }
    if (route.path === 'sign-in') {
      return <SignIn onSubmit={this.addUser}/>;
    }
    if (route.path === 'make-profile') {
      return <MakeProfile onSubmit={this.addProfile} />;
    }
    if (route.path === 'FILE') {
      return <ProfilePic />;
    }
    if (route.path === 'geolocation') {
      return (
        <Geolocation onSubmit={this.addLocation}/>
      );
    }
    if (route.path === 'aquaint') {
      return (
        <MatchingProfiles onSubmit={this.addMatches}/>
      );
    }
    if (route.path === 'matchedlist') {
      return (
        <MatchedList />
      );
    }
    if (route.path === 'matchProfile') {
      const profileId = route.params.get('profileId');
      return <FriendsProfile profileId={profileId} />;
    }
    if (route.path === 'matchlist') {
      const profileId = route.params.get('profileId');
      return <FriendsProfile profileId={profileId} />;
    }
    if (route.path === 'edit') {
      const profileId = route.params.get('profileId');
      return <EditProfile profileId={profileId} />;
    }

    return (
      <div className="py-5">
        <h1 className="text-center text-danger">404 Page Not Found</h1>
        <a className="row justify-content-center" href="#"> Return </a>
      </div>
    );
  }

  render() {
    return (
      this.renderPage()
    );
  }
}
