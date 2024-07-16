// NotFound.js

import React from 'react'
import {useHistory} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const NotFound = () => {
  const history = useHistory()

  // Function to navigate back to the previous page
  const goBack = () => {
    history.goBack()
  }

  return (
    <>
      <Header />
      <div className="not-found-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png"
          alt="not found"
          className="not-found-img"
        />
        <h1 className="not-found-heading">Page Not Found</h1>
        <p className="not-found-description">
          We're sorry, the page you requested could not be found.
        </p>
        <button onClick={goBack}>Go Back</button>
      </div>
    </>
  )
}

export default NotFound
