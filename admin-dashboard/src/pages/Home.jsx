import React, { useEffect } from 'react'
import AdminSidebar from '../components/sidebar/AdminSidebar'
import { Card } from 'flowbite-react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../redux/users/userSlice'


const Home = () => {
  const usersData = useSelector(state => state.userReducer.users)
  const services = useSelector(state => state.serviceReducer.service)
  const appointments = useSelector(state => state.appointmentReducer.appointment)
  const newAppointment = appointments.filter(item => item.status === 'Pending');
  const ConfirmedAppointment = appointments.filter(item => item.status === 'confirmed');
  console.log(appointments)
  const dispatch = useDispatch()


  useEffect(()=>{
    dispatch(getUsers())
  },[dispatch])
  return (
    <div className='flex'>
      <div>
        <AdminSidebar />
      </div>
      <div>
        <div className='flex justify-center flex-wrap self-center'>
          
          <div className='flex m-5 justify-center rounded-lg border-2 border-blue-400 shadow-md w-60'>
            <div href="#" className="max-w-sm p-10 flex flex-col items-center">
              <h5 className="text-2xl text-center font-bold tracking-tight text-white dark:text-white mb-5 bg-blue-500 h-20 w-20 rounded-full shadow-lg flex items-center justify-center">
                {usersData.length? usersData.length : '10'}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
                Registered Users
              </p>
            </div>
          </div>

          <div className='flex m-5 justify-center rounded-lg shadow-md w-60 border-2 border-blue-400 '>
            <div href="#" className="max-w-sm  p-10 flex flex-col items-center">
              <h5 className="text-2xl text-center shadow-lg font-bold tracking-tight text-white dark:text-white mb-5 bg-blue-500 h-20 w-20 rounded-full flex items-center justify-center">
                {services?.length}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
                Services
              </p>
            </div>
          </div>

          <div className='flex m-5 justify-center rounded-lg shadow-md w-60 border-2 border-blue-400'>
            <div href="#" className="max-w-sm p-10 flex flex-col items-center">
              <h5 className="text-2xl text-center shadow-lg font-bold tracking-tight text-white dark:text-white mb-5 bg-blue-500 h-20 w-20 rounded-full flex items-center justify-center">
                {newAppointment?.length}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
                New Appointment
              </p>
            </div>
          </div>

          <div className='flex m-5 justify-center rounded-lg shadow-md w-60 border-2 border-blue-400'>
            <div href="#" className="max-w-sm p-10 flex flex-col items-center">
              <h5 className="text-2xl text-center shadow-lg font-bold tracking-tight text-white dark:text-white mb-5 bg-blue-500 h-20 w-20 rounded-full flex items-center justify-center">
                {ConfirmedAppointment?.length}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
                Confirmed Appointment
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home