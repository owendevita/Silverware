import React, { useState, useEffect } from 'react'
import MenuItem from './MenuItem'

const MenuCreator = ({items, menuID, categoryIndex}) => {

  useEffect(() => {
  }, []);
    
  return (
    <div>
      {items.map((data, index) => {

        return (
          <MenuItem
            categoryIndex={categoryIndex}
            name={data.name}
            menuID={menuID}
            price={data.item_price}
            index={index}
            key={index} // Key should be added when using map to render a list of elements
          />
        );
      })}
    </div>
  );
}

export default MenuCreator