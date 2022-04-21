import React from 'react';

export default function SignIn() {
  return (
    <div className='bgc-gradient vh100'>
      <div className="container row justify-content-center align-items-center height500px">
        <div className="row justify-content-center align-items-center">
          <h1 className="col-12 text-center text-light">AQUAINT</h1>
          <div className="col-12 row gap-3 ">
            <a className="row justify-content-center" href="#make-profile">
              <button type="button" className="btn btn-outline-light col-10 col-sm-6 rounded-pill">New User</button>
            </a>
            <a className="row justify-content-center" href="#login-screen">
              <button type="button" className="btn btn-outline-light col-10 col-sm-6 rounded-pill">Sign In</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
