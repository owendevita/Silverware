import React from 'react'

const SubmitButton = ({firstName, lastName, passwordValue, employeeID, isManager, isServer, isHost, isChef, restaurantID}) => {

  const checkValidity = () => {
    if (isManager || isServer || isHost || isChef) {
      if (Number.isInteger(employeeID)) {
        if (passwordValue.length >= 8) {
          return true;
        } else {
          console.log("PASSWORD TOO SHORT");
          return false;
        }
      } else {
        console.log("EMPLOYEE ID MUST BE A NUMBER");
        return false;
      }
    } else {
      console.log("NEED PERMISSIONS!");
      return false;
    }
  }
  

  const handleClick = async() =>{
    if(checkValidity()){
      fetch('/api/create/employee/', {
        method: 'POST',
        headers: {  
        'Content-Type': 'application/json'
      },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          employee_id: employeeID,
          password: passwordValue,
          restaurant: restaurantID,
          permissions: {
              manager: isManager,
              server: isServer,
              host: isHost,
              chef: isChef
          }
        
        })
      })
      .then(response => {
        if (!response.ok) {
            console.log('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        window.location.reload()
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });

    }


  }
  
  return (
    <button className="popup-buttons" onClick={handleClick}>Create new employee</button>
  )
}

export default SubmitButton