import React from 'react';

export default function Jumbotron(props) {

  return (
    <div className="jumbotron all-height">
      <h1 className="display-4 text-light text-center">{props.header}</h1>
      <p className="lead text-light text-center">{props.text}</p>
      <hr className="my-4 text-light" />
        <div className="lead d-flex mb-4">
          <div className="col-6 col-sm-4 text-center ">
            <a className="btn btn-outline-light btn-lg col-10 col-md-8 " href={`#aquaint?profileId=${props.profileId}`} role="button">{props.button}</a>
          </div>
          <p className="text-light text-center col-6 mb-0 col-sm-8  align-self-center">{props.text2}</p>
        </div>
    </div>
  );
}
