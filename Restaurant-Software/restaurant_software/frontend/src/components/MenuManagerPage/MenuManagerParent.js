import React, {useState} from 'react'
import ParentMenuCreator from './ParentMenuCreator'

const MenuManagerParent = () => {
    let [menuID, setMenuID] = useState(null);
    let [hasMenu, setHasMenu] = useState(false);

    return (
        <div>
            <ParentMenuCreator menuID={menuID} setMenuID={setMenuID}/>
        </div>
    )
}

export default MenuManagerParent