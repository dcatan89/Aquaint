import React from 'react';
import { Nav, DisplayProfile } from '../components';

export default function Home(props) {
  return (
    <>
    <div className='bg-dark'>
      <div className="container">
        <Nav />
        <DisplayProfile/>
        <div className="row justify-content-center align-items-center">
          <h1 className="text-center">
              <a href='#sign-in'>Back</a>
            </h1>
        </div>
      </div>
    </div>
    </>
  );
}
