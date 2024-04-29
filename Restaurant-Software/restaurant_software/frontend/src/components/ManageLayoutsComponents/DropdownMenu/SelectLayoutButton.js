import React from 'react'

import { CDropdownItem } from '@coreui/react'


const SelectLayoutButton = ({ setCurrentLayoutName, assignedLayoutID, setHasLayout, setLayoutID, layoutName, setCurrentFocusedComponent}) => {

  const onClick = () => {
    setLayoutID(assignedLayoutID);
    setHasLayout(true);
    setCurrentFocusedComponent({layoutID: null, index: null});
    setCurrentLayoutName(layoutName);
  }

  return (
    <CDropdownItem as="button" onClick={onClick}>{layoutName}</CDropdownItem>
  )
}

export default SelectLayoutButton