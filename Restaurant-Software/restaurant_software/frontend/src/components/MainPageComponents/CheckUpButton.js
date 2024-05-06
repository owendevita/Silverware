import React, { useState, useEffect } from 'react'

const CheckUpButton = ({currentFocusedComponent, positionMap, setPositionMap }) => {
    const [info, setInfo] = useState()

    const clickHandler = async () => {
        const newMap = new Map(positionMap);
        const info = newMap.get(currentFocusedComponent.layoutID);
        
        let item = info[currentFocusedComponent.index];
        item = {
                type: item.type,
                seats: item.seats,
                table_number: item.table_number,
                x: item.x,
                y: item.y,
                has_party: item.has_party,
                date_sat: item.date_sat,
                last_checkup: new Date()
        }


        info[currentFocusedComponent.index] = item;
        newMap.set(currentFocusedComponent.layoutID, info);
        setPositionMap(newMap);
        
        let response = await fetch(`/api/layouts/${currentFocusedComponent.layoutID}/`);
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
    if(currentFocusedComponent.index != null && currentFocusedComponent.layoutID != null){
        setInfo(positionMap.get(currentFocusedComponent.layoutID)[currentFocusedComponent.index])
    }
  }, [currentFocusedComponent])
  

  return info ? (
    <div>
      <button className="checkup-button" onClick={clickHandler}>
        Checkup
      </button>
    </div>
  ) : (
    <button className="checkup-button">
        Checkup
      </button>
  )
}

export default CheckUpButton