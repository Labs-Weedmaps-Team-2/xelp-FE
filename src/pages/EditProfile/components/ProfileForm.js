import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { editUser } from 'actions'
import styled from 'styled-components'
import { btnBg } from 'styles'
import PulseLoader from 'react-spinners/PulseLoader'

const ProfileForm = props => {
  const { id, username, email, photo } = props
  const dispatch = useDispatch()
  const user = useSelector(({ user }) => user)
  const [profile, setProfile] = useState({ username, email, photo })

  useEffect(() => {
    setProfile({ username, email, photo })
  }, [username, email, photo])

  const handleChange = e => {
    const { name, value } = e.target
    setProfile({ ...profile, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(editUser(id, profile))
  }

  const styles = {
    position: 'absolute',
    top: 9,
    right: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
      <button type='submit' disabled={user.updatingDetails}>
        <PulseLoader
          css={styles}
          color={'white'}
          size={10}
          loading={user.updatingDetails}
        />
        {!user.updatingDetails && <span>Submit</span>}
      </button>
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
    height: 30px;
    outline: none;
    align-self: center;
    margin: 10px 0px;
    position: relative;
  }
`
