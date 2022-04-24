import React from 'react';
import { Nav, DisplayProfile } from '../components';

export default function MatchingProfiles(props) {
  return (
      <div className='bg-dark vh100'>
        <div className="container">
          <Nav class='box-sh-b' />
          <div className=" d-flex align-items-center all-height">
            <div className="col-12 d-flex align-items-center">
              <DisplayProfile onSubmit={props.onSubmit}/>
            </div>
          </div>
        </div>
      </div>
  );
}
