import React, { useState, useEffect } from 'react'
import { CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem, CDropdownDivider } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'
import NewLayoutButton from './NewLayoutButton'
import SelectLayoutButton from './SelectLayoutButton'

const DropdownMenuParent = ( { setPosition, setHasLayout, hasLayout, setLayoutID, layoutID, restaurantID, layoutList, setLayoutList, setPositionMap, positionMap} ) => {

    return (
        <CDropdown>
            <CDropdownToggle color="secondary">Layout</CDropdownToggle>
                <CDropdownMenu>
                    {layoutList.map((data) => (
                        <SelectLayoutButton assignedLayoutID={data.id} setHasLayout={setHasLayout} setLayoutID={setLayoutID} layoutName={data.name} />
                    ))}
                    {layoutList.length > 0 && <CDropdownDivider />}
                    <NewLayoutButton restaurantID={restaurantID} setLayoutList={setLayoutList} setPosition={setPosition} setHasLayout={setHasLayout} setLayoutID={setLayoutID} setPositionMap={setPositionMap} positionMap={positionMap} />
                </CDropdownMenu>
      </CDropdown>
    )
}

export default DropdownMenuParent