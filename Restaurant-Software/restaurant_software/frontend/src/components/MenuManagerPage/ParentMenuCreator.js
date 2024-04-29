import React, { useState, useEffect } from 'react'
import CategoryCreator from './CategoryCreator'
import DropdownMenuParent from './DropdownMenu/DropdownMenuParent';
import Popup from './CreateMenuPopupComponents/Popup';

const ParentMenuCreator = () => {

    let [map, setMap] = useState(new Map());
    let [nameMap, setNameMap] = useState(new Map());
    let [hasMenu, setHasMenu] = useState(false);
    let [menuID, setMenuID] = useState(null);
    const [popup, setPopup] = useState(false);


    useEffect(() => {
        getMenus()
      }, []); 

      useEffect(() => {
        console.log(map.get(menuID));
      }, [menuID]); 
    
    const getMenus = async () => {
        
        let response = await fetch(`/api/restaurants/1/menus/`, {method: 'GET'});
        let data = await response.json();

        if(data && data != null) {
          const newMap = new Map(map)
          const newNameMap = new Map(nameMap)
          for(let i = 0; i < data.length; i++){
            console.log("id: ", data[i].id);
            console.log("items: ", data[i].items);
            newMap.set(data[i].id, data[i].items);
            console.log("RAHHHH: ", data[i].name)
            newNameMap.set(data[i].id, data[i].name);
          }
          setMap(newMap);
          setNameMap(newNameMap);
          console.log("setdataid: ", data[0].id)
          setMenuID(data[1].id);
          setHasMenu(true);
        }
    }

  return hasMenu && menuID ? (
    <div>
      <DropdownMenuParent setHasMenu={setHasMenu} setMenuID={setMenuID} map={map} nameMap={nameMap} setMap={setMap} setPopup={setPopup} popup={popup} hasMenu={hasMenu}/>
      {map.get(menuID).map((data) => (
        <CategoryCreator categories={data}/>
          ))}
          {popup && <Popup setPopup={setPopup}/>}
    </div>
  ) : (
    <div>
      Loading...
    </div>
  )
}

export default ParentMenuCreator
