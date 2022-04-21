import React from 'react';
import { Nav, Jumbotron } from '../components';

export default function Home(props) {
  return (
    <div className='bg-dark vh100'>
      <div className="container all-height">
        <Nav/>
        <div className=" d-flex align-items-center all-height">
          <div className="col-12 col-lg-12">
            <Jumbotron header={'There\'s 7 Billion People in the World'} text='It is time to Aquaint Yourself' text2=' Make Friends Here' button='Start Here' />
          </div>
        </div>
      </div>
    </div>
  );
}
