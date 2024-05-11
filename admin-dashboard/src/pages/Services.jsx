import React, { useState, useEffect } from 'react'
import AdminSidebar from '../components/sidebar/AdminSidebar';
import { Button } from 'flowbite-react';
import { FaEdit } from 'react-icons/fa'
import { FaDeleteLeft } from 'react-icons/fa6'
import { useDispatch, useSelector } from 'react-redux';
import {getServices, deleteServices} from '../redux/service/serviceSlice';
import AppUrl from '../../ApiUrl';
import { Link } from 'react-router-dom';
const Services = () => {

  const services  = useSelector((state) => {return state.serviceReducer.service})
const [newService, setNewService] = useState()
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(getServices())
  }, [newService])
  return (
    <div className='flex gap-5'>
            <div className=''>
                <AdminSidebar />
            </div>
            <div className="flex justify-center flex-grow overflow-x-auto">
                <div className="px-4 p-4 overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 p-6">
                    <thead className="text-xs text-white uppercase bg-indigo-500 dark:bg-gray-700 dark:text-gray-400">
                            <tr className='p-5'>
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
                                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-xs" >
                                        <th scope="row" className=" font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {item.servicename}
                                        </th>
                                        <td className="px-6">
                                            {item.description}
                                        </td>
                                        <td className="px-6 py-2">
                                            {item.price}
                                        </td>
                                        <td className="px-6 py-2">
                                            <img src={`${AppUrl}/uploads/${item.serviceimage}`} alt="img" className='h-14 w-14' />
                                        </td>

                                        <td>
                                            <div className='flex gap-1'>
                                            <Link to={`/update/${item._id}`}   >   <Button color="warning"><FaEdit /></Button> </Link>
                                                <Button color="failure" className='btn-sm' onClick={()=>{dispatch(deleteServices(item._id)),setNewService(services)}}><FaDeleteLeft /></Button></div>
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