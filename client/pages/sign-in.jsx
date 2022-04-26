import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

export default class CreateAccount extends React.Component {

  render() {
    return (
    <SignInModal />
    );
  }
}

function SignInModal(props) {
  const [show, setShow] = useState(false);
  const [shown, setShown] = useState(false);

  const handleOpen = () => setShown(true);

  const handleHide = () => setShown(false);
  const handleSubmit = () => {
    location.hash = '';
  };

  const completeRegistration = () => {
    location.hash = 'make-profile';
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className='bgc-gradient vh100'>
        <div className="container row justify-content-center align-items-center height500px">
          <div className="row justify-content-center align-items-center">
            <h1 className="col-12 text-center text-light">AQUAINT</h1>
            <div className="col-12 row gap-3 ">
              <a className="row justify-content-center" href="#sign-in">
                <button onClick={handleOpen} type="button" className="btn btn-outline-light col-10 col-sm-6 rounded-pill">New User</button>
              </a>
              <a className="row justify-content-center" href="#sign-in">
                <button type="button" onClick={handleShow} className="btn btn-outline-light col-10 col-sm-6 rounded-pill">Sign In</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <SignUpModal show={shown} onSubmit={completeRegistration} onHide={handleHide} />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='col-7 d-flex justify-content-end text-dark'>Sign in</Modal.Title>
        </Modal.Header>
      <Form>
        <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                Well never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" className='btn-outline-primary' onClick={handleSubmit}>
            Sign In
          </Button>
        </Modal.Footer>
      </Form>
      </Modal>
    </>
  );
}

function SignUpModal(props) {
  return (
  <Modal show={props.show} onHide={props.onHide}>
    <Modal.Header closeButton>
      <Modal.Title className='col-8 d-flex justify-content-end text-dark'>Register Now</Modal.Title>
    </Modal.Header>
    <Form>
      <Modal.Body>
        <Form.Group className="mb-2" controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="input" placeholder="First Name" />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="input" placeholder="Last Name" />
        </Form.Group>
          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Email Address" />
          </Form.Group>
          <Form.Group className="mb-2" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password (at least 8 characters)" />
          </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="light" className='btn-outline-primary' onClick={props.onSubmit}>
          Sign Up
        </Button>
      </Modal.Footer>
    </Form>
  </Modal>
  );
}
