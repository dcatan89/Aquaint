import React from 'react';

export default class CreateAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.openModal = this.openModal.bind(this);
  }

  openModal(e) {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  render() {
    return (
      <>
    <Modal />
    <SignIn click={this.openModal}/>
</>
    );
  }
}

function Modal(props) {
  return (
    <div className="overlay hidden">
      <div className=" row justify-content-center align-items-center all-height">
        <div className=" col-12 col-lg-6 bg-light height250px">
            <h1 className="text-dark text-center">Modal</h1>
        </div>
      </div>
    </div>
  );
}

function SignIn(props) {
  return (
    <div className='bgc-gradient vh100'>
      <div className="container row justify-content-center align-items-center height500px">
        <div className="row justify-content-center align-items-center">
          <h1 className="col-12 text-center text-light">AQUAINT</h1>
          <div className="col-12 row gap-3 ">
            <a className="row justify-content-center" href="#make-profile">
              <button type="button" className="btn btn-outline-light col-10 col-sm-6 rounded-pill">New User</button>
            </a>
            <a className="row justify-content-center" href="#sign-in">
              <button type="button" onClick={props.click} className="btn btn-outline-light col-10 col-sm-6 rounded-pill">Sign In</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
