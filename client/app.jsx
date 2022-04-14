import React from 'react';
import { SignIn, Home } from './pages';
import { parseRoute } from './lib';
import MakeProfile from './components/profile-maker';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash)
    };
  }

  componentDidMount() {
    window.onhashchange = e =>
      this.setState({ route: parseRoute(window.location.hash) });
  }

  renderPage() {
    const { route } = this.state;

    if (route.path === '') {
      return <Home />;
    }
    if (route.path === 'sign-in') {
      return <SignIn />;
    }
    if (route.path === 'make-profile') {
      return <MakeProfile />;
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
