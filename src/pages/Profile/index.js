import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Profile = props => {
  const [profile, setProfile] = useState({
    username: 'cesar',
    email: 'cmejia@gmail.com',
  })

  const handleChange = e => {
    const { name, value } = e.target
    setProfile({ ...profile, [name]: value })
  }

  return (
    <Container>
      <div className='profile-details'>
        <div className='details-left'>
          <img
            className='profile-image'
            src='https://robohash.org/nesciunteaiusto.png?size=300x300&set=set1'
            alt='avatar'
          />
        </div>
        <div className='details-right'>
          <p className='username'>Cesar</p>
          <label className='edit-photo-label' htmlFor='edit-photo'>
            Change Profile Photo
          </label>
          <input id='edit-photo' type='file' />
        </div>
      </div>
      <form className='profile-form' onSubmit={() => {}}>
        <div className='input-wrapper'>
          <label className='input-label' htmlFor='username'>
            Username
          </label>
          <input
            id='username'
            type='text'
            name='username'
            value={profile.username}
            onChange={handleChange}
          />
        </div>
        <div className='input-wrapper'>
          <label className='input-label' htmlFor='email'>
            Email
          </label>
          <input
            id='email'
            type='email'
            name='email'
            value={profile.email}
            onChange={handleChange}
          />
        </div>
        <button className='btn-submit' type='submit'>
          Submit
        </button>
      </form>
    </Container>
  )
}

Profile.propTypes = {}

export default Profile

const Container = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  padding: 10px;
  .profile-details {
    border: 1px solid blue;
    display: flex;
    margin-bottom: 10px;
  }

  .details-left {
    border: 1px solid green;
    width: 50px;
    height: 50px;

    .profile-image {
      width: 100%;
      border-radius: 50%;
      border: 1px solid red;
    }
  }

  .details-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10px;

    .username {
      margin-bottom: 5px;
    }

    .edit-photo-label {
      font-size: 1.4rem;
      color: #3897f0;
      font-weight: bold;
    }
    #edit-photo {
      display: none;
    }
  }
`
