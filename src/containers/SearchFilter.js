import React, { useState } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { fetchBusiness } from 'actions'
import * as types from 'actions/types'
import { convertZoomToMeters } from 'utils'
const categories = [
  'nightlife',
  'arts',
  'bars',
  'beergardens',
  'breweries',
  'comedyclubs',
  'danceclubs',
  'karaoke',
  'lounges',
  'musicvenues',
]

export const SearchFilter = () => {
  const dispatch = useDispatch()
  const [isOpenActive, setOpen] = useState(false)
  const [isSubmit, setSubmit] = useState(false)
  const [isPriceActive, setPrice] = useState(Array(4).fill(false))
  const [isCatActive, setCat] = useState(Array(10).fill(false))

  const [search, filter, business, map] = useSelector(
    ({ search, filter, business, map }) => [search, filter, business, map]
  )

  const submitSearch = e => {
    setSubmit(false)
    dispatch(
      fetchBusiness(
        search.term,
        search.location,
        search.offset,
        search.categories,
        search.open_now,
        search.price,
        convertZoomToMeters(map.zoom)
      )
    )
  }

  const handlePriceClick = async e => {
    setSubmit(true)
    const { value } = e.target
    let priceArray = isPriceActive
      .map((price, index) => (price ? index + 1 : ''))
      .filter(ele => ele)
    if (!isPriceActive[parseInt(value) - 1]) {
      priceArray.push(value)
    } else {
      priceArray = priceArray.filter(ele => ele !== value)
    }
    await dispatch({ type: types.SET_PRICE, payload: priceArray.join(',') })
    setPrice(prevPrices =>
      prevPrices.map((price, index) => {
        if (index === parseInt(value) - 1) {
          return !price
        } else {
          return price
        }
      })
    )
  }

  const handleOpenClick = async () => {
    setSubmit(true)
    await dispatch({ type: types.SET_OPEN, payload: !isOpenActive })
    setOpen(prev => !prev)
  }

  const handleCatClick = async e => {
    setSubmit(true)
    e.persist()
    let catArray = isCatActive
      .map((main, index) => (main ? categories[index] : ''))
      .filter(ele => ele)
    if (isCatActive[parseInt(e.target.dataset.number)]) {
      catArray = catArray.filter(ele => ele !== e.target.dataset.value)
    } else {
      catArray.push(e.target.dataset.value)
    }
    await dispatch({ type: types.SET_CATEGORIES, payload: catArray.join(', ') })
    setCat(prevCats =>
      prevCats.map((main, index) => {
        if (index === parseInt(e.target.dataset.number)) {
          return !main
        } else {
          return main
        }
      })
    )
  }

  return (
    <StyledFilter>
      <div className='container'>
        <header className='header'>
          <h2 className='filter-heading'>
            {filter.term ? (
              <span>
                Best {filter.term} in {map.location}
              </span>
            ) : (
              <>{!!map.location && <span>Browsing {map.location}</span>}</>
            )}
          </h2>
          {business.businesses.length ? (
            <div className='page-stats'>
              <span>Showing </span>
              <span>
                {search.offset + 1} -{' '}
                {search.offset + business.businesses.length} of{' '}
              </span>
              <span>{business.total}</span>
            </div>
          ) : null}
        </header>
        <div className='filter-group'>
          <ul className='price' onClick={handlePriceClick}>
            <li className={`${isPriceActive[0] ? 'active' : null}`} value='1'>
              $
            </li>
            <li className={`${isPriceActive[1] ? 'active' : null}`} value='2'>
              $$
            </li>
            <li className={`${isPriceActive[2] ? 'active' : null}`} value='3'>
              $$$
            </li>
            <li className={`${isPriceActive[3] ? 'active' : null}`} value='4'>
              $$$$
            </li>
          </ul>
          <button
            className={`open ${isOpenActive ? 'active' : null}`}
            onClick={handleOpenClick}
          >
            Open Now
          </button>
          <ul className='main-categories' onClick={handleCatClick}>
            <li
              className={`${isCatActive[0] ? 'active' : null}`}
              data-number='0'
              data-value='nightlife'
            >
              Nightlife
            </li>
            <li
              className={`${isCatActive[1] ? 'active' : null}`}
              data-number='1'
              data-value='arts'
            >
              Arts and Entertainment
            </li>
          </ul>
          {isSubmit && (
            <button
              className='open'
              style={{ marginLeft: 10 }}
              onClick={submitSearch}
            >
              Submit Filter Search
            </button>
          )}
        </div>
        <ul className='sub-categories' onClick={handleCatClick}>
          <li
            className={`${isCatActive[2] ? 'active' : null}`}
            data-number='2'
            data-value='bars'
          >
            Bars
          </li>
          <li
            className={`${isCatActive[3] ? 'active' : null}`}
            data-number='3'
            data-value='beergardens'
          >
            Beer Gardens
          </li>
          <li
            className={`${isCatActive[4] ? 'active' : null}`}
            data-number='4'
            data-value='breweries'
          >
            Breweries
          </li>
          <li
            className={`${isCatActive[5] ? 'active' : null}`}
            data-number='5'
            data-value='comedyclubs'
          >
            Comedy Clubs
          </li>
          <li
            className={`${isCatActive[6] ? 'active' : null}`}
            data-number='6'
            data-value='danceclubs'
          >
            Dance Clubs
          </li>
          <li
            className={`${isCatActive[7] ? 'active' : null}`}
            data-number='7'
            data-value='karaoke'
          >
            Karaoke
          </li>
          <li
            className={`${isCatActive[8] ? 'active' : null}`}
            data-number='8'
            data-value='lounges'
          >
            Lounges
          </li>
          <li
            className={`${isCatActive[9] ? 'active' : null}`}
            data-number='9'
            data-value='musicvenues'
          >
            Music Venues
          </li>
        </ul>
      </div>
    </StyledFilter>
  )
}

