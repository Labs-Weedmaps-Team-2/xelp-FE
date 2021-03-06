import React, { useState, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'hooks'
import { Link } from 'react-router-dom'
import { fetchBusinessDetails, resetSingleBusiness } from 'actions/index'
import styled from 'styled-components'
import { Navbar } from 'components'
import { renderRating } from 'utils'
import Reviews from './components/Reviews'

const mapUrl = 'https://maps.googleapis.com/maps/api/staticmap?'

const Business = () => {
  const { location } = useRouter()
  const dispatch = useDispatch()
  const [hoverIndex, setHover] = useState(1)
  const yelp_id = location.pathname.split('/business/')[1]

  const handleEffect = useCallback(() => {
    dispatch(resetSingleBusiness())
    dispatch(fetchBusinessDetails(yelp_id))
  }, [dispatch, yelp_id])

  const business = useSelector(({ singleBusiness }) => singleBusiness)
  useEffect(() => {
    handleEffect()
  }, [handleEffect])

  return (
    <Wrapper>
      <Navbar />
      <BusinessHero>
        <Container>
          <div className='business-details'>
            <div className='business-info'>
              <h1 className='business-name'>{business.name}</h1>
              <div className='business-stats'>
                {business.rating ? (
                  <div className='business-rating'>
                    {renderRating(business.rating)}
                  </div>
                ) : null}
                {business.reviews && (
                  <span className='review-count'>
                    {business.reviews.length} reviews
                  </span>
                )}
              </div>
              <div className='price-categories-wrap'>
                {business.price && [
                  <span key='1' className='price'>
                    {business.price}
                  </span>,
                  <span key='2' className='dot'>
                    &middot;
                  </span>,
                ]}
                <span className='categories'>
                  {business.categories && business.categories.length
                    ? business.categories[0].title
                    : null}
                </span>
                <button className='edit'>Edit</button>
              </div>
            </div>
            <div className='business-actionbar'>
              <Link to={`/review/${location.pathname.split('/business/')[1]}`}>
                <button className='btn-review'>Write a Review</button>
              </Link>
              <Link
                to={`/addphotos/${location.pathname.split('/business/')[1]}`}
              >
                <button className='btn-add-photo'>Add Photo</button>
              </Link>
            </div>
          </div>
          <div className='map-showcase'>
            <div className='map-container'>
              <div className='map-static'>
                {business.coordinates ? (
                  <img
                    src={`${mapUrl}key=${process.env.REACT_APP_MAPS_API_KEY}&size=287x138&center=${business.coordinates.latitude},${business.coordinates.longitude}&zoom=13&markers=color:blue%7label:*%7C${business.coordinates.latitude},${business.coordinates.longitude}`}
                    alt=''
                  />
                ) : null}
              </div>
              <address className='address'>
                {business.location
                  ? business.location.display_address.map((line, index) => (
                      <div key={index}>{line}</div>
                    ))
                  : null}
              </address>
              <div className='phone'>{business.display_phone}</div>
            </div>
            <div className='showcase-container'>
              {[business.image_url, ...business.photos]
                .slice(0, 3)
                .map((photo, index) => (
                  <Link key={index} to={`/biz_gallery/${yelp_id}`}>
                    <div
                      className={`showcase-image-wrapper ${
                        hoverIndex === index ? 'hover' : null
                      }`}
                      onMouseEnter={() => setHover(index)}
                      onMouseLeave={() => setHover(1)}
                    >
                      <img
                        className='showcase-image'
                        src={photo}
                        alt='business'
                      />
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </Container>
      </BusinessHero>
      <Container>
        <div className='reviews-more-details'>
          <div className='review-list'>
            {business.reviews && (
              <Reviews reviews={business.reviews} yelp_id={business.id} />
            )}
          </div>
          <div className='more-details'>
            <Link to={`/biz_gallery/${yelp_id}`}>
              See all {[business.image_url, ...business.photos].length} photos
            </Link>
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}

export default Business

const Wrapper = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  position: relative;
  background: #ffffff;
  padding-bottom: 20px;
`

const Container = styled.div`
  /* border: 1px solid red; */
  margin: 0 auto;
  max-width: 1020px;
  width: 100%;
  .reviews-more-details {
    display: flex;
    justify-content: space-between;
    min-height: 500px;
    width: 100%;
    margin-top: 30px;
  }
  .review-list {
    /* border: 1px solid blue; */
    width: 720px;
  }
  .more-details {
    /* border: 1px solid red; */
    width: 300px;
  }
`

const BusinessHero = styled.section`
  /* border: 1px solid blue; */
  /* height: 390px; */
  background: #f5f5f5;
  padding: 20px 0 0px;
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
  .business-details {
    /* border: 1px solid green; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 120px;
  }

  .business-info {
    display: flex;
    flex-direction: column;
  }
  .business-name {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .business-stats {
    /* border: 1px solid blue; */
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  .business-rating {
    width: 136px;
  }
  .review-count {
    margin-left: 10px;
  }
  .price-categories-wrap {
    /* border: 1px solid blue; */
    display: flex;
    align-items: center;
    position: relative;
    .dot {
      margin: 0 5px;
    }
    .categories {
      color: #1075b9;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
    .edit {
      height: 20px;
      background: none;
      color: #999999;
      margin-left: 20px;
      padding: 0 10px;
      border-radius: 3px;
      border: 1px solid #cccccc;
      cursor: pointer;
      transition: 0.2s color border ease;
      &:hover {
        color: #1a1a1a;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1),
          inset 0 1px 0 rgba(255, 255, 255, 0.5);
        border: 1px solid #666666;
      }
    }
  }

  .btn-review {
    width: 160px;
    height: 36px;
    border-radius: 3px;
    background-color: #d1262b;
    color: white;
    font-size: 14px;
    font-weight: bold;
    margin-right: 25px;
    cursor: pointer;
    opacity: 0.9;
    transition: 0.3 opacity ease;
    &:hover {
      opacity: 1;
    }
  }

  .btn-add-photo {
    height: 30px;
    width: 100px;
    font-weight: bold;
    color: #666666;
    background: #ffffff;
    border-radius: 3px;
    margin-right: 25px;
    cursor: pointer;
    opacity: 0.9;
    transition: 0.3 opacity ease;
    &:hover {
      opacity: 1;
    }
  }

  .map-showcase {
    /* border: 1px solid red; */
    display: flex;
    margin-top: 5px;
  }
  .map-container {
    /* border: 1px solid red; */
    width: 300px;
    padding: 5px 5px 20px;
    border: 1px solid #cccccc;
    position: relative;
    bottom: -20px;
    z-index: 5;
    background: #ffffff;
    margin-right: 15px;
  }
  .showcase-container {
    /* border: 1px solid blue; */
    display: flex;
    align-items: flex-end;
    position: relative;
    width: 720px;
    position: relative;
  }
  .showcase-image-wrapper {
    /* border: 1px solid red; */
    width: 225px;
    height: 225px;
    transition: 0.25s transform ease-in-out;
  }
  .hover {
    transform: scale(1.1);
    z-index: 5;
  }

  .showcase-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .map-static {
    width: 288px;
    height: 139px;
    margin-bottom: 10px;
    overflow: hidden;
    border: 1px solid #cccccc;
  }

  .address {
    line-height: 20px;
    margin-bottom: 8px;
    font-weight: bold;
    color: #333333;
  }
`
