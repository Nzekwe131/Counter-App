import React from 'react'
import {Link} from 'react-router-dom';
import {Helmet} from "react-helmet-async";

const ErrorPage = () => {
  return (
    <>
    <Helmet>
  <title>Error Page</title>
  <meta
    name='description'
    content='displays our ErrorPage component'/>
     <link ref='canonical' href='/errorpage'/>
  </Helmet>
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
