import React, { useState, useEffect } from 'react'
import { CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem, CDropdownDivider } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'
import NewLayoutButton from './NewLayoutButton'
import SelectLayoutButton from './SelectLayoutButton'

const DropdownMenuParent = ( { setPosition, setHasLayout, hasLayout, setLayoutID, layoutID} ) => {
   
    let [layoutList, setLayoutList] = useState([]);
    let layoutLength = layoutList.length;

    useEffect(() => {
        getLayouts()
      }, [hasLayout, layoutID]);

    const getLayouts = async () => {
        let response = await fetch('/api/restaurants/1/layouts/');
        let data = await response.json();
      
        setLayoutList(data);
    }

    return (
        <CDropdown>
            <CDropdownToggle color="secondary">Layout</CDropdownToggle>
                <CDropdownMenu>
                    {layoutList.map((data) => (
                        <SelectLayoutButton assignedLayoutID={data.id} setHasLayout={setHasLayout} setLayoutID={setLayoutID} />
                    ))}
                    {layoutList.length > 0 && <CDropdownDivider />}
                    <NewLayoutButton layoutList={layoutList} setLayoutList={setLayoutList} setPosition={setPosition} setHasLayout={setHasLayout} setLayoutID={setLayoutID} />
                </CDropdownMenu>
      </CDropdown>
    )
}

export default DropdownMenuParent