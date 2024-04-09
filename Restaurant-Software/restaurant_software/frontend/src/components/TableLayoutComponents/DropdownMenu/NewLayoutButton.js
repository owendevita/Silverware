import React from 'react'
import { CDropdownItem } from '@coreui/react'
import SelectLayoutButton from './SelectLayoutButton'

const NewLayoutButton = ( {layoutList, setLayoutList, setPosition, setHasLayout, setLayoutID} ) => {
    
    const onClick = () => {
        setHasLayout(false);
        setPosition({ x: 0, y: 0 });
        
        fetch('/api/create/layout', {
            method: 'POST',
            headers: {  
            'Content-Type': 'application/json'
          },
            body: JSON.stringify({position: {x: 0, y: 0}, restaurant: 1}) // TO-DO: RESTAURANT ID MUST BE USER'S ASSIGNED RESTAURANT
          })
          .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
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