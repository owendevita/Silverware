import React, { useState, useEffect } from 'react'
import CategoryCreator from './CategoryCreator'
import DropdownMenuParent from './DropdownMenu/DropdownMenuParent';

const ParentMenuCreator = () => {

    let [map, setMap] = useState(new Map());
    let [nameMap, setNameMap] = useState(new Map());
    let [hasMenu, setHasMenu] = useState(false);
    let [menuID, setMenuID] = useState(null);

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
            newMap.set(data[i].id, data[i].items);
            newNameMap.set(data[i].id, data[i].name);
          }
          setMap(newMap);
          setNameMap(newNameMap);
          if(data.length > 0){
            setMenuID(data[0].id);
            setHasMenu(true);
          } else {
            setHasMenu(false);
          }
          
        }
    }

  return hasMenu && menuID ? (
    <div>
      <DropdownMenuParent setHasMenu={setHasMenu} setMenuID={setMenuID} map={nameMap}/>
      {map.get(menuID).map((data) => (
        <CategoryCreator categories={data}/>
          ))}
    </div>
  ) : (
    <div>
      Loading...
    </div>
  )
}

export default ParentMenuCreator
