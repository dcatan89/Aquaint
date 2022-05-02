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
    <>
    <Navigation />
    <div className="bgc-gradient-3 vh100">
      <div className="container ">
        <div className="row">
          <h1 className="col-12 text-light text-center"> Updating Profile</h1>
        </div>
        <hr className="my-3" />
        {user &&
          <div className="row justify-content-center">
            <div className="col-6 rounded">
              <img className='rounded-circle' width={'1000px'} height={'1000px'} src={user.image} />
            </div>
          </div>
          }
        {user ? <Form onSubmit={editProfile} displaySex={user.displaySex} fullName={user.fullName} occupation={user.occupation} birthday={user.birthday} sex={user.sex} fact={user.fact} profileId={user.profileId} /> : null}
      </div>
    </div>
    </>
  );
}
