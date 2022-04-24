import React from 'react';
import { Nav, Matches } from '../components';

export default function MatchedList() {

  return (
  <div className='bg-dark vh100'>
    <Nav class='box-sh-b' />
    <div className="container all-height overflow-hidden">
      <h1 className="text-light mt-1  text-center">Matches</h1>
        <hr className="my-3 text-light" />
      <Matches />
    </div>
  </div>
  );
}
