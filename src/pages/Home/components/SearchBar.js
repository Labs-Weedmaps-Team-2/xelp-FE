import React from 'react'
import styled from 'styled-components'


const SearchBar = () => {
  return (
    <StyledHero >
      <div className="inputs-container">
        <div className="item-search-container">
          <p>What?</p>
          <input type="text" placeholder="bars, clubs, breweries, venues" />
        </div>
        <div className="locale-search-container">
          <p>Where?</p>
          <input type="text" placeholder="Los Angeles" />
        </div>
        <div className="search-button">
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
    .item-search-container {
      width:47%;
      display: flex;
      flex-flow: row;
      align-items: center;
      p {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 90%;
        width: 18%;
        font-weight: bold;
      }
      input {
        height: 90%;
        width: 82%;
        border: none;
        font-size: 1em;
      }
    }
    .locale-search-container {
      width:47%;
      display: flex;
      flex-flow: row;
      align-items: center;
      p {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 90%;
        width: 18%;
        font-weight: bold;
      }
      input {
        height: 90%;
        width: 82%;
        border: none;
        font-size: 1em;
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