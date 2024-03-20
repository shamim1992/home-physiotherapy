
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
import DashboardAdmin from './admin/dashboard/DashboardAdmin'
import AddService from './admin/dashboard/AddService'



function App() {


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
      <Route path='/admin' element={<DashboardAdmin/>}/>

      <Route path='/addservice' element={<AddService/>} />
    </Routes>
    <FooterSection/>
    </BrowserRouter>
  )
}

export default App
