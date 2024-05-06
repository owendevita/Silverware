import React, {useState} from 'react'
import { CDropdownItem } from '@coreui/react'
import SelectMenuButton from './SelectMenuButton'

const NewMenuButton = ( {map, setMap, setHasMenu, setMenuID, setPopup, popup} ) => {
    
    const handleClick = () => {
      setPopup(!popup);
    }
    
    return (
        <div>
            <CDropdownItem as="button" onClick={handleClick}>Create New Menu</CDropdownItem>
        </div>
      )
}

export default NewMenuButton