import React, { useState } from 'react';

export default function UserForm(props) {
  const [profId] = useState({ profileId: props.profileId });
  const [userName, setName] = useState({ name: props.fullName });
  const [userJob, setJob] = useState({ occupation: props.occupation });
  const [userFact, setFact] = useState({ fact: props.fact });
  const [userBday, setBday] = useState({ birthday: props.birthday });
  const [userSex, setSex] = useState({ sex: props.sex });

  const handleSubmit = e => {
    e.preventDefault();
    location.hash = `matchProfile?profileId=${profId.profileId}`;
    const userData = {
      fullName: userName,
      occupation: userJob,
      fact: userFact,
      birthday: userBday,
      sex: userSex,
      profileId: profId.profileId
    };
    props.onSubmit(userData);
  };
  return (
    <form onSubmit={handleSubmit} >
      <input onChange={ e => setName(e.target.value)} defaultValue={userName.name} name='fullName' className="form-control form-control-lg" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example" />
      <input onChange={e => setJob(e.target.value)} defaultValue={userJob.occupation} name='occupation' className="form-control form-control-lg" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example" />
      <input onChange={e => setFact(e.target.value)} defaultValue={userFact.fact} name='occupation' className="form-control form-control-lg" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example" />
      <input onChange={e => setBday(e.target.value)} defaultValue={userBday.birthday} name='occupation' className="form-control form-control-lg" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example" />
      <input onChange={e => setSex(e.target.value)} defaultValue={userSex.sex} name='occupation' className="form-control form-control-lg" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example" />
      <button>Edit Profile</button>
    </form>
  );
}
