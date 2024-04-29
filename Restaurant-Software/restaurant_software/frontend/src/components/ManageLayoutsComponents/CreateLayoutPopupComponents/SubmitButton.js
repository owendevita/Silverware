import React from 'react'

const SubmitButton = ({setPositionMap, positionMap, setLayoutID, setHasLayout, setLayoutList, name, setCreateLayoutPopup, restaurantID }) => {

  
  const handleClick = async() =>{
    fetch('/api/create/layout', {
      method: 'POST',
      headers: {  
      'Content-Type': 'application/json'
    },
      body: JSON.stringify({
        layout:  [], 
        restaurant: restaurantID, 
        name: name
      })
    })
    .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json();
  })
  .then(data => {
      const newMap = new Map(positionMap);
      newMap.set(data.id, data.layout);
      setPositionMap(newMap);
      setHasLayout(true);
      setLayoutID(data.id);
      setLayoutList(prevLayoutList => [... prevLayoutList, data]);
      setCreateLayoutPopup(false);
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