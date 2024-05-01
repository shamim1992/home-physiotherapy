import React from 'react'
import { Avatar, Button, Dropdown, Navbar, NavbarToggle } from 'flowbite-react';
import {FaSun} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import {  toggleHeader } from '../../redux/theme/themeSlice';
import { IoMdMenu } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import AppUrl from '../../../ApiUrl';
import { signOut } from '../../redux/users/adminSlice';



const Header = () => {
const dispatch = useDispatch()
const navigate = useNavigate()
const currentUser = useSelector(state => state.adminReducer.currentUser)
// console.log(currentUser)
const { sidebar} = useSelector(state => state.sidebar)
// console.log(sidebar)

const handleSignout =async () => {
  try {
    const res = await fetch(`${AppUrl}/api/auth/signout`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    console.log(res)
    if (res.ok) {
        dispatch(signOut())
        navigate('/');
    }
} catch (error) {
    console.log(error)
}
}

  return (
    <Navbar fluid className='shadow-md'>
      <Navbar.Brand href="#">
        {/* <img src="" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
        <span className="self-center whitespace-nowrap text-lg font-semibold dark:text-white">ChanRe Physiotherapy</span>
      </Navbar.Brand>
      <div className="flex md:order-2  space-x-4">
        {/* <NavbarToggle /> */}
        <Button className='w-12 h-10 sm:inline' color='gray' pill >
          <FaSun />
        </Button>
        <Button className='w-14 h-10 sm:inline' color='gray' pill onClick={()=>dispatch(toggleHeader())}  >
        <IoMdMenu />
        </Button>

        {
          currentUser != null ? <>
          <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" className='rounded-lg'/>
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">{currentUser.fullName}</span>
            <span className="block truncate text-sm font-medium">{currentUser.email}</span>
          </Dropdown.Header>
          <Dropdown.Item><Link to={'/dashboard'}>Dashboard</Link></Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          
          <Dropdown.Divider />
          <Dropdown.Item onClick={()=>handleSignout()}>Sign out</Dropdown.Item>
        </Dropdown></>:<><Link to={'/signin'}></Link></>
        }
        
        {/* <Navbar.Toggle /> */}
      </div>
      {/* <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse> */}
    </Navbar>
  )
}

export default Header