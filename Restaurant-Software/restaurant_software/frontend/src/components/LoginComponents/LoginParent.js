import React, { useState, useEffect } from 'react'

import EmployeeIDBox from './EmployeeIDBox'
import LogoImageLabel from './LogoImageLabel'
import PasswordBox from './PasswordBox'
import SubmitButton from './SubmitButton'

import { getUserInfo } from '../../services/userService';

const LoginParent = () => {

  let [employeeID, setEmployeeID] = useState(null);
  let [password, setPassword] = useState(null);

  useEffect(async () => {
    if(localStorage.getItem("token")){
      const token_data = await getUserInfo();
      if(token_data.employee && token_data.restaurant && token_data.permissions) {
        if(token_data.permissions.admin){
          window.location = '/manage-restaurants';
        } else {
          window.location = '/';
        }
      } 
    }
  }, [])


  return (
    <div>
        <LogoImageLabel/>
        <EmployeeIDBox setEmployeeID={setEmployeeID} employeeID={employeeID}/>
        <PasswordBox setPassword={setPassword} password={password}/>
        <SubmitButton password={password} employeeID={employeeID}/>
    </div>
  )
}

export default LoginParent