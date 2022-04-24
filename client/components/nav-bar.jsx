import React from 'react';

export default function Nav(props) {
  return (
      <nav className={`navbar navbar-dark border-bottom border-light  ${props.class}`}>
        <a className="navbar-brand" href="#">Aquaint</a>
      </nav>
  );
}
