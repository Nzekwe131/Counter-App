import React,{useState} from 'react'
import './Errorboundary.css'
import {Link} from 'react-router-dom';
import { ErrorBoundary } from "react-error-boundary";




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

         
function Bomb() {
  throw new Error("💥 CABOOM 💥");
}
  
  return (
    <div className='container-errorboundarr'>
    <ErrorBoundary 
  
    FallbackComponent={ErrorFallback}
      onReset={() => setExplode(false)}
      resetKeys={[explode]}
   >
        <Link to='/' className='link'>home</Link>

      <h5>Errorboundary section</h5>
      <h4>Error will be thrown once button is clicked</h4>
      <div>
    {explode ? <Bomb /> : null}
    <button onClick={()=>setExplode(state=>!state)}>Click Explode</button>
    </div>
   </ErrorBoundary>
   </div>

    
  )
}

export default Errorboundary





