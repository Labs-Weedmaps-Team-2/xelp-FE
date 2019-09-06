import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useRouter, usePosition } from 'hooks'
import { useDispatch, useSelector } from 'react-redux'
import { setSearch } from 'actions'

const SearchBar = () => {
  // Custom hook to get users location
  const { latitude, longitude } = usePosition()
  const dispatch = useDispatch()
  const { history } = useRouter()
  const search = useSelector(({ search }) => search)

  useEffect(() => {
    console.log('Location: ', latitude, longitude)
    if (latitude) {
      fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=${process.env.REACT_APP_OPENCAGE_API_KEY}`)
        .then(res => res.json())
        .then(json => {
          dispatch(
            setSearch(
              search.term,
              json.results[0].formatted
            )
          )
        }
        )
    }
  }, [latitude, longitude])
  const handleSubmit = () => {
    if (search.term && search.location) {
      history.push('/business-list')
    }
  }
  const handleChange = e => {
    const searchCopy = { ...search, [e.target.name]: e.target.value }
    dispatch(setSearch(searchCopy.term, searchCopy.location))
  }
  return (
    <StyledHero >
      <StyledLogo src="https://s3-media1.fl.yelpcdn.com/assets/srv0/styleguide/891ac3707136/assets/img/brand_guidelines/yelp_fullcolor@2x.png" alt="Logo" />;
      <div className="inputs-container">
        <div className="search-container type">
          <p>What?</p>
          <input
            type="text"
            placeholder="bars, clubs, breweries, venues..."
            value={search.term}
            name="term"
            onChange={handleChange}
          />
        </div>
        <div className="search-container locale">
          <p>Where?</p>
          <input
            type="text"
            placeholder="Los Angeles"
            value={search.location}
            name="location"
            onChange={handleChange}
          />
        </div>
        <div className="search-button" onClick={handleSubmit}>
          go
        </div>
      </div>
    </StyledHero>
  )
}

export default SearchBar

const StyledHero = styled.div`
  background-image: url("https://s3-media3.fl.yelpcdn.com/assets/srv0/yelp_large_assets/fa674c810afa/assets/img/home/hero_photos/sL6pI2T8M-jSGiZzeq6Wxg.jpg");
  background-color: #333;
  background-size: cover;
  background-position: 50%;
  height: 570px;
  display: flex;
  justify-content: center;
  align-items: center;
  .inputs-container {
    width: 80%;
    height: 50px;
    background-color: white;
    border-radius: 5px;
    display: flex;
    flex-flow: row;
    justify-content: center;
    .search-container {
      width:47%;
      display: flex;
      flex-flow: row;
      align-items: center;
      p {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80%;
        width: 18%;
        font-weight: bold;
      }
      input {
        height: 80%;
        width: 82%;
        border: none;
        font-size: 1em;
        display: flex;
        align-items: center;
      }
    }
    .locale {
      p {
        border-left: 1px solid lightslategrey;
      }
    }
    .search-button {
      width: 6%;
      background-color: red;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0px 5px 5px 0px;
    }
  }
`

const StyledLogo = styled.img`
  position: absolute;
  top: 10%;
  width: 200px;
  height: auto;
  padding: 0;
  margin: 0 auto 48px;
  background-repeat: no-repeat;
}
`;