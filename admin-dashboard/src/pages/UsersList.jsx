import React, { useEffect, useState } from 'react'
import AdminSidebar from '../components/sidebar/AdminSidebar'
import axios from 'axios'
import { FaEdit, FaEye } from 'react-icons/fa'
import { FaDeleteLeft } from 'react-icons/fa6'
import { Button, Modal } from 'flowbite-react' 
import { useDispatch, useSelector } from 'react-redux'
import { deleteUsers, getUsers, getSingleUsers } from '../redux/users/userSlice'
const UsersList = () => {
    const usersData = useSelector(state => state.userReducer.users)
    const singleusersData = useSelector(state => state.userReducer.singleUser)
    const [userdatas, setUserData] = useState()
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false);
    const handleDelete = (id)=>{
        dispatch(deleteUsers(id))
    }
 

    useEffect(() => {
        dispatch(getUsers())
    }, [userdatas])
    return (
        <div className='flex'>
            <div className=''>
                <AdminSidebar />
            </div>
            <div className='w-full z-0'>
                <div className="relative w-full overflow-x-auto mt-4">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 p-6">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Contact
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Registration no
                                </th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usersData.map((item, index) => {
                                // const { address, age, email, mobile, gender, registrationNumber, username } = item;

                                return (
                                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" >
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {item.fullName}
                                        </th>
                                        <td className="px-6 py-4">
                                            {item.mobile}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.email}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.registrationNumber}
                                        </td>

                                        <td>
                                            <div className='flex gap-1'>
                                                <Button color="info" className='text-white' pill onClick={() => { setShowModal(true), dispatch(getSingleUsers(item._id)) }}><FaEye /></Button>
                                                <Button color="warning" className='' pill><FaEdit /></Button>
                                                <Button color="failure" pill className='' onClick={()=>{handleDelete(item._id), setUserData(usersData)}}><FaDeleteLeft /></Button></div>
                                        </td>
                                    </tr>
                                )
                            })}


                        </tbody>
                    </table>

                    <Modal show={showModal} onClose={() => setShowModal(false)}
                        popup
                        size='md'>
                        <Modal.Header />
                        <Modal.Body>
                            <div className='text-center'>
                                <h3 className='mb-5 text-lg text-red-500 font-semibold dark:text-gray-400'>
                                    {singleusersData.fullName}
                                </h3>
                                <div className='text-left'>
                                    <p>Username: {singleusersData.username}</p>
                                    <p>Email: {singleusersData.email}</p>
                                    <p>Mobile: {singleusersData.mobile}</p>
                                    <p>Registration: {singleusersData.registrationNumber}</p>
                                </div>

                                <div className='flex justify-center gap-4'>

                                    <Button color='gray' onClick={() => setShowModal(false)}>
                                        Okay
                                    </Button>
                                </div>
                            </div>
                        </Modal.Body>
                    </Modal>


                </div>

            </div>
        </div>
    )
}

export default UsersList