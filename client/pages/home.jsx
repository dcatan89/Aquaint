import React, { useEffect, useState } from 'react';
import { Navigation, Jumbotron } from '../components';

export default function Home(props) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch('/api/matchProfiles')
      .then(response => response.json())
      .then(profileData => {
        const newProfile = profileData;
        const userProfile = newProfile.shift();
        setUser(userProfile);
      });
  }, []);
  return (
    <div className='bgc-gradient-4 vh100'>
      <Navigation class='box-sh-b' />
      <div className="container height250px vh100 bgc-gradient-4">
        <div className=" d-flex align-items-center all-height">
          <div className="col-12 d-flex align-items-center">
            { user && <Jumbotron header={'There\'s 7 Billion People in the World'} profileId={user.profileId} text='It is time to Aquaint Yourself' text2='Time to Grow Your Circle' button='Begin Here' /> }
            </div>
        </div>
      </div>
    </div>
  );
}
