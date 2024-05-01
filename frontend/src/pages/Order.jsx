import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import { Button, Modal } from "flowbite-react";
import { Link } from 'react-router-dom';

const Order = () => {
    const currentUser = useSelector(state => state.user.currentUser)
    const [bookingData, setBookingData] = useState([]);
console.log(bookingData)
    const getBookingData = () => {
        axios.get(`/api/booking/?patientId=${currentUser._id}`).then(res => setBookingData(res.data));
    };

    useEffect(() => {
        getBookingData();
    }, []);

    return (
        <div className='min-h-screen dark:bg-gray-900'>
            <div className='flex justify-center py-10'>
                <h1 className='text-2xl font-semibold dark:text-white'>My Order</h1>
            </div>
            <div className="overflow-x-auto my-10 flex justify-center">
                <table className="w-full sm:w-[80%] table-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 m-15">
                    <thead className="text-xs text-white uppercase bg-indigo-500 dark:bg-gray-700 dark:text-gray-400 rounded-lg">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Contact
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookingData.map((item, index) => (
                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                    {item.fullName}
                                </td>
                                <td className="px-6 py-4">
                                    {new Date(item.date).toLocaleDateString()}
                                </td>
                                <td className="px-6 py-4">
                                    {item.contact}
                                </td>
                                <td className="px-6 py-4">
                                    {item.status}
                                </td>
                                <td className="px-6 py-4">
                                <Link to={`/single/${item._id}`}>View</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Order;
