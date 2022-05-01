import React, { useState } from 'react';

export default function UserForm(props) {
  const [profId] = useState(props.profileId);
  const [userName, setName] = useState(props.fullName);
  const [userJob, setJob] = useState(props.occupation);
  const [userFact, setFact] = useState(props.fact);
  const [userBday, setBday] = useState(props.birthday);
  const [userSex, setSex] = useState(props.sex);
  const [displaySex, setDisplaySex] = useState(props.displaySex);
  const handleSubmit = e => {
    e.preventDefault();
    location.hash = `matchProfile?profileId=${profId}`;
    const userData = {
      fullName: userName,
      occupation: userJob,
      fact: userFact,
      birthday: userBday,
      sex: userSex,
      profileId: profId,
      displaySex: displaySex
    };
    props.onSubmit(userData);
  };
  return (
    <form onSubmit={handleSubmit} >
      <div className="row">
        <h1 className="col-12 text-light text-center"> Updating Profile</h1>
      </div>
      <hr className="my-3"/>
      <div className="row justify-content-center mb-3">
        <div className="col-12 col-lg-6 align-self-center">
          <h5 className='text-light text-center'><label htmlFor='fullName'> Your Name</label></h5>
        </div>
        <div className="col-12 col-md-9 col-lg-6">
          <input className="form-control form-control-lg" onChange={ e => setName(e.target.value)} defaultValue={userName} name='fullName' id='fullName' type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example" />
        </div>
      </div>
      <div className="row justify-content-center mb-3">
        <div className="col-12 col-lg-6 align-self-center">
          <h5 className='text-light text-center'><label htmlFor='job'> Your Occupation</label></h5>
        </div>
        <div className="col-12 col-md-9 col-lg-6">
          <input onChange={e => setJob(e.target.value)} defaultValue={userJob} id='job' name='occupation' className="form-control form-control-lg" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example" />
        </div>
      </div>
      <div className="row justify-content-center mb-3">
        <div className="col-12 col-lg-6 align-self-center">
          <h5 className='text-light text-center'><label htmlFor='fact'> Your Surprising Fact</label></h5>
        </div>
        <div className="col-12 col-md-9 col-lg-6">
          <input onChange={e => setFact(e.target.value)} defaultValue={userFact} id="fact" name='fact' className="form-control form-control-lg" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example" />
        </div>
      </div>
      <div className="row justify-content-center mb-3">
        <div className="col-12 col-lg-6 align-self-center">
          <h5 className='text-light text-center'><label htmlFor='bday'> Your Birthday</label></h5>
        </div>
        <div className="col-12 col-md-9 col-lg-6">
          <input onChange={e => setBday(e.target.value)} defaultValue={userBday} name='bday' className="form-control form-control-lg" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example" />
        </div>
      </div>
      <div className="row justify-content-center mb-3">
        <div className="col-12 col-lg-6 align-self-center">
          <h5 className='text-light text-center'><label htmlFor='sex'> What is Your Sex?</label></h5>
        </div>
        <div className="col-12 col-md-9 col-lg-6">
          <input onChange={e => setSex(e.target.value)} defaultValue={userSex} id='sex' name='sex' className="form-control form-control-lg" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example" />
        </div>
      </div>
      <div className="row justify-content-center mb-3">
        {
        displaySex
          ? <input className='col-1 align-self-center' type="checkbox" defaultChecked onClick={e => setDisplaySex(!displaySex)} value={displaySex} />
          : <input className='col-1 align-self-center' type="checkbox" onClick={e => setDisplaySex(!displaySex)} value={displaySex} />
        }
        <span className='col-5 px-0 text-light'>*Checking will display your sex on your profile</span>
      </div>
      <div className="col-12 row justify-content-center mb-3">
        <button className='btn btn-outline-light rounded-pill col-4' >Update Profile</button>
      </div>
    </form>
  );
}
