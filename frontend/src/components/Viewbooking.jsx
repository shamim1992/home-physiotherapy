import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import AppUrl from '../../ApiUrl';

const Viewbooking = () => {
    const [bookingData, setBookingData] = useState({});
    console.log(bookingData);
    const { id } = useParams();

    const getBookingData = () => {
        axios.get(`${AppUrl}/api/booking/${id}`).then(res => setBookingData(res.data));
    };

    useEffect(() => {
        getBookingData();
    }, [id]);

    return (
        <div className='min-h-screen dark:bg-gray-900'>
            <div className='flex justify-center py-10'>
                <h1 className='text-2xl font-semibold dark:text-white'>View Order</h1>
            </div>
            <div className="overflow-x-auto my-5 flex justify-center rounded-lg">
                <table className='table shadow-md border-2 rounded-lg'>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Name: </td>
                            <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{bookingData.fullName}</td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Contact: </td>
                            <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{bookingData.contact}</td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Email: </td>
                            <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{bookingData.email}</td>
                        </tr>
                        {bookingData.service?.map((item, index) => (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Service: </td>
                                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{item.servicename}</td>
                            </tr>
                        ))}
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Booking Date: </td>
                            <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{new Date(bookingData.createdAt).toDateString()}</td>
                        </tr>

                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Appointment Date: </td>
                            <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{new Date(bookingData.date).toDateString()}</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Viewbooking;
