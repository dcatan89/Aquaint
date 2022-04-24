import React from 'react';

export default function Nav(props) {
  return (
    <div className="container">
    <nav className={`navbar navbar-dark navbar-expand-lg border-bottom border-light  ${props.class}`}>
        <a className="navbar-brand ms-1" href="#">Aquaint</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav text-light">
          <a className="nav-item nav-link active text-light" href="#">Home <span className="sr-only"></span></a>
            <a className="nav-item nav-link active text-light" href="#matchedlist">Matches <span className="sr-only"></span></a>
        </div>
      </div>
      </nav>
    </div>
  );
}
