import './App.css'
import Header from './components/header/Header'
// import AdminSidebar from './components/sidebar/AdminSidebar'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signin from './pages/Signin'
import Services from './pages/Services'
import Appointment from './pages/Appointment'
import UsersList from './pages/UsersList'
import AddService from './components/services/AddService'

function App() {

  return (
    <>
      <BrowserRouter>
      <Header/>
  
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/dashboard' element={<Home />} />
          <Route path='/services' element={<Services/>} />
          <Route path='/appointment' element={<Appointment/>} />
          <Route path='/users' element={<UsersList />} />
          <Route path='/addservice' element={<AddService/>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
