import React from 'react'
import { getUserInfo } from '../../../services/userService';

const SubmitButton = ({name, restaurantID}) => {

  const handleClick = async() =>{
      const token_data = await getUserInfo();
      fetch('/api/create/menu/', {
        method: 'POST',
        headers: {  
        'Content-Type': 'application/json'
      },
        body: JSON.stringify({
          name: name,
          items: [],
          restaurant: token_data.restaurant
        })
      })
      .then(response => {
        if (!response.ok) {
            console.log('Network response was not ok', response.body);
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
  
  return (
    <button className="popup-buttons" onClick={handleClick}>Create New Menu</button>
  )
}

export default SubmitButton