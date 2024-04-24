import React, { useState, useEffect } from 'react'
import MenuCreator from './MenuCreator'

const ParentMenuCreator = () => {

    let [list, setList] = useState([]);

    useEffect(() => {
        getMenus()
      }, []); 
    
    const getMenus = async () => {
        
        let response = await fetch(`/api/restaurants/1/menus/`, {method: 'GET'});
        let data = await response.json();

        console.log("data:", data);
        setList(data);
    }

  return (
    <div>
      {list.map((data) => (
          <MenuCreator items={data.items} />
        ))}
    </div>
  )
}

export default ParentMenuCreator
