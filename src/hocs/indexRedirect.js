import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

const IndexRedirect = Component => ({ auth }) => {
  const renderContent = () => {
    switch (auth) {
      case null:
        // loading
        return null
      // auth false (user not logged in)
      case false:
        return <div>Login</div>
      // covered all cases; only case left is if auth is true therefore render Component
      default:
        return <Component />
    }
  }

  return <>{renderContent()}</>
}

const mapStateToProps = ({ auth }) => ({ auth })

export const composedIndexRedirect = compose(
  connect(mapStateToProps),
  IndexRedirect
)
