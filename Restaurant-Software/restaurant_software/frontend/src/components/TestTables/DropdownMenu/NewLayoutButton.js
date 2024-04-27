import React from 'react'
import { CDropdownItem } from '@coreui/react'
import SelectLayoutButton from './SelectLayoutButton'

const NewLayoutButton = ( {restaurantID, setLayoutList, setHasLayout, setLayoutID, setPositionMap, positionMap} ) => {
    
    const onClick = () => {
        setHasLayout(false);
        
        fetch('/api/create/layout', {
            method: 'POST',
            headers: {  
            'Content-Type': 'application/json'
          },
            body: JSON.stringify({layout:  [
               {type: "booth",
                seats: 4,
                x: 500,
                y: 500 }
            ], restaurant: restaurantID, name: "filler name"}) // TO-DO: RESTAURANT ID MUST BE USER'S ASSIGNED RESTAURANT, FIX FILLER NAME
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
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });

    }
    
    return (
        <CDropdownItem as="button" onClick={onClick}>Create new layout</CDropdownItem>
      )
}

export default NewLayoutButton