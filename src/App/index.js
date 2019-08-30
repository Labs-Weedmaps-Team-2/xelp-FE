import React, { lazy, Suspense } from 'react'
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'
import CSSReset from '../styles/cssReset'
import { black, bg } from 'styles'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
const Home = lazy(() => import('../pages/Home'))
const Profile = lazy(() => import('../pages/Profile'))

const App = () => {
  return (
    <Container>
      <CSSReset />
      <Navbar />
      <Suspense fallback={null}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/profile' component={Profile} />
        </Switch>
      </Suspense>
      <Footer />
    </Container>
  )
}

export default App

const Container = styled.div`
  position: relative;
  width: 100%;
  color: ${black};
  background-color: ${bg};
  min-height: 100vh;
  height: 100%;
`
