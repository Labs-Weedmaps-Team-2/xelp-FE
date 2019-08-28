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
      <div className='user-details'>
        <div className='user-avatar'>
          <img
            className='user-image'
            src='https://robohash.org/nesciunteaiusto.png?size=300x300&set=set1'
            alt='avatar'
          />
        </div>
        <div className='username-wrapper'>
          <p className='username'>Cesar</p>
          <a className='edit-photo' href='#'>
            Change Profile Photo
          </a>
        </div>
      </div>
      <form onSubmit={() => {}}>
        <div>
          <label htmlFor='username'>Username</label>
          <input
            id='username'
            type='text'
            name='username'
            value={profile.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            type='email'
            name='email'
            value={profile.email}
            onChange={handleChange}
          />
        </div>
        <buttom type='submit'>Submit</buttom>
      </form>
    </Container>
  )
}

Profile.propTypes = {}

export default Profile

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  padding: 20px;
  .user-details {
    display: flex;
  }
  .user-avatar {
    width: 50px;
    height: 50px;
  }
  .user-image {
    width: 100%;
    border-radius: 50%;
    border: 1px solid red;
  }
  .username-wrapper {
    padding-left: 20px;
    .username {
      margin-bottom: 5px;
    }
    .edit-photo {
    }
  }
`
