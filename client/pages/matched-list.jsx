import React from 'react';
import { Navigation, Matches } from '../components';

export default function MatchedList(props) {

  return (
    <div className='bgc-gradient-4 vh100'>
    <Navigation class='box-sh-b' />
      <div className="container bgc-gradient-4 all-height overflow-hidden">
      <h1 className="text-light mt-1  text-center">Matches</h1>
        <hr className="my-3 text-light" />
      <Matches profileId={props.profileId}/>
    </div>
  </div>
  );
}
