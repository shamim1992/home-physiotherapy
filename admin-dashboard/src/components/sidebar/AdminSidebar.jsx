import React, { useEffect } from 'react'
import { Dropdown, Sidebar } from 'flowbite-react'
import { HiArrowSmRight, HiArrowCircleRight, HiViewBoards, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const AdminSidebar = () => {

    const { sidebar } = useSelector(state => state.sidebar)

    return (
        <div>
            {sidebar === 'true' ? (
    <div className="shadow-md w-64">
        <div className="py-2 min-h-screen">
            <div className="mb-4">
                <Link to={'/'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                    {/* <HiChartPie className="inline-block w-5 h-5 mr-2" /> */}
                   <strong>Dashboard</strong> 
                </Link>
            </div>
            <div className="mb-4">
                <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                    {/* <HiShoppingBag className="inline-block w-5 h-5 mr-2" /> */}
                   <strong>Appointment</strong> 
                </div>
                <div className="">
                    <Link to={'/neworder'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">New Appointment</Link>
                    <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                        <Link to={'/confirmed'}>Confirmed Appointment</Link>
                    </div>
                    <Link to={'/rejected'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Cancelled Appointment</Link>
                </div>
            </div>
            <div className="mb-4">
                <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                    {/* <HiViewBoards className="inline-block w-5 h-5 mr-2" /> */}
                   <strong>Services</strong> 
                </div>
                <div className="">
                    <Link to={'/addservice'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Add Services</Link>
                    <Link to={'/services'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">View Services</Link>
                    <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Archive Services</div>
                </div>
            </div>
            <div className="mb-4">
                <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                    {/* <HiUser className="inline-block w-5 h-5 mr-2" /> */}
                   <strong>Users</strong> 
                </div>
                <div className="">
                    <Link to={'/users'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">View Users</Link>
                </div>
            </div>
            <div className="mb-4">
                <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                    {/* <HiArrowCircleRight className="inline-block w-5 h-5 mr-2" /> */}
                    Sign Out
                </div>
            </div>
        </div>
    </div>
) : null}

        </div>


    )
}

export default AdminSidebar