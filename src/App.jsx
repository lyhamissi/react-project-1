import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/Home';
import Shops from './Components/Shops';
import Vendor from './Components/Vendor';
import Contact from './Components/Contact';
import About from './Components/About';
import ProductDetails from './Components/ProductDetails';
import ProductDetail from './Components/ProductDetail';
import AddProduct from './Components/AddProduct';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' index element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/shop' element={<Shops />} />
            <Route path='vendor' element={<Vendor />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/singleproduct/:id' element={<ProductDetails />} />
            <Route path='/product/:ids' element={<ProductDetail />} />
            <Route path='/addproduct' element={<AddProduct/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
