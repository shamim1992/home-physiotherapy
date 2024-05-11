
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Header from './components/Header'
import SignIn from './pages/SignIn'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import FooterSection from './components/Footer'
import Cart from './pages/Cart'
import Order from './pages/Order'
import Viewbooking from './components/Viewbooking'
import Service from './pages/Service'
import AddProfilePhoto from './components/AddProfilePhoto'
import { ToastContainer } from 'react-toastify'




function App() {
<ToastContainer/>

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/about' element={<About />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/order' element={<Order/>} />
      <Route path='/services' element={<Service/>} />
      <Route path='/*' element={<Home/>} />
      <Route path='/single/:id' element={<Viewbooking/>} />
      <Route path='/addprofile' element={<AddProfilePhoto/>} />
      
    </Routes>
    <FooterSection/>
    </BrowserRouter>
  )
}

export default App
