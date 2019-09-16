import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useRouter, usePosition } from 'hooks'
import { useDispatch, useSelector } from 'react-redux'
import { setSearch } from 'actions'

const SearchBar = () => {
  // Custom hook to get users location
  const { latitude, longitude } = usePosition()
  const dispatch = useDispatch()
  const { history } = useRouter()
  const inputTerm = useRef()
  const inputLocation = useRef()
  const search = useSelector(({ search }) => search)

  useEffect(() => {
    inputTerm.current.focus()
    if (latitude) {
      fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=${process.env.REACT_APP_OPENCAGE_API_KEY}`
      )
        .then(res => res.json())
        .then(json => {
          const {
            town,
            city,
            state_code,
            postcode,
          } = json.results[0].components
          let local = town || city
          if (local) {
            local.concat(', ')
          } else {
            local = ''
          }
          const location = `${local}${state_code} ${postcode}`
          dispatch(setSearch(search.term, location))
        })
    }
  }, [latitude, longitude])

  const handleSubmit = e => {
    e.preventDefault()
    if (search.location) {
      history.push('/business-list')
    }
  }

  const handleChange = e => {
    const { name, value } = e.target
    const searchCopy = { ...search, [name]: value }
    dispatch(setSearch(searchCopy.term, searchCopy.location))
  }

  return (
    <StyledHero>
      <p>nitelyfe</p>
      <form onSubmit={handleSubmit} className='inputs-container'>
        <div className='search-container type'>
          <label htmlFor='term'>What?</label>
          <input
            id='term'
            type='text'
            ref={inputTerm}
            placeholder='bars, clubs, breweries, venues...'
            value={search.term}
            name='term'
            onChange={handleChange}
            onClick={() => inputTerm.current.select()}
          />
        </div>
        <div className='search-container locale'>
          <label htmlFor='location'>Where?</label>
          <input
            id='location'
            type='text'
            ref={inputLocation}
            placeholder='Los Angeles'
            value={search.location}
            name='location'
            onChange={handleChange}
            onClick={() => inputLocation.current.select()}
          />
        </div>
        <button className='search-button'>go</button>
      </form>
    </StyledHero>
  )
}

export default SearchBar

const StyledHero = styled.div`
  position: relative;
  background-image: url('https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80');
  background-color: #333;
  background-size: cover;
  background-position: center;
  height: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;  
  p {
    font-size: 14rem;
    color: white;
    font-family: 'Londrina Outline', cursive;
    margin-bottom: 20px;
  }
  .inputs-container {
    width: 900px;
    height: 50px;
    background-color: white;
    border-radius: 5px;
    display: flex;
    flex-flow: row;
    justify-content: center;
    .search-container {
      width: 47%;
      display: flex;
      flex-flow: row;
      align-items: center;
      label {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80%;
        width: 18%;
        font-weight: bold;
        letter-spacing: 0.8px;
      }
      input {
        letter-spacing: 0.6px;
        height: 80%;
        width: 82%;
        border: none;
        font-size: 1em;
        display: flex;
        align-items: center;
        outline: none;
      }
    }
    .locale {
      label {
        border-left: 1px solid lightslategrey;
        letter-spacing: 0.8px;
      }
    }
    .search-button {
      position: relative;
      width: 6%;
      font-size: 1em;
      font-weight: bold;
      letter-spacing: 0.5px;
      background-color: red;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0px 5px 5px 0px;
      border: 1px solid red;
      right: -1px;
      letter-spacing: 0.8px;
    }
  }
`
