import React, {useState} from 'react'
import ParentMenuCreator from './ParentMenuCreator'

const MenuManagerParent = () => {
    let [menuID, setMenuID] = useState(null);

    return (
        <div>
            <ParentMenuCreator menuID={menuID} setMenuID={setMenuID}/>
        </div>
    )
}

export default MenuManagerParent