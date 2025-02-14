import React from 'react'
import CustomLogo from './CustomLogo'
import { SlClose } from 'react-icons/sl'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import { RiChat1Line } from 'react-icons/ri'
import { FaArrowRightFromBracket } from 'react-icons/fa6'
import { logout } from '../utils/auth'
import { useNavigate } from 'react-router-dom'

const Sidebar = ({ toggleSidebar }) => {
    
    const navigate = useNavigate();
    
    const logoutHandler = () => {
        logout()
        navigate('/login'); 
    }
    return (
        <>
            <div className="flex flex-col h-full">

                <div className="flex items-center content-center w-full mt-6 md:mt-2 md:p-0">
                    <CustomLogo mode={'dark'} />
                    <button className='p-0 rounded-full text-2xl text-white ms-auto block md:hidden' onClick={toggleSidebar}>
                        <SlClose />
                    </button>
                </div>

                <button className='mt-10 text-white text-xl flex items-center gap-4 py-2 px-3 bg-secondary w-full rounded'>
                    <BsFillPlusCircleFill />
                    <span>New Chat</span>
                </button>

                <div className='mt-10'>
                    <h5 className='text-secondary first-letter:uppercase text-xl font-semibold'>Today</h5>
                    <button className='text-gray-300 hover:text-white flex items-center gap-2 py-2 px-3 w-full rounded mt-2'>
                        <span className='t'>
                            <RiChat1Line className='' />
                        </span>
                        <span className='text-sm truncate'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias suscipit nam nisi, iure laudantium quia quam? In corrupti aut excepturi adipisci eveniet dicta impedit eius rerum beatae a numquam ipsa doloribus ad ab unde dignissimos sequi quo alias animi, nulla explicabo. Excepturi autem fuga debitis dolorem nam sunt quos. Consequuntur quibusdam quidem vitae, cupiditate beatae at repellendus animi, tempore ipsum eos ex est nemo incidunt fuga voluptatem dignissimos distinctio, id laborum! Laudantium, sint nisi ad distinctio ipsa quisquam iste error in quis debitis quaerat officia. Laboriosam voluptate numquam dicta qui cum perferendis dolor aliquid at, sit quibusdam architecto quas totam!
                        </span>
                    </button>
                </div>

                <div className='mt-5'>
                    <h5 className='text-secondary first-letter:uppercase text-xl font-semibold'>Yesterday</h5>
                    <button className='text-gray-300 hover:text-white flex items-center gap-2 py-2 px-3 w-full rounded mt-2'>
                        <span className='t'>
                            <RiChat1Line className='' />
                        </span>
                        <span className='text-sm truncate'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias suscipit nam nisi, iure laudantium quia quam? In corrupti aut excepturi adipisci eveniet dicta impedit eius rerum beatae a numquam ipsa doloribus ad ab unde dignissimos sequi quo alias animi, nulla explicabo. Excepturi autem fuga debitis dolorem nam sunt quos. Consequuntur quibusdam quidem vitae, cupiditate beatae at repellendus animi, tempore ipsum eos ex est nemo incidunt fuga voluptatem dignissimos distinctio, id laborum! Laudantium, sint nisi ad distinctio ipsa quisquam iste error in quis debitis quaerat officia. Laboriosam voluptate numquam dicta qui cum perferendis dolor aliquid at, sit quibusdam architecto quas totam!
                        </span>
                    </button>
                </div>
                <div className="bottom-0 left-0 flex gap-2 border-t py-4 mt-auto">
                    <span className='flex items-center gap-2'>
                        <span className='h-[30px] w-[30px] text-white text-extrabold rounded-full bg-green-500 flex justify-center items-center'>
                            S
                        </span>
                        <span className='text-white'>
                            Saurabh D
                        </span>
                    </span>
                    <button onClick={logoutHandler} className='text-gray-300 hover:text-white hover:text-xl ms-auto transition-all duration-300'>
                        <FaArrowRightFromBracket />
                    </button>
                </div>
            </div>
        </>
    )
}
export default Sidebar
