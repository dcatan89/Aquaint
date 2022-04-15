import React from 'react';

export default function SignIn() {
  return (
    <div className='bgc-gradient'>
      <div className="container row align-items-center">
        <div className="row">
          <div className="col">
            <img src={''} ></img>
          </div>
        </div>
        <div className="row justify-content-center align-items-center gap-2">
          <h1 className="col-sm-6 text-center text-light">AQUAINT</h1>
          <div className="row justify-content-center">
            <a className="row justify-content-center" href="#new-user">
              <button type="button" className=" justify-center btn btn-outline-light col-10 col-sm-6 rounded-pill">New User</button>
            </a>
          </div>
          <div className="row justify-content-center">
            <a className="row justify-content-center" href="#">
              <button type="button" className=" justify-center btn btn-outline-light col-10 col-sm-6 rounded-pill">Sign In</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
