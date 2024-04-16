import React from 'react'

const SubmitButton = ({ employeeID, password }) => {
  
  const handleClick = async () => {
    const response = await fetch('/api/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({employee_id: employeeID, password: password})
    });
  
    const data = await response.json();
    if (response.ok) {
      if (data.token) {
        localStorage.setItem('token', data.token);
        console.log("TOKEN FOUND!");
      } else {
        console.error('Token not found in response:', data);
      }
    } else {
      console.error('Error in fetch operation:', data);
    }
  }
  
  return (
    <button type="submit" onClick={handleClick}>Submit</button>
  )
}

export default SubmitButton