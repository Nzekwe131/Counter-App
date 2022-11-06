import {Routes,Route} from 'react-router-dom';
import NavBar from './Components/NavBar';
import Counter from './Components/Counter';
import Errorboundary from './Components/Errorboundary';
import ErrorPage from './Components/ErrorPage';
import Home from './Components/Home'


function App() {
  return (
    <div>
    <Routes>
     <Route path='/' element={<NavBar/>}/>
     <Route path='/counter' element={<Counter/>}/>
     <Route path='/errorpage' element={<ErrorPage/>}/>
      <Route path='/error' element={<Errorboundary/>}/>
    </Routes>
    {/* <Home/> */}
    </div>
  );
}

export default App;

