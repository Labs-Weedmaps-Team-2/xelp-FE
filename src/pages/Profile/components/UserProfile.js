import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { api } from 'apis'

import ReviewCard from './ReviewCard'

const UserProfile = ({ username, email, photo }) => {
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    api.get('/reviews')
      .then(res => setReviews(res.data))
      .catch(err => console.log(err))
  }, [])
  return (
    <StyledProfile>
      <div className="user-details-container">
        <div className="img-container">
          <img src={photo} alt={username} />
        </div>
        <div className="details-container">
          <p className="username"><span>Username: </span>{username}</p>
          <p className="email"><span>Email: </span>{email}</p>
        </div>
      </div>
      <div className="reviews-container">
        {reviews ? reviews.map(review=> console.log(JSON.stringify(review))) : <p>No Reviews!</p>}
      </div>
    </StyledProfile>
  )
}

export default UserProfile

const StyledProfile = styled.div`
  height: 600px;
  display: flex;
  flex-direction: column;
  .user-details-container {
    width: 100%;
    border: 1px solid blue;
    display: flex;
    flex-flow: row;
    .img-container {
      width: 35%;
      border: 1px solid orange;
      img {
        width: 70%;
        margin: 50px 15%;
      }
    }
    .details-container {
      width: 65%;
      border: 1px solid purple;
    }
  }
  .reviews-container {
    border: 1px solid red;
    width: 100%;
    height: 100px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  }
`