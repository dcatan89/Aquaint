import React from 'react';

export default function Nav() {
  return (
    <>
      <nav className="navbar navbar-dark ">
        <a className="navbar-brand" href="#">Aquaint</a>
        <a className="nav-link active" href="#">Active</a>
        <a className="nav-link" href="#">Link</a>
        <a className="nav-link" href="#">Link</a>
        <a className="nav-link disabled" href="#">Disabled</a>
      </nav>
    </>
  );
}
