import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useRouter from 'hooks/useRouter'
import { Link } from 'react-router-dom'
import { fetchBusinessDetails } from 'actions/index'
import styled from 'styled-components'
import { Logo } from 'components'
import { SearchBar } from 'containers'
import { renderRating } from 'utils'
import ReviewForm from './components/ReviewForm'
import Reviews from './components/Reviews'

const mapUrl = 'https://maps.googleapis.com/maps/api/staticmap?'

const Business = () => {
  const { location } = useRouter()
  const dispatch = useDispatch()

  const business = useSelector(({ singleBusiness }) => singleBusiness)

  useEffect(() => {
    const yelp_id = location.pathname.split('/business/')
    dispatch(fetchBusinessDetails(yelp_id[1]))
  }, [])

  return (
    <Wrapper>
      <Nav>
        <div className='search-container'>
          <Logo />
          <SearchBar />
        </div>
      </Nav>
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
                <span className='review-count'>
                  {business.review_count} reviews
                </span>
              </div>
              <div className='business-category'>
                {business.price && [
                  <span key='1' className='price'>
                    {business.price}
                  </span>,
                  <span key='2' className='dot'>
                    &middot;
                  </span>,
                ]}
                <span className='categories'>
                  {business.categories.length
                    ? business.categories[0].title
                    : null}
                </span>
                <button className='edit'>Edit</button>
              </div>
            </div>
            <div className='business-actionbar'>
              <Link
                to={`/writeareview/${location.pathname.split('/business/')[1]}`}
              >
                <button className='btn-review'>Write a Review</button>
              </Link>
              <button className='btn-add-photo'>Add Photo</button>
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
              <div className='address'>
                {business.location
                  ? business.location.display_address.map((line, index) => (
                      <div key={index}>{line}</div>
                    ))
                  : null}
              </div>
              <div className='phone'>{business.display_phone}</div>
            </div>
            <div className='showcase-container'>
              {business.photos.map((photo, index) => (
                <div key={index} className='showcase-image-wrapper'>
                  <img
                    className='showcase-image-wrapper'
                    src={photo}
                    alt='business'
                  />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </BusinessHero>
      <Container>
        <div className='reviews-more-details'>
          <div className='review-list'>
            REVIEW LIST GOES HERE
            {business.reviews && <Reviews reviews={business.reviews} />}
          </div>
          <div className='more-details'>
            MORE BUSINESS DETAILS/SERVICES GOES HERE
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}

export default Business

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
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
    margin-top: 20px;
  }
  .review-list {
    width: 720px;
    height: 500px;
    border: 1px solid blue;
  }
  .more-details {
    width: 300px;
    border: 1px solid red;
    height: 500px;
  }
`

const Nav = styled.nav`
  display: flex;
  position: sticky;
  z-index: 5;
  top: 0;
  align-items: center;
  background-color: #d32323;
  width: 100%;
  height: 65px;
  .search-container {
    display: flex;
    align-items: center;
    max-width: 1020px;
    margin: 0 auto;
    height: 100%;
  }
`

const BusinessHero = styled.section`
  /* border: 1px solid blue; */
  /* height: 390px; */
  margin-top: 20px;
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
  .business-category {
    display: flex;
    position: relative;
    .dot {
      margin: 0 5px;
    }
    .edit {
      position: absolute;
      width: 35px;
      height: 20px;
      right: 5px;
      background: none;
      color: rgba(0, 0, 0, 87);
    }
  }

  .btn-review {
    width: 160px;
    height: 36px;
    border-radius: 3px;
    background-color: #d32323;
    color: white;
    font-size: 14px;
    font-weight: bold;
    margin-right: 25px;
  }

  .btn-add-photo {
    height: 30px;
    width: 100px;
    font-weight: bold;
    color: #666666;
    background: #ffffff;
    border-radius: 3px;
    margin-right: 25px;
  }

  .map-showcase {
    display: flex;
    height: 260px;
  }
  .map-container {
    /* border: 1px solid red; */
    width: 300px;
    padding: 5px;
    border: 1px solid #666666;
  }
  .showcase-container {
    /* border: 1px solid red; */
    display: flex;
    justify-content: center;
    align-items: flex-end;
    position: relative;
    width: 720px;
  }
  .showcase-image-wrapper {
    width: 220px;
    height: 220px;
  }
  .showcase-image {
    width: 100%;
    height: 100%;
  }

  .map-static {
    width: 288px;
    height: 139px;
    margin-bottom: 10px;
  }

  .address {
    line-height: 20px;
    margin-bottom: 8px;
  }
`
