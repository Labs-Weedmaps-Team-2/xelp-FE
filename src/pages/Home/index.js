import React from 'react'
import { Auth } from 'containers'
import { SearchBar } from './components'
import styled from 'styled-components'

const Home = () => {
  return (
    <Container>
      <div className='auth-wrap'>
        <Auth />
      </div>
      <SearchBar />
    </Container>
  )
}

export default Home

const Container = styled.div`
  position: relative;
  width: 100%;
  .auth-wrap {
    position: absolute;
    top: 50px;
    right: 17.5%;
    z-index: 30;
  }
`
