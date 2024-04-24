import React from 'react'

const SubmitButton = ({firstName, lastName, passwordValue, employeeID, isManager, isServer, isHost, isChef, pk, restaurantID}) => {


  const checkPassword = () => {
    return (passwordValue && passwordValue != "");
  }

  const getPasswordField = () => {
    // Check if password has a value
    if (checkPassword()) {
        // If password has a value, include it in the object
        return { password: passwordValue };
    } else {
        // If password doesn't have a value, return an empty object
        return {};
    }
};


  const checkValidity = () => {
    if (isManager || isServer || isHost || isChef) {
      if (Number.isInteger(employeeID)) {
        
        if(!checkPassword()){
          return true;
        }
        
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
      const requestBody = {
        first_name: firstName,
        last_name: lastName,
        employee_id: employeeID,
        restaurant: restaurantID,
        permissions: {
            manager: isManager,
            server: isServer,
            host: isHost,
            chef: isChef
        },
        ...getPasswordField() // Merge the result of getPasswordField() into the request body
    };

    fetch(`/api/employees/${pk}/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    })
      .then(response => {
        if (!response.ok) {
            console.log('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        window.location.reload();
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });

    }


  }
  
  return (
    <button className="popup-buttons" onClick={handleClick}>Save</button>
  )
}

export default SubmitButton