import React from 'react';
import SignIn from './pages/sign-in';
import Home from './pages/home';
import { parseRoute } from './lib';
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
      return <SignIn/>;
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
      <div className="container">
        {this.renderPage()}
      </div>
    );
  }
}
