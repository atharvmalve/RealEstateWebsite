import { BrowserRouter ,Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import Siginin from './pages/Siginin';
import SignOut from './pages/SignOut';
import Profile from './pages/Profile';
import About from './pages/About';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/sign-in' element={<Siginin />}/>
        <Route path='/sign-out' element={<SignOut />}/>
        <Route path='/profile' element={<Profile />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;