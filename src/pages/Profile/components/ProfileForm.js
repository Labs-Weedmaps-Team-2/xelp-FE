import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { btnBg } from 'styles'
import axios from 'api/axiosApi'

const ProfileForm = props => {
  const [profile, setProfile] = useState({
    username: '',
    email: '',
    photo: '',
  })

  useEffect(() => {
    axios
      .get(`/users/1`)
      .then(res => {
        setProfile({ ...res.data })
      })
      .catch(err => console.log(err))
  }, [])

  const handleChange = e => {
    const { name, value } = e.target
    setProfile({ ...profile, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    axios
      .put(`/users/1`, profile)
      .then(res => {
        setProfile({ ...res.data })
      })
      .catch(err => console.log(err))
  }

  return (
    <StyledProfileForm onSubmit={handleSubmit}>
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
    </StyledProfileForm>
  )
}

export default ProfileForm

const StyledProfileForm = styled.form`
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
      width: 270px;
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
`
