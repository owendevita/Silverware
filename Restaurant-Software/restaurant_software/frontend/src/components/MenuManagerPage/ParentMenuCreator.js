import React, { useState, useEffect } from 'react'
import CategoryCreator from './CategoryCreator'
import DropdownMenuParent from './DropdownMenu/DropdownMenuParent';
import Popup from './CreateMenuPopupComponents/Popup';
import DeleteMenuButton from './DeleteButton'
import ItemPopup from './CreateItemPopupComponents/ItemPopup';
import CategoryPopup from './CreateCategoryPopupComponents/Popup';
import CreateItemButton from './CreateItemButton';
import CreateCategoryButton from './CreateCategoryButton'

const ParentMenuCreator = ({menuID, setMenuID}) => {

    let [map, setMap] = useState(new Map());
    let [nameMap, setNameMap] = useState(new Map());
    let [hasMenu, setHasMenu] = useState(false);
    const [popup, setPopup] = useState(false);
    const [itemPopup, setItemPopup] = useState(false);
    const [categoryPopup, setCategoryPopup] = useState(false);



    useEffect(() => {
        getMenus()
      }, []); 

      useEffect(() => {
      }, [menuID]); 
    
    const getMenus = async () => {
        
        let response = await fetch(`/api/restaurants/1/menus/`, {method: 'GET'});
        let data = await response.json();

        if(data && data != null) {
          const newMap = new Map(map)
          const newNameMap = new Map(nameMap)
          for(let i = 0; i < data.length; i++){
            newMap.set(data[i].id, data[i].items);
            newNameMap.set(data[i].id, data[i].name);
          }
          setMap(newMap);
          setNameMap(newNameMap);
          if (data.length > 0) {
            setMenuID(data[0].id);
            setHasMenu(true);
          } else {
            setHasMenu(false);
          }
          
        }
    }

  return hasMenu && menuID ? (
    <div>
      <DropdownMenuParent setHasMenu={setHasMenu} setMenuID={setMenuID} map={map} nameMap={nameMap} setMap={setMap} setPopup={setPopup} popup={popup} hasMenu={hasMenu}/>
      {map.get(menuID).map((data, index) => (
        <CategoryCreator categories={data} index={index} menuID={menuID}/>
          ))}
          {popup && <Popup setPopup={setPopup}/>}
          <CreateItemButton setPopup={setItemPopup} popup={itemPopup}/>
          <CreateCategoryButton setPopup={setCategoryPopup} popup={categoryPopup}/>
          <DeleteMenuButton hasMenu={hasMenu} menuID={menuID} setHasMenu={setHasMenu} setMenuID={setMenuID} />
          {itemPopup && <ItemPopup map={map} setPopup={setItemPopup} menuID={menuID}/>}
          {categoryPopup && <CategoryPopup map={map} setPopup={setCategoryPopup} menuID={menuID}/>}
         
    </div>
  ) : (
    <div>
      <DropdownMenuParent setHasMenu={setHasMenu} setMenuID={setMenuID} map={map} nameMap={nameMap} setMap={setMap} setPopup={setPopup} popup={popup} hasMenu={hasMenu}/>
        {popup && <Popup setPopup={setPopup}/>}
    </div>
  )
}

export default ParentMenuCreator
