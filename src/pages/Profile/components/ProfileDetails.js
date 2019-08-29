import React from 'react'
import styled from 'styled-components'

const ProfileDetails = props => {
  return (
    <StyledProfileDetails>
      <div className='details-left'>
        <img className='profile-image' src={props.photo} alt='avatar' />
      </div>
      <div className='details-right'>
        <p className='username'>{props.username}</p>
        <label className='edit-photo-label' htmlFor='edit-photo-input'>
          Change Profile Photo
        </label>
        <input id='edit-photo-input' type='file' />
      </div>
    </StyledProfileDetails>
  )
}

export default ProfileDetails

/* PROFILE-DETAILS */
const StyledProfileDetails = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  margin: 0px 0px 20px;

  .details-left {
    /* border: 1px solid green; */
    width: 50px;
    height: 50px;

    .profile-image {
      /* border: 1px solid red; */
      width: 100%;
      border-radius: 50%;
    }
  }

  .details-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10px;

    .username {
      margin: 0px 0px 5px;
    }

    .edit-photo-label {
      font-size: 1.4rem;
      color: #3897f0;
      font-weight: bold;
    }

    #edit-photo-input {
      display: none;
    }
  }
`
