import {Routes,Route} from 'react-router-dom';
import NavBar from './Components/NavBar';
import Counter from './Components/Counter';
import Errorboundary from './Components/Errorboundary';
import ErrorPage from './Components/ErrorPage';
import {Helmet} from "react-helmet-async";



function App() {
  return (
    <div>
      <Helmet>
  <title>AppCounter</title>
  <meta
    name='description'
    content='the parent root of our Counter App for Altschool Assignment'/>
     <link ref='canonical' href='/'/>
  </Helmet>
    <Routes>
     <Route path='/' element={<NavBar/>}/>
     <Route path='/counter' element={<Counter/>}/>
     <Route path='/errorpage' element={<ErrorPage/>}/>
      <Route path='/error' element={<Errorboundary/>}/>
    </Routes>
    </div>
  );
}



export default App;
