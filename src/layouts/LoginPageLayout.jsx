import React from 'react'
import { LoginPageFooter } from './LoginPageFooter'
import LoginPageHeader from './LoginPageHeader'

export const LoginPageLayout = ({children}) => {
  return (
    <div> 
        <LoginPageHeader /> 
          {children}
         {/* <LoginPageFooter /> */}
    </div> 
  )
}
