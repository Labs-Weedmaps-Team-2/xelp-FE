import React, { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'hooks'
import { setSearch, fetchBusiness, setYelpUpdate } from 'actions'
import { GridLoader } from 'react-spinners'
import styled from 'styled-components'
import SearchSvg from 'assets/svg/SearchSvg'
import { Dropdown } from 'components'
import { api } from 'apis'

export const SearchBar = () => {
  const inputTerm = useRef()
  const inputLocation = useRef()
  const dispatch = useDispatch()
  const { history } = useRouter()
  const [auto, setAuto] = useState([])

  useEffect(() => {
    inputTerm.current.focus()
  }, [])

  const { term, location, loading, map } = useSelector(
    ({ search, business, map }) => ({
      term: search.term,
      location: search.location,
      loading: business.loading,
      center: business.region.center,
      map,
    })
  )

  const handleChange = async e => {
    await dispatch(setSearch(e.target.value, location))
    const res = await api.get(
      `/search/autocomplete?text=${term}&latitude=${map.center.lat}&longitude=${map.center.lng}`
    )
    if (res.data.terms && res.data.terms.length) {
      setAuto([...res.data.categories, ...res.data.terms])
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setAuto([])
    dispatch(setYelpUpdate())
    await dispatch(fetchBusiness(term, location, 0))
    setAuto([])

    //* push to business-list if we use the search bar
    //* and not already on business-list
    if (!window.location.pathname.includes('business-list')) {
      history.push('/business-list')
    }
  }
  return (
    <Form onSubmit={handleSubmit}>
      <div className='input-wrapper'>
        <label className='label-find' htmlFor='find'>
          Find
        </label>
        <input
          className='input'
          id='find'
          type='text'
          ref={inputTerm}
          placeholder='bars, clubs, breweries, venues...'
          value={term}
          onChange={handleChange}
          onKeyDown={e => {
            if (e.keyCode === 27) {
              setAuto([])
            }
          }}
          onClick={() => inputTerm.current.select()}
        />
        {!!term.length && (
          <Dropdown
            items={auto}
            close={() => setAuto([])}
            handleClick={e => {
              dispatch(setSearch(e.target.innerText, location))
              setAuto([])
              handleSubmit(e)
            }}
          />
        )}
      </div>
      <div className='input-wrapper'>
        <label className='label-near' htmlFor='near'>
          Near
        </label>
        <input
          className='input'
          id='near'
          type='text'
          ref={inputLocation}
          placeholder='city, state or zip code'
          value={location}
          onChange={e => dispatch(setSearch(term, e.target.value))}
          onClick={() => inputLocation.current.select()}
        />
      </div>
      <button className='btn-search'>
        {loading ? (
          <GridLoader loading={loading} color='white' size='5' />
        ) : (
          <SearchSvg color='white' />
        )}
      </button>
    </Form>
  )
}

const Form = styled.form`
  font-family: 'Helvetica Neue';
  width: 770px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #a71c1c;
  background-color: #a71c1c;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  display: flex;
  margin: 0 auto 0 18px;
  background-color: white;
  position: relative;
  .input-wrapper {
    width: 50%;
    display: relative;
    border: none;
    padding: 0px 12px;
    font-size: 14px;
    margin: 6px 0px;
    &:first-child {
      border-right: 1px solid #cccccc;
    }
  }
  label {
    font-weight: bold;
    letter-spacing: 1.5px;
    font-size: 16px;
  }
  input {
    display: relative;
    bottom: 5px;
    border: none;
    outline: none;
    font-size: 15px;
    letter-spacing: 0.8px;
    line-height: 20px;
    width: 85%;
    height: 100%;
    color: #141414;
    padding-left: 10px;
    font-weight: thin;
  }
  .btn-search {
    width: 70px;
    height: 100%;
    font-size: 24px;
    border: none;
    background-color: #a71c1c;
    border: 1px solid #a71c1c;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
    position: relative;
    left: 1px;
  }
`
