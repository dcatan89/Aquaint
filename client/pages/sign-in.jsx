import React from 'react';

export default function SignIn() {
  return (
    <div className="row justify-content-center align-items-center gap-2">
      <h1 className="col-sm-6 txt-center">AQUAINT</h1>
      <div className="row justify-content-center">
        <button type="button" className=" justify-center btn btn-outline-primary col-10 col-sm-6 rounded-pill">New User</button>
      </div>
      <div className="row justify-content-center">
        <a className="row justify-content-center" href="#">
          <button type="button" className=" justify-center btn btn-outline-primary col-10 col-sm-6 rounded-pill">Sign In</button>
        </a>
      </div>
    </div>
  );
}
