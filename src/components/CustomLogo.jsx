import React from 'react'
import { RiChatAiFill } from 'react-icons/ri'

const CustomLogo = ({mode}) => {
  return (
    <span className={`${mode === 'dark'?'text-white':'text-primary' } flex gap-2 items-center text-2xl font-bold`}>
      <RiChatAiFill />
      MIS-Chat
    </span>
  )
}
export default CustomLogo