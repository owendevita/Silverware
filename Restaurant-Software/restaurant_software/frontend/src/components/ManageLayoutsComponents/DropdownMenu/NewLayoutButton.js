import React from 'react'
import { CDropdownItem } from '@coreui/react'
import SelectLayoutButton from './SelectLayoutButton'

const NewLayoutButton = ( {restaurantID, setLayoutList, setHasLayout, setLayoutID, setPositionMap, positionMap, setCreateLayoutPopup, createLayoutPopup, setCurrentFocusedComponent} ) => {
    
    const onClick = () => {
        setCreateLayoutPopup(!createLayoutPopup);
        setCurrentFocusedComponent({layoutID: null, index: null});
    }
    
    return (
        <CDropdownItem as="button" onClick={onClick}>Create New Layout</CDropdownItem>
      )
}

export default NewLayoutButton