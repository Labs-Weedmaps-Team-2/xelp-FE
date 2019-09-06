import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { fetchBusiness, resetBusiness, setSearch } from 'actions'
import { renderRating } from 'utils'
import { SearchBar, Map } from 'containers'
import { Logo } from 'components'
import { POPULATE_SINGLE } from 'actions/types'
import ReactPaginate from 'react-paginate'
import useRouter from 'hooks/useRouter'

const itemsPerPage = 20

const BusinessList = () => {
  const listRef = useRef()
  const dispatch = useDispatch()
  const { history } = useRouter()
  const [search, business] = useSelector(({ search, business }) => [
    search,
    business,
  ])

  const { businesses } = business

  useEffect(() => {
    dispatch(fetchBusiness(search.term, search.location, search.offset))
    return () => {
      dispatch(resetBusiness())
    }
  }, [])

  const handleClick = business => {
    dispatch({ type: POPULATE_SINGLE, payload: business })
    history.push(`/business/${business.id}`)
  }

  const handlePageClick = ({ selected }) => {
    const offset = Math.ceil(selected * itemsPerPage)
    dispatch(fetchBusiness(search.term, search.location, offset))
    dispatch(setSearch(search.term, search.location, offset))
    if (listRef.current) {
      listRef.current.scrollTop = 0
    }
  }

  return (
    <Wrapper>
      <Nav>
        <div className='search-container'>
          <Logo />
          <SearchBar />
        </div>
      </Nav>
      <Container>
        <StyledBusinessList ref={listRef}>
          <h1>All Results</h1>
          {businesses.map((business, i) => (
            <li className='list-item' key={business.id}>
              <div
                className='image-wrapper'
                onClick={() => handleClick(business)}
              >
                <img
                  className='image'
                  src={business.image_url}
                  alt={business.alias}
                />
              </div>
              <div className='item-details'>
                <h2 className='name'>
                  <span className='number'>{`${i + 1 + search.offset}.`} </span>
                  <div onClick={() => handleClick(business)}>
                    {business.name}
                  </div>
                </h2>
                <div className='stats-wrapper'>
                  <div className='rating'>{renderRating(business.rating)}</div>
                  <span className='reviews'>
                    {business.review_count} reviews
                  </span>
                </div>
                <div className='category-wrapper'>
                  {business.price && [
                    <span key='1' className='price'>
                      {business.price}
                    </span>,
                    <span key='2' className='dot'>
                      {' '}
                      &middot;
                    </span>,
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
          <ReactPaginate
            style={{ display: 'flex' }}
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={Math.floor(business.total / itemsPerPage) || 1}
            marginPagesDisplayed={1}
            pageRangeDisplayed={1}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
            initialPage={Math.floor(search.offset / itemsPerPage) || 0}
          />
        </StyledBusinessList>
        <Map offset={search.offset} />
      </Container>
    </Wrapper>
  )
}

export default BusinessList

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background: #ffffff;
`

const Nav = styled.nav`
  display: flex;
  position: sticky;
  z-index: 100;
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

const Container = styled.div`
  margin: 20px auto 30px;
  max-width: 1020px;
  width: 1020px;
  display: flex;
  position: relative;
  justify-content: flex-start;
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

const StyledBusinessList = styled.ul`
  /* border: 1px solid red; */
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  display: flex;
  margin-right: 10px;
  width: 340px;
  height: 500px;
  overflow-y: scroll;
  overflow-x: hidden;
  flex-direction: column;
  position: relative;
  h1 {
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: #ffffff;
    font-weight: bold;
    padding-bottom: 10px;
  }
  h2 {
    display: flex;
    line-height: 20px;
    font-weight: bold;
  }
  .list-item {
    border-bottom: 1px solid #e6e6e6;
    width: 340px;
    display: flex;
    padding: 18px 25px 8px 0px;
    transition: 0.3s all ease;
    &:hover {
      background-color: rgba(0, 255, 255, 0.1);
    }
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
    /* height: 100px; */
  }
  .number {
    color: black;
    margin-right: 6px;
  }
  .name {
    font-weight: bold;
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
    margin-top: 8px;
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
  //* Pagination styles *//
  .pagination {
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 0 auto 10px;
    font-weight: 600;

    .previous,
    .next {
      a {
        width: 40px;
        height: 40px;
      }
    }
    .active,
    .focus {
      outline: none;
      color: black;
    }
    li {
      display: flex;
      justify-content: center;
      align-items: center;

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        font-size: 1.6rem;
        cursor: pointer;
        color: black;
        &:hover {
          color: #1999e9;
          outline: none;
        }
      }
    }
  }
`
