import React, {useEffect, useState} from 'react'

const SaveButton = ( { position, layoutID, setLayoutID, hasLayout, setHasLayout }) => {

  useEffect(() => {
    checkLayouts()
  }, []); 


  const checkLayouts = async () => {

    //
    // TO-DO: MAKE RESTAURANT ID CHANGE DEPENDING ON USER'S ASSIGNED RESTAURANT
    //
    let response = await fetch('/api/restaurants/1/layouts/');
    let data = await response.json();

    if(!data || data.length == 0) {
     
      setHasLayout(false);

    } else {

      // 
      // TO-DO: HAVE DROP DOWNS WHERE YOU CAN CHOOSE WHICH LAYOUT TO EDIT
      //
      const firstElement = data[0];

      console.log("SETTING INITIAL ID");
      setLayoutID(firstElement.id);
      setHasLayout(true);

    }


  }

  const handleClick = async () => {
    const currentPosition = position;
    if(!hasLayout) {
      fetch('/api/create/layout', {
        method: 'POST',
        headers: {  
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({position: currentPosition, restaurant: 1}) // TO-DO: RESTAURANT ID MUST BE USER'S ASSIGNED RESTAURANT
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

      if (!(data.position.x == currentPosition.x && data.position.y == currentPosition.y)) {

        fetch(`/api/layouts/${layoutID}/`, {
          method: 'PUT',
          headers: {  
          'Content-Type': 'application/json'
        },
          //
          // TO-DO: restaurant needs to be set dynamically according to the employee's restaurant
          //
          body: JSON.stringify({position: currentPosition, restaurant: 1})
        });
      }
      
    }
  }
  
  return (
      <button onClick={handleClick}>Save</button>
    )
  
}

export default SaveButton