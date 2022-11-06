import React from 'react'
import {Link} from 'react-router-dom';
const ErrorPage = () => {
  return (
    <>
   <div >
<Link to='/' className='link'>Home</Link>
</div>
    <div className='errorpage-cont'>
      opps!!!
      page not found
    </div>
    </>
 
  )
}

export default ErrorPage
