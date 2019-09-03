import React, { lazy, Suspense, useEffect } from 'react'
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchUser } from 'actions'
import CSSReset from 'styles/cssReset'
import { black, bg } from 'styles'
import { Navbar, Footer } from 'components'
const Home = lazy(() => import('pages/Home'))
const Profile = lazy(() => import('pages/Profile'))
const SignIn = lazy(() => import('pages/SignIn'))
const Business = lazy(() => import('pages/Business'))
const BusinessList = lazy(() => import('pages/BusinessList'))

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUser())
  }, [])

  return (
    <Container>
      <CSSReset />
      <Navbar />
      <Suspense fallback={null}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/profile' component={Profile} />
          <Route path='/sign-in' component={SignIn} />
          <Route path='/business' component={Business} />
          <Route path='/business-list' component={BusinessList} />
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
