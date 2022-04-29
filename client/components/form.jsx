import React, { useState } from 'react';

export default function UserForm(props) {
  const [value] = useState({ name: props.fullName, occupation: props.occupation, fact: props.fact, birthday: props.birthday, sex: props.sex, profileId: props.profileId });
  const handleSubmit = e => {
    e.preventDefault();
    location.hash = `matchProfile?profileId=${value.profileId}`;
  };
  return (
    <form onSubmit={handleSubmit} >
      <input defaultValue={value.name} name='fullName' className="form-control form-control-lg" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example" />
      <input defaultValue={value.occupation} name='occupation' className="form-control form-control-lg" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example" />
      <input defaultValue={value.fact} name='occupation' className="form-control form-control-lg" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example" />
      <input defaultValue={value.birthday} name='occupation' className="form-control form-control-lg" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example" />
      <input defaultValue={value.sex} name='occupation' className="form-control form-control-lg" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example" />
      <button>Edit Profile</button>
    </form>
  );
}
