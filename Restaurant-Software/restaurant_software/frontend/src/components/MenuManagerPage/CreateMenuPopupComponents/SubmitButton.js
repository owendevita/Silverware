import React from 'react'

const SubmitButton = ({name}) => {

  const handleClick = async() =>{
      fetch('/api/create/menu/', {
        method: 'POST',
        headers: {  
        'Content-Type': 'application/json'
      },
        body: JSON.stringify({
          name: name,
          items: [],
          restaurant: 1 // TO-DO: MAKE THIS USER'S RESTAURANT ID
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
  
  return (
    <button className="popup-buttons" onClick={handleClick}>Create New Menu</button>
  )
}

export default SubmitButton