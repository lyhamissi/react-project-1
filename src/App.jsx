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
import DashboardLayout from './Dashboard/DashboardLayout';
import DashoboardView from './Dashboard/DashoboardView';
import ProductView from './Dashboard/ProductView';
import Orders from './Dashboard/Orders';
import Contacts from './Dashboard/Contacts';
import VendorView from './Dashboard/VendorView';
import Customers from './Dashboard/Customers';
import Settings from './Dashboard/Settings';
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
          <Route path='/' element={<DashboardLayout/>}>
          <Route path='/dashboard' index element={<DashoboardView/>}/>
          <Route path='/productview' element={<ProductView/>}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/contactview' element={<Contacts/>}/>
          <Route path='/vendorview' element={<VendorView/>}/>
          <Route path='/customers' element={<Customers/>}/>
          <Route path='/settings' element={<Settings/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
