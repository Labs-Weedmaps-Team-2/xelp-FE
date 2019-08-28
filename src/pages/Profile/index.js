import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { btnBg } from 'styles'
import PropTypes from 'prop-types'

const url = 'http://localhost:3000/api/v1/users/1'

const Profile = props => {
  const [profile, setProfile] = useState({
    username: 'cesar',
    email: 'cmejia@gmail.com',
  })

  useEffect(() => {
    axios.get(url).then(res => {
      console.log(res.data)
    })
  }, [])

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
          <label htmlFor='username'>Username</label>
          <input
            id='username'
            type='text'
            name='username'
            value={profile.username}
            onChange={handleChange}
          />
        </div>
        <div className='input-wrapper'>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            type='email'
            name='email'
            value={profile.email}
            onChange={handleChange}
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </Container>
  )
}

Profile.propTypes = {}

export default Profile

const Container = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  padding: 15px;

  /* PROFILE-DETAILS */
  .profile-details {
    /* border: 1px solid blue; */
    display: flex;
    margin: 0px 0px 20px;
  }

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

    #edit-photo {
      display: none;
    }
  }

  /* PROFILE-FORM */
  .profile-form {
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;

    .input-wrapper {
      display: flex;
      flex-direction: column;
      margin: 0px 0px 10px;

      label {
        margin: 0px 0px 8px;
        font-size: 1.6rem;
        font-weight: bold;
      }

      input {
        font-size: 1.6rem;
        padding: 0px 10px;
        border: 1px solid #efefef;
        border-radius: 3px;
        height: 32px;
      }
    }

    button {
      border-radius: 4px;
      color: #ffffff;
      background-color: ${btnBg};
      padding: 5px 9px;
      font-size: 1.4rem;
      line-height: 1.8rem;
      width: 70px;
      align-self: center;
      margin: 10px 0px;
    }
  }
`
