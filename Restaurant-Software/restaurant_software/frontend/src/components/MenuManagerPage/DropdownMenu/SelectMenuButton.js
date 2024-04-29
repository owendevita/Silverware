import React from 'react'

import { CDropdownItem } from '@coreui/react'


const SelectMenuButton = ({assignedMenuID, setHasMenu, setMenuID, nameMap}) => {

  const handleClick = () => {

    setMenuID(assignedMenuID);
    setHasMenu(true);
  
  }

  return (
    <CDropdownItem as="button" onClick={handleClick}> {nameMap.get(assignedMenuID)} </CDropdownItem>
  )
}

export default SelectMenuButton