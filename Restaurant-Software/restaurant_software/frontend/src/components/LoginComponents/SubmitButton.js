import React, { useState } from 'react'
import '../../styles/LoginPage.css'

const SubmitButton = ({ employeeID, password }) => {
  
  let [loginError, setLoginError] = useState(false);

  const handleClick = async () => {
    const response = await fetch('/api/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({employee_id: parseInt(employeeID), password: password})
    });
  
    const data = await response.json();
    if (response.ok) {
      if (data.token) {
        localStorage.setItem('token', data.token);

        if (data.permissions && data.restaurant) {
          
          if(data.permissions.admin){
            window.location = '/manage-restaurants';
          } else {
            window.location = '/';
          }
            

        } else {
          console.error("Restaurant or permissions not found in response:", data);
          setLoginError(true);
        }

      } else {
        console.error('Token not found in response:', data);
        setLoginError(true);
      }
    } else {
      console.error('Error in fetch operation:', data);
      setLoginError(true);
    }
  }
  
  return (
    <div>
      <button className="login-buttons" type="submit" onClick={handleClick}>Login</button>
      <br/>
      {loginError && <div className="error-message">Incorrect Employee ID or Password</div>}
    </div>
  )
}

export default SubmitButton