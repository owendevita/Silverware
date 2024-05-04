import React from 'react'

const SubmitButton = ({name}) => {
  
  const handleClick = async() =>{
      fetch('/api/restaurants/', {
        method: 'POST',
        headers: {  
        'Content-Type': 'application/json'
      },
        body: JSON.stringify({
          name: name
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
    <button className="popup-buttons" onClick={handleClick}>Create</button>
  )
}

export default SubmitButton