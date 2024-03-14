import React from 'react'

import { CDropdownItem } from '@coreui/react'


const SelectLayoutButton = ({assignedLayoutID, setHasLayout, setLayoutID}) => {

  const onClick = () => {

    setLayoutID(assignedLayoutID);
    setHasLayout(true);
  
  }

  return (
    <CDropdownItem as="button" onClick={onClick}> I am a layout button! </CDropdownItem>
  )
}

export default SelectLayoutButton