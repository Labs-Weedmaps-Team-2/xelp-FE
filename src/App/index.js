import React, { lazy, Suspense, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchUser } from 'actions'
import CSSReset from 'styles/cssReset'
import { black, bg } from 'styles'
import ReviewForm from 'pages/Business/components/ReviewForm'
const Home = lazy(() => import('pages/Home'))
const Profile = lazy(() => import('pages/Profile'))
const SignIn = lazy(() => import('pages/SignIn'))
const Business = lazy(() => import('pages/Business'))
const BusinessList = lazy(() => import('pages/BusinessList'))
const AddPhotos = lazy(() => import('pages/AddPhotos'))
const AddBusinessForm = lazy(() =>
  import('pages/Business/components/AddBusinessForm')
)
const BusinessGallery = lazy(() => import('pages/BusinessGallery'))
const NotFound = lazy(() => import('pages/NotFound'))

const App = () => {
  const dispatch = useDispatch()
  const fetchUserCB = useCallback(() => {
    dispatch(fetchUser())
  }, [dispatch])

  useEffect(() => {
    fetchUserCB()
  }, [fetchUserCB])

  return (
    <Container>
      <CSSReset />
      <Suspense fallback={null}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/profile' component={Profile} />
          <Route path='/sign-in' component={SignIn} />
          <Route path='/business/:id/' component={Business} />
          <Route path='/business-list' component={BusinessList} />
          <Route path='/review/:id' component={ReviewForm} />
          <Route path='/biz_gallery/:id' component={BusinessGallery} />
          <Route path='/addphotos/:id' component={AddPhotos} />
          <Route path='/addbusiness' component={AddBusinessForm} />
          <Route path='*' component={NotFound} />
        </Switch>
      </Suspense>
    </Container>
  )
}

export default App

const Container = styled.div`
  /* border: 2px solid black; */
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  color: ${black};
  background-color: ${bg};
  height: 100%;
`
