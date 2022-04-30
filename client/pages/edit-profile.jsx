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

  const editProfile = userData => {
    fetch(`/api/matchProfiles/${props.profileId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
      .then(response => response.json());
  };
  return (
    <div className="bgc-gradient-3 vh100">
      <Navigation />
      <div className="container vh100">
        {user ? <Form onSubmit={editProfile} fullName={user.fullName} occupation={user.occupation} birthday={user.birthday} sex={user.sex} fact={user.fact} profileId={user.profileId} /> : null}
        {user && <img width={'1000px'} height={'1000px'} src={user.image}/>}
      </div>
    </div>
  );
}
