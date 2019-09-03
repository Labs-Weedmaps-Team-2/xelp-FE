import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { fetchBusiness } from 'actions'
import { renderRating } from 'utils'
import { SearchBar, SignIn } from 'containers'
import { Logo } from 'components'
import { MapComponent } from 'pages/Home/components'
const BusinessList = () => {
  const dispatch = useDispatch()
  const [search, business] = useSelector(({ search, business }) => [
    search,
    business,
  ])
  const { businesses } = business
  useEffect(() => {
    dispatch(fetchBusiness(search.term, search.location, 0))
  }, [search.location])

  // const businesses = useSelector(({ businesses }) => ({ businesses }))

  return (
    <>
      <Nav>
        <div className='search-container'>
          <Logo />
          <SearchBar />
        </div>
      </Nav>
      <Container>
        <StyledBusinessList>
          {businesses.map((business, i) => (
            <li className='list-item' key={business.id}>
              <div className='image-wrapper'>
                <Link to='#'>
                  <img
                    className='image'
                    src={business.image_url}
                    alt={`${business.alias}`}
                  />
                </Link>
              </div>
            </li>
          ))}
        </StyledBusinessList>
        <MapComponent />
      </Container>
    </>
  )
}

export default BusinessList

const Container = styled.div`
  margin: 20px auto 30px;
  max-width: 1020px;
  height: 100%;
  display: flex;

  .map-wrapper {
    width: 600px;
    height: 500px;
    border: 1px solid #e6e6e6;
  }
  .map-header {
    height: 40px;
    background-color: #f5f5f5;
  }

  .less-map-button {
    border: none;
    height: 100%;
    background: transparent;
  }
  .less-map-arrow {
    font-size: 18px;
    letter-spacing: 1px;
    font-weight: bold;
    margin-left: 10px;
  }
  .less-map-text {
    display: inline-block;
    color: #1999e9;
    padding-bottom: 10px;
    font-size: 13px;
    font-weight: bold;
    padding-left: 10px;
    letter-spacing: 0.8px;
    &:hover {
      text-decoration: underline;
    }
  }
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  background-color: #d32323;
  height: 65px;
  .search-container {
    display: flex;
    align-items: center;
    max-width: 1020px;
    margin: 0 auto;
    height: 100%;
  }
`

const StyledBusinessList = styled.ul`
  border: 1px solid blue;
  h2 {
    height: 40px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    font-weight: bold;
  }
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  /* border: 1px solid red; */
  margin: 0 auto 0 20px;
  display: flex;
  flex-direction: column;
  width: 320px;
  .list-item {
    border-bottom: 1px solid #e6e6e6;
    height: 127px;
    display: flex;
    padding: 18px 0px;
  }

  .image-wrapper {
    /* border: 1px solid green; */
    width: 108px;
    height: 100px;
  }
  .image {
    width: 90px;
    height: 90px;
    border-radius: 4px;
  }
  .item-details {
    /* border: 1px solid blue; */
    width: 212px;
    height: 100px;
  }
  .number {
    color: black;
  }
  .name {
    font-weight: bold;
    margin-bottom: 10px;
    line-height: 1.6rem;
    a {
      color: #0073bb;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .stats-wrapper {
    display: flex;
    align-items: center;
  }
  .rating {
    width: 102px;
    height: 18px;
    display: inline-block;
  }
  .reviews {
    font-size: 14px;
    color: #666666;
    padding-left: 10px;
  }
  .category-wrapper {
    margin-top: 8px;
    line-height: 16px;
  }
  .price {
    color: #333333;
    font-size: 14px;
  }
  .dot {
    margin-right: 10px;
  }
  .categories {
    font-size: 14px;
    color: #666666;
  }
`
