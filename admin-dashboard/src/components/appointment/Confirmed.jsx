import React, { useEffect, useState } from 'react';
import AdminSidebar from '../sidebar/AdminSidebar';
import { useDispatch, useSelector } from 'react-redux';
import { getAppointment, singleAppointment, updateAppointmentStatus } from '../../redux/appointment/appointmentSlice';
import { Table, Modal, Button } from "flowbite-react";
import { FaEye, FaCheckCircle, FaTrashAlt } from "react-icons/fa";

const Confirmed = () => {
    const appointments = useSelector(state => state.appointmentReducer.appointment);
    const singleAppointments = useSelector(state => state.appointmentReducer.singleAppointment);
    const [showModal, setShowModal] = useState(false);
    const [selectedAppointmentId, setSelectedAppointmentId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAppointment());
    }, [dispatch]);

    const handleViewAppointment = (id) => {
        dispatch(singleAppointment(id));
        setShowModal(true);
    };

    const handleUpdateStatus = (id, status) => {
        dispatch(updateAppointmentStatus({ id, status }))
            .then(() => {
                dispatch(getAppointment());
            })
            .catch(error => {
                console.error('Error updating status:', error);
            });
    };

    // Filter appointments with status 'confirmed'
    const confirmedAppointments = appointments?.filter(item => item.status === 'confirmed');
    console.log(confirmedAppointments)
    return (
        <div className='flex'>
            <AdminSidebar />
            <div className="flex justify-center flex-grow overflow-x-auto">
                <div className="px-4 p-4 overflow-x-auto">
                    <h2 className='text-center font-bold py-2 text-2xl'>Confirmed Appointment</h2>
                    <Table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 p-6">
                        <thead className="text-xs text-white uppercase bg-indigo-500 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Date
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Address
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Contact
                                </th>
                                <th>Status</th>
                                <th scope="col" className="px-6 py-3">
                                    View
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {confirmedAppointments?.map((item, index) => {
                                return (
                                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-xs" >
                                        <td className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {item.fullName}
                                        </td>
                                        <td className="px-6 py-2">
                                            {new Date(item.date).toDateString()}
                                        </td>
                                        <td className="px-6 py-2">
                                            {item.address}
                                        </td>
                                        <td className="px-6 py-2">
                                            {item.contact}
                                        </td>
                                        <td className="px-6 py-2">
                                            {item.status}
                                        </td>
                                        <td className="px-6 py-2 ">
                                            <button onClick={() => handleViewAppointment(item._id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 mr-1 rounded">
                                                <FaEye />
                                            </button>
                                            <button onClick={() => handleUpdateStatus(item._id, 'Confirmed')} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 mr-1 rounded">
                                                <FaCheckCircle />
                                            </button>
                                            <button onClick={() => handleUpdateStatus(item._id, 'Rejected')} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 mr-1 rounded">
                                                <FaTrashAlt />
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>

                    <Modal show={showModal} onClose={() => setShowModal(false)}
                        popup
                        size='md'>
                        <Modal.Header />
                        <Modal.Body>
                            <div className='text-center'>
                                <h3 className='mb-5 text-lg text-red-500 font-semibold dark:text-gray-400'>
                                    {singleAppointments.fullName}
                                </h3>
                                <div className='text-left'>
                                    <p>Username: {singleAppointments.username}</p>
                                    <p>Email: {singleAppointments.email}</p>
                                    <p><strong>Services:</strong>  </p>
                                    <ul>
                                        {singleAppointments.service && singleAppointments.service.length > 0 ? (
                                            singleAppointments.service.map((service, index) => {
                                                return (
                                                    <li className="service-box" key={index}>
                                                        <p>{service.servicename}</p>
                                                    </li>
                                                )
                                            })
                                        ) : (
                                            <p>No services found.</p>
                                        )}
                                    </ul>

                                    <p>Mobile: {singleAppointments.contact}</p>
                                    <p>Registration: {singleAppointments.address}</p>
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
    );
};

export default Confirmed;
