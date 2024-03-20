import { Sidebar } from 'flowbite-react'
import React from 'react'

const DashSidebar = () => {
  return (
    <Sidebar className='min-h-screen'>
<Sidebar.ItemGroup className='min-h-screen'>
    <Sidebar.Item>Dashboard</Sidebar.Item>
    <Sidebar.Item>Profile</Sidebar.Item>
    <Sidebar.Item>My Order</Sidebar.Item>
    
</Sidebar.ItemGroup>
    </Sidebar>
  )
}

export default DashSidebar