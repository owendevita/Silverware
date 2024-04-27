import React from 'react'

import { CDropdownItem } from '@coreui/react'


const SelectLayoutButton = ({assignedLayoutID, setHasLayout, setLayoutID, layoutName}) => {

  const onClick = () => {
    console.log(assignedLayoutID);
    setLayoutID(assignedLayoutID);
    setHasLayout(true);
  
  }

  return (
    <CDropdownItem as="button" onClick={onClick}>{layoutName}</CDropdownItem>
  )
}

export default SelectLayoutButton