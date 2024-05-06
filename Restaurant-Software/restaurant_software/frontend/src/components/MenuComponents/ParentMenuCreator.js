import React, { useState, useEffect } from 'react'
import CategoryCreator from './CategoryCreator'
import DropdownMenuParent from './DropdownMenu/DropdownMenuParent';
import { getUserInfo } from '../../services/userService';

const ParentMenuCreator = () => {

    let [map, setMap] = useState(new Map());
    let [nameMap, setNameMap] = useState(new Map());
    let [hasMenu, setHasMenu] = useState(false);
    let [menuID, setMenuID] = useState(null);
    let [restaurantID, setRestaurantID] = useState(null);
   
    const updateUserInfo = async () => {
      const token_data = await getUserInfo();
      setRestaurantID(token_data.restaurant);
      console.log(token_data);
  }

  useEffect(() => {
    updateUserInfo();
    }, []); 

    useEffect(() => {
        if(restaurantID){
          console.log("GETTING MENUS!")
          getMenus();
        }
      }, [restaurantID]); 

      useEffect(() => {
        console.log(map.get(menuID));
      }, [menuID]); 
    
    const getMenus = async () => {
        
        let response = await fetch(`/api/restaurants/${restaurantID}/menus/`, {method: 'GET'});
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

  return hasMenu && menuID && restaurantID ? (
    <div>
      <DropdownMenuParent restaurantID={restaurantID} setHasMenu={setHasMenu} setMenuID={setMenuID} map={nameMap}/>
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
