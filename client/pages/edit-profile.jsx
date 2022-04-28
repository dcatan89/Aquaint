import React, { useEffect, useState } from 'react';
import { Navigation, Form } from '../components';

export default function EditProfile(props) {
  const [user, setUserData] = useState(null);

  useEffect(() => {
    fetch(`/api/matchProfiles/${props.profileId}`)
      .then(res => res.json())
      .then(data => {

        setUserData(data);
      });
  }, []);

  return (
    <div className="bgc-gradient-3 vh100">
      <Navigation />
      <div className="container">
        {user ? <Form fullName={user.fullName} occupation={user.occupation} /> : null}
        {user && <img width={'1000px'} height={'1000px'} src={user.image}></img>}
      </div>
    </div>
  );
}
