import React from 'react';

export default function SignIn() {
  return (
    <div className='bgc-gradient'>
      <div className="container vh100">
        <div className="row justify-content-center align-content-end half-height">
          <h1 className="col-sm-12 text-center text-light">AQUAINT</h1>
        </div>
        <div className="row justify-content-center align-content-start gap-3">
          <a className="row justify-content-center" href="#new-user">
            <button type="button" className=" justify-center btn btn-outline-light col-10 col-sm-6 rounded-pill">New User</button>
          </a>
          <a className="row justify-content-center" href="#make-profile">
            <button type="button" className=" justify-center btn btn-outline-light col-10 col-sm-6 rounded-pill">Sign In</button>
          </a>
        </div>
      </div>
    </div>
  );
}
