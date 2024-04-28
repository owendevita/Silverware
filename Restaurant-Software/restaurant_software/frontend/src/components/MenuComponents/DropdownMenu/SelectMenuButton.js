import React from 'react'

import { CDropdownItem } from '@coreui/react'


const SelectMenuButton = ({assignedMenuID, setHasMenu, setMenuID, map}) => {

  const handleClick = () => {

    setMenuID(assignedMenuID);
    setHasMenu(true);
  
  }

  return (
    <CDropdownItem as="button" onClick={handleClick}> {map.get(assignedMenuID)} </CDropdownItem>
  )
}

export default SelectMenuButton