const StyledFilter = styled.section`
  height: 150px;
  background: #f5f5f5;
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  flex-direction: column;
  .container {
    max-width: 1020px;
    margin: 0 auto;
    width: 100%;
    height: 100%;
  }
  .header {
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
  }
  .filter-heading {
    font-size: 22px;
    font-weight: bold;
    color: #333;
  }
  .page-stats {
    color: #333;
    font-size: 14px;
  }
  .filter-group {
    display: flex;
    margin-top: 10px;
    .price {
      display: flex;
      border: 1px solid #ccc;
      border-radius: 4px;
      margin-right: 10px;
      cursor: pointer;
      li {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 8.5px 11px;
        border-right: 1px solid #ccc;
        color: #333;
        font-size: 14px;
        outline: none;
        &:last-child {
          border-right: none;
        }
      }
      .active {
        color: #348c32;
        background: #c4f3a4;
        border: 1px solid rgb(52, 140, 66);
        &:last-child {
          border-right: 1px solid rgb(52, 140, 66);
        }
      }
    }
  }

  .open {
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 10px;
    cursor: pointer;
    font-size: 14px;
    color: #333;
    padding: 8px 11px 9px;
    outline: none;
  }
  .active {
    color: #348c32;
    background: #c4f3a4;
    border: 1px solid rgb(52, 140, 66);
  }
  .main-categories {
    display: flex;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;

    li {
      padding: 8.5px 11px;
      border-right: 1px solid #ccc;
      outline: none;

      &:last-child {
        border-right: none;
      }
    }
    .active {
      color: #348c32;
      background: #c4f3a4;
      border: 1px solid rgb(52, 140, 66);
      &:last-child {
        border-right: 1px solid rgb(52, 140, 66);
      }
    }
  }

  .sub-categories {
    display: flex;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-top: 10px;
    width: 740px;
    cursor: pointer;
    font-size: 14px;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      outline: none;
      padding: 8.5px 11px;
      border-right: 1px solid #ccc;
      &:last-child {
        border-right: none;
      }
    }
    .active {
      color: #348c32;
      background: #c4f3a4;
      border: 1px solid rgb(52, 140, 66);
      &:last-child {
        border-right: 1px solid rgb(52, 140, 66);
      }
    }
  }
`
