import React, { useState } from 'react';

export default function UserForm(props) {
  const userData = {
    fullName: `${props.fullName}`,
    occupation: `${props.occupation}`
  };
  const [value, onSubmit] = useState({ name: userData.fullName, occupation: userData.occupation });

  return (
    <form onSubmit={onSubmit} >
      <input defaultValue={value.name} name='fullName' className="form-control form-control-lg" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example" />
      <input defaultValue={value.occupation} name='occupation' className="form-control form-control-lg" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example" />
    </form>
  );
}
