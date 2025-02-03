import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/Home';
import Shops from './Components/Shops';
import Vendor from './Components/Vendor';
import Contact from './Components/Contact';
import About from './Components/About';
import Login from './Components/login';
import Signup from './Components/Signup';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'element={<Layout />}>
            <Route path='/home' index element={<Home />}/>
              <Route path='/shop' element={<Shops/>}/>
              <Route path='vendor' element={<Vendor/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/contact' element={<Contact/>}/>
              </Route>
              <Route path='/login' element={<Login/>}/>
              <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
