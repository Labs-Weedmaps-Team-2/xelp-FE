import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { deleteAccount } from 'actions'
import { api } from 'apis'
import { useDispatch } from 'react-redux'
import { useRouter } from 'hooks'
import ReviewCard from './ReviewCard'

const UserProfile = ({ username, email, photo, id, image_url }) => {
  const [reviews, setReviews] = useState([])
  const dispatch = useDispatch()
  const { history } = useRouter()
  useEffect(() => {
    api
      .get('/reviews')
      .then(res => setReviews(res.data))
      .catch(err => console.log(err))
  }, [])
  const handleDelete = async () => {
    await dispatch(deleteAccount(id))
    history.push('/')
  }
  console.log(reviews)
  return (
    <StyledProfile>
      <p className='user-details-header'>User Profile</p>
      <div className='user-details-container'>
        <div className='img-container'>
          <img
            src={reviews.image_url || reviews.img_url || photo}
            alt={username}
          />
          <Link to='/edit-profile'>
            <p className='edit-photo'>Change Profile Photo</p>
          </Link>
        </div>
        <div className='details-container'>
          <p className='username'>
            <i className='fa fa-user' /> {username}
          </p>
          <p className='email'>
            <i className='fas fa-envelope' /> {email}
          </p>
          <Link to='/edit-profile'>
            <div className='edit-button'>Edit Profile</div>
          </Link>
          <div className='delete-button' onClick={handleDelete}>
            Delete Account
          </div>
        </div>
      </div>
      <div className='reviews-container'>
        <p className='review-header'>My Reviews</p>
        {reviews ? (
          reviews.map(review => <ReviewCard key={review.id} {...review} />)
        ) : (
          <p>No Reviews!</p>
        )}
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
      display: flex;
      flex-flow: column;
      align-items: center;
      img {
        width: 70%;
        margin: 50px 15% 20px 15%;
      }
      .edit-photo {
        text-align: center;
        margin-bottom: 10px;
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
      .delete-button:hover {
        cursor: pointer;
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
