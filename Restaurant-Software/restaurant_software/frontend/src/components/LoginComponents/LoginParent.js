import React, { useState } from 'react'

import EmployeeIDBox from './EmployeeIDBox'
import LogoImageLabel from './LogoImageLabel'
import PasswordBox from './PasswordBox'
import SubmitButton from './SubmitButton'


const LoginParent = () => {

  let [employeeID, setEmployeeID] = useState(null);
  let [password, setPassword] = useState(null);

  return (
    <div>
        <LogoImageLabel  />
        <EmployeeIDBox setEmployeeID={setEmployeeID} employeeID={employeeID}/>
        <PasswordBox setPassword={setPassword} password={password}/>
        <SubmitButton password={password} employeeID={employeeID}/>
    </div>
  )
}

export default LoginParent