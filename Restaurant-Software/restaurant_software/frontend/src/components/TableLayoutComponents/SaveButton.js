import React, {useEffect, useState} from 'react'

const SaveButton = ( { position, layoutID, setLayoutID, hasLayout, setHasLayout }) => {

  useEffect(() => {
    checkLayouts()
  }); 


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
      const lastElement = data[data.length - 1];
      const ID = lastElement.id;
      setLayoutID(ID);
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
          body: JSON.stringify({position: currentPosition, restaurant: 1})
        }).then(() => {
          setHasLayout(true);

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