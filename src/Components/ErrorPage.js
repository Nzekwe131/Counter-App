import React from 'react'
import {Link} from 'react-router-dom';
const ErrorPage = () => {
  return (
    <div className='errorpage-cont'>
      opps!!!
      page not found
      <Link className='link' to='/'>Home</Link>
    </div>
  )
}

export default ErrorPage
