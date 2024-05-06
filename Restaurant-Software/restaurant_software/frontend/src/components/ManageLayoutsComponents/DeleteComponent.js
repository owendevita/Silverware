import React, { useState, useEffect } from 'react'

const DeleteComponent = ({ style, currentFocusedComponent, setCurrentFocusedComponent, positionMap, setPositionMap }) => {
    const [info, setInfo] = useState(positionMap.get(currentFocusedComponent.layoutID)[currentFocusedComponent.index])

    const clickHandler = async () => {
        const newMap = new Map(positionMap);
        
        const info = newMap.get(currentFocusedComponent.layoutID);
        newMap.set(currentFocusedComponent.layoutID, info.filter((info, index) => index !== currentFocusedComponent.index));
        setPositionMap(newMap);
        setCurrentFocusedComponent({layoutID: null, index: null});

        let response = await fetch(`/api/layouts/${currentFocusedComponent.layoutI}/`);
        let data = await response.json();
      
      
        fetch(`/api/layouts/${currentFocusedComponent.layoutID}/`, {
            method: 'PUT',
            headers: {  
            'Content-Type': 'application/json'
        },
            body: JSON.stringify({layout: newMap.get(currentFocusedComponent.layoutID), restaurant: data.restaurant, name: data.name})
        }) .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        }) .then(data => {
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });

    }

  useEffect(() => {
    setInfo(positionMap.get(currentFocusedComponent.layoutID)[currentFocusedComponent.index])
  }, [currentFocusedComponent])
  

  return info ? (
    <div>
      <button style={style} onClick={clickHandler}>
        Delete Selected Component
      </button>
    </div>
  ) : (
    <div>Loading..</div>
  )
}

export default DeleteComponent