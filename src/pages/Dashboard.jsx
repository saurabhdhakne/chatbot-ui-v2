import React, { useState } from 'react'
import ChatGPTUI from '../components/ChatGPTUI'
import { SlClose, SlMenu } from 'react-icons/sl'
import Sidebar from '../components/Sidebar'

export const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(true)

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>  
        <div className={`flex p-0 md:p-5 ${isOpen ? 'md:ps-0' : 'ps-5'} h-screen`}>
            <div className={`${isOpen ?' w-[300px] px-4': 'w-0'}  bg-primary transition-all duration-300 overflow-hidden fixed md:static h-full z-50 `}>
                <Sidebar toggleSidebar={toggleSidebar} />
                
            </div>
            <div className='w-auto flex-grow bg-white rounded static'>
              <div className="flex p-7 absolute">
                <button className='p-0 rounded-full text-2xl text-primary' onClick={toggleSidebar}>
                  <SlMenu />
                </button>
              </div>
              <ChatGPTUI />
            </div>
        </div>
    </>
  )
}
