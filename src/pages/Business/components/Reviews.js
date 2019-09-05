import React from 'react'

const Reviews = ({ reviews }) => {
  return (
    <div>
      {reviews.map(review => {
        if (review.text) {
          return (
            <div key={review.id}>
              <span>
                {(review.user && review.user.name) || review.user.username}
              </span>
              <p>{review.text}</p>
            </div>
          )
        }
      })}
    </div>
  )
}

export default Reviews
