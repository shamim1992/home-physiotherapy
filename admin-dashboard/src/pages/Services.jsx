import React, { useState, useEffect } from 'react'
import AdminSidebar from '../components/sidebar/AdminSidebar';
import { Button } from 'flowbite-react';
import { FaEdit } from 'react-icons/fa'
import { FaDeleteLeft } from 'react-icons/fa6'
import { useDispatch, useSelector } from 'react-redux';
import {getServices, deleteServices} from '../redux/service/serviceSlice';
const Services = () => {

  const services  = useSelector((state) => {return state.serviceReducer.service})
const [newService, setNewService] = useState()
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(getServices())
  }, [newService])
  return (
    <div className='flex'>
            <div className=''>
                <AdminSidebar />
            </div>
            <div className='w-full z-0'>
                <div className="relative w-full overflow-x-auto mt-4">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 table-auto">
                        <thead className="text-xs  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Description
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Image
                                </th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {services.map((item, index) => {
                                return (
                                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" >
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {item.servicename}
                                        </th>
                                        <td className="px-6 py-4">
                                            {item.description}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.price}
                                        </td>
                                        <td className="px-6 py-4">
                                            <img src={`http://localhost:5001/uploads/${item.serviceimage}`} alt="img" className='h-14 w-14' />
                                        </td>

                                        <td>
                                            <div className='flex gap-1'>
                                                <Button color="warning" className='' pill><FaEdit /></Button>
                                                <Button color="failure" pill className='' onClick={()=>{dispatch(deleteServices(item._id)),setNewService(services)}}><FaDeleteLeft /></Button></div>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
   
  )
}

export default Services