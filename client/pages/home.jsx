import React from 'react';
import { Nav, DisplayProfile } from '../components';

export default function Home(props) {
  return (
    <div className='bg-dark'>
      <div className="container vh100">
        <Nav/>
        <DisplayProfile/>
      </div>
    </div>
  );
}
