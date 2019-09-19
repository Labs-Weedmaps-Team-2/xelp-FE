import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { useRouter, usePosition } from 'hooks'
import { useDispatch, useSelector } from 'react-redux'
import { setSearch } from 'actions'
const openCageUrl = 'https://api.opencagedata.com/geocode/v1/json'

// if local is defined, return 'town || city, '
// undefined => empty string
const formatLocal = local => {
  if (local) {
    local = local.concat(', ')
  } else {
    local = ''
  }
  return local
}
const SearchBar = () => {
  // Custom hook to get users location
  const { latitude, longitude } = usePosition()
  const dispatch = useDispatch()
  const { history } = useRouter()
  const termRef = useRef()
  const locationRef = useRef()
  const search = useSelector(({ search }) => search)

  // Focus term input on mount
  useEffect(() => {
    termRef.current.focus()
    if (latitude) {
      fetch(
        `${openCageUrl}?q=${latitude},${longitude}&key=${process.env.REACT_APP_OPENCAGE_API_KEY}`
      )
        .then(res => res.json())
        .then(json => {
          const {
            town,
            city,
            state_code,
            postcode,
          } = json.results[0].components
          // local town or city
          let local = town || city
          local = formatLocal(local)
          const zipcode = postcode || ''
          const location = `${local}${state_code} ${zipcode}`
          dispatch(setSearch(search.term, location))
        })
    }
  }, [latitude, longitude])

  const handleSubmit = values => {
    if (values.location) {
      dispatch(setSearch(values.term, values.location))
      history.push('/business-list')
    }
  }

  return (
    <StyledHero>
      <p>nitelyfe</p>

      <Formik
        initialValues={{ term: search.term, location: search.location }}
        onSubmit={handleSubmit}
        enableReinitialize={true}
      >
        {() => (
          <Form className='inputs-container'>
            <div className='search-container type'>
              <label htmlFor='term'>What?</label>
              <Field
                id='term'
                type='text'
                innerRef={termRef}
                placeholder='bars, clubs, breweries, venues...'
                name='term'
                onClick={() => termRef.current.select()}
              />
            </div>
            <div className='search-container locale'>
              <label htmlFor='location'>Where?</label>
              <Field
                id='location'
                type='text'
                innerRef={locationRef}
                placeholder='Los Angeles'
                name='location'
                onClick={() => locationRef.current.select()}
              />
            </div>
            <button type='submit' className='search-button'>
              go
            </button>
          </Form>
        )}
      </Formik>
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
      background-color: #558c8c;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0px 5px 5px 0px;
      border: 1px solid #558c8c;
      right: -1px;
      letter-spacing: 0.8px;
    }
  }
`
