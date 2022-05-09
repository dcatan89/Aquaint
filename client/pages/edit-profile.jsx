import React, { useEffect, useState } from 'react';
import { Navigation, Form } from '../components';

export default function EditProfile(props) {
  const [user, setUserData] = useState(null);
  const [upload, setUpload] = useState(false);
  useEffect(() => {
    fetch(`/api/matchProfiles/${props.profileId}`)
      .then(res => res.json())
      .then(data => {
        setUserData(data);
      });
  }, [upload]);

  const editProfile = userData => {
    fetch(`/api/matchProfiles/${props.profileId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
      .then(response => response.json())
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const uploadFile = formData => {
    fetch('/api/images', {
      method: 'PATCH',
      body: formData
    })
      .then(response => response.json())
      .then(data => setUpload(!upload))
      .catch(error => {
        console.error('Error:', error);
      });
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
            <div className=" col-12 col-lg-6 rounded">
                <img key={user.image} className='rounded-circle' width={'1000px'} height={'1000px'} src={`${user.image}`} />
            </div>
          </div>
          }
          {user ? <Form uploadImg={uploadFile} onSubmit={editProfile} displaySex={user.displaySex} fullName={user.fullName} occupation={user.occupation} birthday={user.birthday} sex={user.sex} fact={user.fact} profileId={user.profileId} /> : null}
      </div>
    </div>
    </>
  );
}
