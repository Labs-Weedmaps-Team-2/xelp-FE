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
        <p className="review-header">My Reviews</p>
        {reviews ? reviews.map(review => <ReviewCard key={review.id} {...review} />) : <p>No Reviews!</p>}
      </div>
    </StyledProfile>
  )
}

export default UserProfile

const StyledProfile = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  background: whitesmoke;
  .user-details-container {
    width: 80%;
    display: flex;
    flex-flow: row;
    background: white;
    .img-container {
      width: 35%;
      img {
        width: 70%;
        margin: 50px 15%;
      }
    }
    .details-container {
      width: 65%;
    }
  }
  .reviews-container {
    padding: 30px 0;
    width: 80%;
    height: auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    background: whitesmoke;
    .review-header {
      width: 100%;
      font-size: 3rem;
      padding-left: 30px;
    }
  }
`