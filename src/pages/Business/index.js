import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useRouter from 'hooks/useRouter'
import { fetchBusinessDetails } from 'actions/index'
import styled from 'styled-components'
import { Logo } from 'components'
import { SearchBar } from 'containers'
import { renderRating } from 'utils'

const Business = () => {
  const { location } = useRouter()
  const dispatch = useDispatch()
  const business = useSelector(({ singleBusiness }) => singleBusiness)
  console.log('business', business)
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
            </div>
            <div className='business-actionbar'>
              <button className='btn-review'>Write a Review</button>
              <button className='btn-add-photo'>Add Photo</button>
            </div>
          </div>
          <div className='map-showcase'>
            <div className='map-container'>
              <div className='map-static'>Static Map</div>
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
        <div>
          {business.reviews &&
            business.reviews.map(review => (
              <div key={review.id}>
                <span>
                  {(review.user && review.user.name) || review.user.username}
                </span>
                <p>{review.text}</p>
              </div>
            ))}
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
  border: 1px solid red;
  margin: 0 auto;
  max-width: 1020px;
  width: 100%;
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
  border: 1px solid blue;
  /* height: 390px; */
  margin-top: 20px;
  .business-details {
    border: 1px solid green;
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
    border: 1px solid blue;
    display: flex;
    align-items: center;
  }
  .business-rating {
    width: 136px;
  }
  .review-count {
    margin-left: 10px;
  }
  .btn-review {
    width: 160px;
    height: 36px;
    border-radius: 3px;
    background-color: #d32323;
    color: white;
    font-size: 14px;
    font-weight: bold;
    margin-right: 20px;
  }

  .btn-add-photo {
    height: 30px;
    width: 100px;
    font-weight: bold;
    color: #666666;
    background: #ffffff;
    border-radius: 3px;
    margin-right: 20px;
  }

  .map-showcase {
    display: flex;
  }
  .map-container {
    border: 1px solid red;
    width: 300px;
    height: 278px;
    padding: 5px;
  }
  .showcase-container {
    border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    position: relative;
    width: 720px;
    height: 278px;
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
    border: 1px solid green;
  }
`
