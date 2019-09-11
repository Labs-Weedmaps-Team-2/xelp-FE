import React from 'react'
import { Navbar } from 'components'
import { SearchBar } from './components'
import styled from 'styled-components'

const Home = () => {
  return (
    <Container>
      <div className='nav-wrap'>
        <Navbar />
      </div>
      <SearchBar />
    </Container>
  )
}

export default Home

const Container = styled.div`
  position: relative;
  width: 100%;
  .nav-wrap {
    position: absolute;
    top: 50px;
    right: 10%;
    z-index: 30;
  }
`
