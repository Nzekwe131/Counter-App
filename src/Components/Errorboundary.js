import React,{useState} from 'react'
import './Errorboundary.css'
import {Link} from 'react-router-dom';
import { ErrorBoundary } from "react-error-boundary";
import {Helmet} from "react-helmet-async";




const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div className="error-container">
      <p>Something went wrong:</p>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>Reset App</button>
    </div>
  );
};



const Errorboundary = () => {
  const [explode, setExplode] = useState(false);

         const test={
          description:'Errorboundary section'
         }

function Bomb() {
  throw new Error("💥 CABOOM 💥");
}
  
  return (
    <>
    <Helmet>
  <title>Errorboundary</title>
  <meta
    name='description'
    content='displays our Errorboundary component'/>
     <link ref='canonical' href='/error'/>
  </Helmet>
 <div >
<Link to='/' className='link'>Home</Link>
</div>
 <div className='container-errorboundary'>
    <ErrorBoundary 
    
    FallbackComponent={ErrorFallback}
      onReset={() => setExplode(false)}
      resetKeys={[explode]}
   >
      <h5>{test.description.toUpperCase()}</h5>
      <h4>Error will be thrown once button is clicked</h4>
      <div>
    {explode ? <Bomb /> : null}
    <button onClick={()=>setExplode(state=>!state)}>Click Explode</button>
    </div>
   </ErrorBoundary>
   </div>
    </>
   
  )
}

export default Errorboundary





