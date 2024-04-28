import React, { useState, useEffect } from 'react'
import { CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem, CDropdownDivider } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'
import SelectMenuButton from './SelectMenuButton'

const DropdownMenuParent = ({setHasMenu, setMenuID, map}) => {
   
    let [menuList, setMenuList] = useState([]);

    useEffect(() => {
        getMenus()
      }, []);

    const getMenus = async () => {
        let response = await fetch('/api/restaurants/1/menus/');
        let data = await response.json();
      
        setMenuList(data);
    }

    const handleMenuSelection = (assignedMenuID) => {
        console.log('Selected menu:', assignedMenuID)
        setMenuID(assignedMenuID)
    }

    return (
        <CDropdown>
            <CDropdownToggle color="secondary">Menus</CDropdownToggle>
                <CDropdownMenu>
                    {menuList.map((menu) => (
                        <SelectMenuButton assignedMenuID={menu.id} setHasMenu={setHasMenu} setMenuID={handleMenuSelection} map={map} />
                    ))}
                </CDropdownMenu>
      </CDropdown>
    )
}

export default DropdownMenuParent