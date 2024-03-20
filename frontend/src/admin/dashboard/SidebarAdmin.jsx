
import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const SidebarAdmin = () => {

    const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  
  return (
    <div className='dark:bg-gray-900 min-h-screen'>
       <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:w-64`}
      >
        <div className="flex flex-col h-full bg-slate-400 min-h-screen">
          <div className="p-4">
            <h1 className="text-white text-lg font-semibold">Sidebar</h1>
          </div>
          <div className="flex-1 overflow-y-auto">
            <ul className="py-4">
              <li className="px-4 py-2 ">
                <Link to={'/addservice'}>Add Service</Link>
              </li>
              <li className="px-4 py-2 ">
                <Link to={'/viewservice'}>View Service</Link>
              </li>
              <li className="px-4 py-2 ">
                <Link to={'/appointment'}>Appointment</Link>
              </li>
              {/* Add more sidebar links as needed */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SidebarAdmin