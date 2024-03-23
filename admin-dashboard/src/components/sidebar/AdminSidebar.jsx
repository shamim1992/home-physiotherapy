import React from 'react'
import { Dropdown, Sidebar } from 'flowbite-react'
import { HiArrowSmRight, HiArrowCircleRight, HiViewBoards, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const AdminSidebar = () => {

    const { sidebar } = useSelector(state => state.sidebar)

    return (
        <div>
            {
                sidebar === 'true' ?
                    <Sidebar aria-label="Default sidebar example " className=' shadow-md'>
                        <Sidebar.Items className=' py-2 min-h-screen'>
                            <Sidebar.ItemGroup>
                                <Sidebar.Item icon={HiChartPie} as='div'>
                                    <Link to={'/'}>Dashboard</Link>
                                </Sidebar.Item>
                                <Sidebar.Collapse icon={HiShoppingBag} label="Appointment">
                                    <Sidebar.Item href="#">New Appointment</Sidebar.Item>
                                    <Sidebar.Item href="#">Confirmed Appointment</Sidebar.Item>
                                    <Sidebar.Item href="#">Cancelled Appointment</Sidebar.Item>
                                </Sidebar.Collapse>
                                <Sidebar.Collapse icon={HiViewBoards} label="Services">
                                <Sidebar.Item as='div'><Link to={'/addservice'}>Add Services</Link> </Sidebar.Item>
                                    <Sidebar.Item as='div'><Link to={'/services'}>View Services</Link> </Sidebar.Item>
                                    <Sidebar.Item href="#">Archive Services</Sidebar.Item>
                                </Sidebar.Collapse>
                                <Sidebar.Collapse icon={HiUser} label="Users">
                                    <Sidebar.Item as='div'><Link to={'/users'}>View Users</Link> </Sidebar.Item>
                                </Sidebar.Collapse>
                                <Sidebar.Item icon={HiArrowCircleRight}>
                                    Sign Out
                                </Sidebar.Item>
                            </Sidebar.ItemGroup>
                        </Sidebar.Items>
                    </Sidebar> : ''
            }
        </div>


    )
}

export default AdminSidebar