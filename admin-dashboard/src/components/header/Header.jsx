import React from 'react'
import { Avatar, Button, Dropdown, Navbar, NavbarToggle } from 'flowbite-react';
import {FaSun} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import {  toggleHeader } from '../../redux/theme/themeSlice';

const Header = () => {
const dispatch = useDispatch()

const { sidebar} = useSelector(state => state.sidebar)
// console.log(sidebar)


  return (
    <Navbar fluid className='shadow-md'>
      <Navbar.Brand href="#">
        {/* <img src="" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
        <span className="self-center whitespace-nowrap text-lg font-semibold dark:text-white">ChanRe Physiotherapy</span>
      </Navbar.Brand>
      <div className="flex md:order-2  space-x-4">
        <NavbarToggle onClick={()=>dispatch(toggleHeader())} />
        <Button className='w-12 h-10 sm:inline' color='gray' pill >
          <FaSun />
        </Button>
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@email.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
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