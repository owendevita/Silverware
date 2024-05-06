import React from 'react'

const SubmitButton = ({firstName, lastName, passwordValue, employeeID, restaurantID}) => {

  const checkValidity = () => {
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
              owner: true,
              manager: true
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
    <button className="popup-buttons" onClick={handleClick}>Create</button>
  )
}

export default SubmitButton