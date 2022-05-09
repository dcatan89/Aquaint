import React, { useState } from 'react';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';

export default function UserForm(props) {
  const [profId] = useState(props.profileId);
  const [userName, setName] = useState(props.fullName);
  const [userJob, setJob] = useState(props.occupation);
  const [userFact, setFact] = useState(props.fact);
  const [userBday, setBday] = useState(props.birthday);
  const [userSex, setSex] = useState(props.sex);
  const [displaySex, setDisplaySex] = useState(props.displaySex);
  const [file, setFile] = useState(null);
  const fileInputRef = React.createRef();

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

  const uploadImage = e => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append('image', fileInputRef.current.files[0]);
    myForm.append('profileId', `${profId}`);
    props.uploadImg(myForm);
  };

  return (
    <>
      <form onSubmit={uploadImage}>
        <div className="row justify-content-center mb-3">
          <div className="col-12 col-lg-6 align-self-center text-center">
            <input onChange={() => setFile(true)}id="icon-button-file" name="image" type="file" accept=".png, .jpg, .jpeg, .gif" ref={fileInputRef} style={{ display: 'none' }} />
            <label htmlFor="icon-button-file">
              <IconButton color="primary" aria-label="upload picture" component="span">
                <PhotoCamera />
              </IconButton>
            </label>
          </div>
          <div className=" col-12 col-lg-6 text-center">
            {file ? <h3 className="text-light">Ready for Upload</h3> : null}
            <button onClick={props.onClick} className='btn btn-outline-light rounded' type='submit'>Upload Photo</button>
          </div>
        </div>
      </form>
    <form onSubmit={handleSubmit} >
      <div className="row justify-content-center mb-3">
        <div className="col-12 col-lg-6 align-self-center">
          <h5 className='text-light text-center'><label htmlFor='fullName'> Your Name</label></h5>
        </div>
        <div className="col-12 col-md-9 col-lg-6">
          <input className="form-control form-control-lg" onChange={ e => setName(e.target.value)} defaultValue={userName} name='fullName' id='fullName' type="text" placeholder="Enter Your Name" aria-label=".form-control-lg example" />
        </div>
      </div>
      <div className="row justify-content-center mb-3">
        <div className="col-12 col-lg-6 align-self-center">
          <h5 className='text-light text-center'><label htmlFor='job'> Your Occupation</label></h5>
        </div>
        <div className="col-12 col-md-9 col-lg-6">
          <input onChange={e => setJob(e.target.value)} defaultValue={userJob} id='job' name='occupation' className="form-control form-control-lg" type="text" placeholder="Your Occupation" aria-label=".form-control-lg example" />
        </div>
      </div>
      <div className="row justify-content-center mb-3">
        <div className="col-12 col-lg-6 align-self-center">
          <h5 className='text-light text-center'><label htmlFor='fact'> Your Surprising Fact</label></h5>
        </div>
        <div className="col-12 col-md-9 col-lg-6">
          <input onChange={e => setFact(e.target.value)} defaultValue={userFact} id="fact" name='fact' className="form-control form-control-lg" type="text" placeholder="Write Down an Interesting Fact" aria-label=".form-control-lg example" />
        </div>
      </div>
      <div className="row justify-content-center mb-3">
        <div className="col-12 col-lg-6 align-self-center">
          <h5 className='text-light text-center'><label htmlFor='bday'> Your Birthday</label></h5>
        </div>
        <div className="col-12 col-md-9 col-lg-6">
          <input onChange={e => setBday(e.target.value)} defaultValue={userBday} name='bday' className="form-control form-control-lg" type="text" placeholder="MM/DD/YYYY" aria-label=".form-control-lg example" />
        </div>
      </div>
      <div className="row justify-content-center mb-3">
        <div className="col-12 col-lg-6 align-self-center">
          <h5 className='text-light text-center'><label htmlFor='sex'> What is Your Sex?</label></h5>
        </div>
        <div className="col-12 col-md-9 col-lg-6">
          <input onChange={e => setSex(e.target.value)} defaultValue={userSex} id='sex' name='sex' className="form-control form-control-lg" type="text" placeholder="What is your gender?" aria-label=".form-control-lg example" />
        </div>
      </div>
      <div className="row justify-content-center mb-3">
        {
        displaySex
          ? <input className='col-1 align-self-center' type="checkbox" defaultChecked onClick={e => setDisplaySex(!displaySex)} value={displaySex} />
          : <input className='col-1 align-self-center' type="checkbox" onClick={e => setDisplaySex(!displaySex)} value={displaySex} />
        }
        <span className='col-10 col-lg-5 px-0 text-center text-light'>*Checking will display your sex on your profile</span>
      </div>
      <div className="col-12 row justify-content-center pb-3">
        <button className='btn btn-outline-light rounded-pill col-8 col-lg-4' >Update Profile</button>
      </div>
    </form>
    </>
  );
}
