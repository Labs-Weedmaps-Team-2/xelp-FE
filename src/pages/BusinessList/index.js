import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { fetchBusinesses } from 'actions'
import { renderRating } from 'utils'
import { SearchBar, SignIn } from 'containers'
import { Logo } from 'components'

const BusinessList = () => {
  const dispatch = useDispatch()
  const [search, business] = useSelector(({ search, business }) => [
    search,
    business,
  ])
  const { businesses } = business
  useEffect(() => {
    dispatch(fetchBusinesses(search.location, search.term, 0))
  }, [])

  // const businesses = useSelector(({ businesses }) => ({ businesses }))

  return (
    <Container>
      <Nav>
        <Logo />
        <SearchBar />
        {/* <SignIn /> */}
      </Nav>
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
            <div className='item-details'>
              <h2 className='name'>
                <span className='number'>{`${i + 1}. `}</span>
                <Link to='#'>{business.name}</Link>
              </h2>
              <div className='rating-wrapper'>
                <div className='rating'>{renderRating(business.rating)}</div>
                <span className='reviews'>{business.review_count} reviews</span>
              </div>
              <div className='category-wrapper'>
                {business.price && [
                  <span className='price'>{business.price}</span>,
                  <span className='dot'> &middot;</span>,
                ]}
                <span className='categories'>
                  {business.categories
                    .map(category => category.title)
                    .join(', ')}
                </span>
              </div>
            </div>
          </li>
        ))}
      </StyledBusinessList>
    </Container>
  )
}

export default BusinessList

const Container = styled.div`
  margin: 0 auto;
  max-width: 900px;
  width: 100%;
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`

const StyledBusinessList = styled.ul`
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
  .rating-wrapper {
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
