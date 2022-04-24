import React from 'react';
import { Nav, Matches } from '../components';

export default function MatchedList() {

  return (
  <div className='bg-dark vh100'>
    <Nav class='box-sh-b' />
    <div className="container all-height">
      <h1 className="text-light  text-center">Matches</h1>
      <Matches />
    </div>
  </div>
  );
}
