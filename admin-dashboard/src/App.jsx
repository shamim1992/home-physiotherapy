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
import Confirmed from './components/appointment/Confirmed'
import NewOrder from './components/appointment/NewOrder'
import RejectedAppointment from './components/appointment/RejectedAppointment'
import { useSelector } from 'react-redux'
import NotFound from './pages/NotFound'
import UpdateService from './pages/UpdateService'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
const currentUser = useSelector(state => state.adminReducer.currentUser)


  
  return (
    <>
    <ToastContainer
position="top-center"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"


/>
      <BrowserRouter>
      <Header/>
  
        <Routes>
{
  currentUser?.isAdmin === true ? <><Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/dashboard' element={<Home />} />
          <Route path='/services' element={<Services/>} />
          <Route path='/appointment' element={<Appointment/>} />
          <Route path='/users' element={<UsersList />} />
          <Route path='/addservice' element={<AddService/>} />
          <Route path='/confirmed' element={<Confirmed />} />
          <Route path='/neworder' element={<NewOrder />} />
          <Route path='/rejected' element={<RejectedAppointment/>} />
          <Route path='/*' element={<NotFound />} />
          <Route path='/update/:id' element={<UpdateService/>} />
          </>:<>
          <Route path='/signin' element={<Signin />} />
          <Route path='/*' element={<Signin />} />
          </>
}
          

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
