import React from 'react'
import styled from 'styled-components'


const SearchBar = () => {
  return (
    <StyledHero >
      <div className="inputs-container">
        <div className="item-search-container"></div>
        <div className="locale-search-container"></div>
        <div className="search-button">
          GO!
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
    .item-search-container {
      width:47%;
    }
    .locale-search-container {
      width:47%;
    }
    .search-button {
      width: 6%;
      background-color: red;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`