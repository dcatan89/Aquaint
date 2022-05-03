import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
export default class Matches extends React.Component {
  constructor(props) {
    super(props);
    this.state = { matches: [] };
  }

  componentDidMount() {
    fetch(`/api/matchedlist/${this.props.profileId}`)
      .then(response => response.json())
      .then(profileData => {
        this.setState({ matches: profileData });
      });
  }

  componentDidUpdate() {
    fetch(`/api/matchedlist/${this.props.profileId}`)
      .then(response => response.json())
      .then(profileData => {
        this.setState({ matches: profileData });
      });
  }

  removeFriends(remove) {
    fetch('/api/matches', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(remove)
    })
      .then(response => response.json());
  }

  render() {
    const { matches } = this.state;

    if (matches.length === 0) {
      return (
        <div className="row justify-content-center align-items-center height250px">
          <h3 className="col-12 col-lg-8 text-light text-center">Currently Have No Matches</h3>
          <div className="col-12 text-center col-lg-6">
            <a href="#aquaint">
              <button className="btn btn-outline-light">Try Your Luck Today</button>
            </a>
          </div>
        </div>
      );
    }
    const matchList = matches.map(profile => {
      return (
        <li className="row justify-content-between mb-3 mt-3 border-bottom  border-light" key={profile.matchId}>
          <UserProfiles profile={profile} user={this.props.profileId} onClick={this.removeFriends}/>
        </li>
      );
    });
    return (
      <ul>
      {matchList}
      </ul>
    );
  }
}

function UserProfiles(props) {
  const { profileId, fullName, image } = props.profile;
  const [isOpen, setOpen] = useState(false);

  const handleOpen = e => {
    setOpen(true);
  };
  const handleClose = e => setOpen(false);

  const deleteFriend = e => {
    setOpen(false);
    const removedData = {
      requestedProfileId: Number(`${props.user}`),
      acceptedProfileId: profileId
    };
    props.onClick(removedData);
  };

  return (
    <>
        <Modal show={isOpen} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="text-muted">{`Remove ${fullName} From Your Friendslist`}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="d-flex justify-content-center text-muted">Confirming will remove your friend</Modal.Body>
          <Modal.Footer className="d-flex justify-content-start" >
          <Button className="col-2 btn-light btn-outline-danger" onClick={deleteFriend}> Confirm</Button>
            <Button className="col-2 justify-self-end" onClick={handleClose}>Cancel</Button>
          </Modal.Footer>
        </Modal>
      <div style={{ position: 'relative' }} className="col-5 row justify-content-center col-lg-4">
        <button onClick={handleOpen} type="button" style={{ background: 'transparent', border: 'none', position: 'absolute', top: 0, left: 25 }} className="close, col-2" aria-label="Close">
          <span className='text-light font-md' aria-hidden="true">&times;</span>
        </button>
        <div className="col-8 col-lg-8 mb-3">
          <img className="max-height-100px rounded-circle col-12 col-lg-8" src={image}></img>
        </div>
      </div>
      <div className="col-5 col-lg-4 text-light row justify-content-center align-items-center">
        <h3>{fullName}</h3>
      </div>
      <div className="col-2 col-lg-4 text-light row align-items-center">
        <a href={`#matchlist?profileId=${profileId}`} className='text-light'>
          <h5 className="fas fa-chevron-right col-12 d-flex justify-content-end"></h5>
        </a>
      </div>
    </>
  );
}
