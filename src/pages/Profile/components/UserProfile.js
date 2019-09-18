import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { api } from 'apis'

import ReviewCard from '../../EditProfile/components/ReviewCard'

const UserProfile = ({ username, email, photo }) => {
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    api.get('/reviews')
      .then(res => setReviews(res.data))
      .catch(err => console.log(err))
  }, [])
  return (
    <StyledProfile>
      <p className="user-details-header">User Profile</p>
      <div className="user-details-container">
        <div className="img-container">
          <img src={photo} alt={username} />
        </div>
        <div className="details-container">
          <p className="username"><i className="fa fa-user" /> {username}</p>
          <p className="email"><i className="fas fa-envelope" /> {email}</p>
          <Link to="somewhere">
            <div className="edit-button">Edit Profile</div>
          </Link>
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
  padding: 40px 0 30px 0;
  background: whitesmoke;
  .user-details-header {
    width: 80%;
    padding-left: 30px;
    font-size: 3rem;
    margin-bottom: 30px;
  }
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
      display: flex;
      flex-flow: column;
      justify-content: space-around;
      padding: 30px;
      p {
        font-size: 2rem;
        i {
          font-size: 3rem;
        }
      }
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
      font-size: 2.5rem;
      padding-left: 30px;
      margin-bottom: 20px;
    }
  }
`