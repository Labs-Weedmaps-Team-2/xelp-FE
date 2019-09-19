import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchBusinessGallery } from 'actions'
import { Navbar } from 'components'
import { useRouter } from 'hooks'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const BusinessGallery = () => {
  const dispatch = useDispatch()
  const { location } = useRouter()
  const business = useSelector(({ singleBusiness }) => singleBusiness)
  const yelp_id = window.location.pathname.split('/biz_gallery/')[1]

  useEffect(() => {
    dispatch(fetchBusinessGallery(yelp_id))
  }, [])

  return (
    <StyledBusinessGallery>
      <Navbar />
      <div className='gallery-header'>
        {business.name && <h1>Photos for {business.name}</h1>}
        <Link to={`/addphotos/${location.pathname.split('/biz_gallery/')[1]}`}>
          <button className='btn-add-photo'>Add Photo</button>
        </Link>
      </div>
      <div className='gallery-container'>
        {[business.image_url, ...business.photos] &&
          [business.image_url, ...business.photos].map((photo, i) => {
            return (
              <div key={i} className='gallery-wrap'>
                <img
                  src={photo}
                  className='gallery-image'
                  alt={business.name}
                />
              </div>
            )
          })}
      </div>
    </StyledBusinessGallery>
  )
}

export default BusinessGallery

const StyledBusinessGallery = styled.div`
  .gallery-header {
    margin: 30px auto 20px;
    max-width: 1100px;
    display: flex;
    justify-content: space-between;
    h1 {
      font-size: 24px;
      font-weight: bold;
      font-family: 'Helvetica Neue';
    }
  }
  .btn-add-photo {
    height: 30px;
    width: 100px;
    font-size: 14px;
    font-weight: bold;
    color: white;
    background: #558c8c;
    border-radius: 3px;
    margin-right: 25px;
    cursor: pointer;
    opacity: 0.9;
    transition: 0.3 opacity ease;
    &:hover {
      opacity: 1;
    }
  }
  .gallery-container {
    display: flex;
    max-width: 1100px;
    margin: 0 auto 30px;
    flex-wrap: wrap;
  }
  .gallery-wrap {
    width: 200px;
    height: 200px;
    margin-right: 20px;
    margin-bottom: 20px;
  }
  .gallery-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`
