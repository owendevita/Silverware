import React, { useState, useEffect } from 'react'
import { CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem, CDropdownDivider } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'
import SelectLayoutButton from './SelectLayoutButton'

const DropdownMenuParent = ( { setCurrentFocusedComponent, createLayoutPopup, setCreateLayoutPopup, setPosition, setHasLayout, hasLayout, setLayoutID, layoutID, restaurantID, layoutList, setLayoutList, setPositionMap, positionMap} ) => {
    let [currentLayoutName, setCurrentLayoutName] = useState((layoutList[0] != null && layoutList[0].name != undefined) ? layoutList[0].name : "Select Layout")


    useEffect(() => {
        if(layoutList.length == 0){
            setCurrentLayoutName("Select Layout");
        } else {
    
            for( let i = 0; i < layoutList.length ; i++){
                if(layoutList[i].id == layoutID){
                    setCurrentLayoutName(layoutList[i].name);
                }
            }
        }
    }, [layoutList, setLayoutList, layoutID, setLayoutID])
    

    return (
        <CDropdown>
            <CDropdownToggle color="secondary">{currentLayoutName}</CDropdownToggle>
                <CDropdownMenu>
                    {layoutList.map((data) => (
                        <SelectLayoutButton setCurrentFocusedComponent={setCurrentFocusedComponent} assignedLayoutID={data.id} setHasLayout={setHasLayout} setLayoutID={setLayoutID} layoutName={data.name} setCurrentLayoutName={setCurrentLayoutName}/>
                    ))}
                </CDropdownMenu>
      </CDropdown>
    )
}

export default DropdownMenuParent