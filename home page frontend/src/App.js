import Aboutus from './pages/Aboutus';
import Login from './pages/Login';
import Manifesto from './pages/Manifesto';
import Analysis from './pages/Analysis';
import Signup from './pages/signup.js';
import Home from './pages/Home';
import VotingPage from './pages/VotingPage';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/VotingPage' element={<VotingPage/>}/>
          <Route path='/Aboutus' element={<Aboutus/>}/>
          <Route path='/Analysis' element={<Analysis/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Manifesto' element={<Manifesto/>}/>
          <Route path='/Signup' element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;