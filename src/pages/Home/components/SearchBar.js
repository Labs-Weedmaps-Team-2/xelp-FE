import React from 'react'
import styled from 'styled-components'


const SearchBar = () => {
  return (
    <StyledHero >
      SearchBar
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
`