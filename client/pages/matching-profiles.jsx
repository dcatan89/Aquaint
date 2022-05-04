import React from 'react';
import { Navigation, DisplayProfile } from '../components';

export default function MatchingProfiles(props) {
  return (
      <div className='bg-dark vh100'>
        <Navigation class='box-sh-b' />
        <div className="container">
          <div className=" d-flex align-items-center all-height">
            <div className="col-12 d-flex align-items-center">
              <DisplayProfile profileId={props.profileId} onSubmit={props.onSubmit}/>
            </div>
          </div>
        </div>
      </div>
  );
}
