import React, {useEffect, useState} from 'react'

const SaveButton = ( { layoutID, setLayoutID, hasLayout, setHasLayout, restaurantID }) => {

  const handleClick = async () => {
    if(!hasLayout) {
      fetch('/api/create/layout', {
        method: 'POST',
        headers: {  
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({layout: {} , restaurant: restaurantID})
      }) .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }) .then(data => {
        setHasLayout(true);
        setLayoutID(data.id);
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });
    
  } else {

      let response = await fetch(`/api/layouts/${layoutID}/`);
      let data = await response.json();

      fetch(`/api/layouts/${layoutID}/`, {
        method: 'PUT',
        headers: {  
        'Content-Type': 'application/json'
      },
        body: JSON.stringify({position: currentPosition, restaurant: restaurantID})
      });
    }
  }
  
  return (
      <button onClick={handleClick}>Save</button>
    )
  
}

export default SaveButton