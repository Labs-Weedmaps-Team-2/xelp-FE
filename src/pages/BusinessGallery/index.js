import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchBusinessGallery } from 'actions'
const BusinessGallery = () => {
  const dispatch = useDispatch()
  const business = useSelector(({ singleBusiness }) => singleBusiness)
  const yelp_id = window.location.pathname.split('/biz_gallery/')[1]
  useEffect(() => {
    dispatch(fetchBusinessGallery(yelp_id))
  }, [])
  return (
    <div style={{ marginTop: '60px' }}>
      <h1>BusinessGallery</h1>
      <div style={{ display: 'flex', flexFlow: 'row-wrap' }}>
        {business.photos &&
          business.photos.map((photo, i) => {
            return (
              <div
                key={i}
                style={{
                  width: '200px',
                  height: '200px',
                  marginRight: '20px',
                  marginBottom: '20px',
                }}
              >
                <img
                  src={photo}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                  alt={business.name}
                />
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default BusinessGallery
