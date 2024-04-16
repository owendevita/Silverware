import React from 'react'

import EmployeeIDBox from './EmployeeIDBox'
import LogoImageLabel from './LogoImageLabel'
import PasswordBox from './PasswordBox'
import SubmitButton from './SubmitButton'


const LoginParent = () => {
  return (
    <div>
        <LogoImageLabel />
        <EmployeeIDBox />
        <PasswordBox />
        <SubmitButton />
    </div>
  )
}

export default LoginParent