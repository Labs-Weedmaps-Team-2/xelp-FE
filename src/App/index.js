import React, { lazy, Suspense } from 'react'
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'

import CSSReset from '../styles/cssReset'
const Home = lazy(() => import('../pages/Home'))

const App = () => {
  return (
    <div>
      <CSSReset />
      <nav>App</nav>
      <Suspense fallback={null}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/profile' component={Profile} />
        </Switch>
      </Suspense>
    </div>
  )
}

export default App
