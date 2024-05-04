import React, { useState, useEffect } from 'react'
import MenuItem from './MenuItem'

const MenuCreator = ({items, menuID, categoryIndex}) => {

  useEffect(() => {
  }, []);
    
    return (
    <div>
       {items.map((data, index) => (
          <MenuItem categoryIndex={categoryIndex} name={data.name} menuID={menuID} price={data.item_price} index={index} />
        ))}
    </div>
  )
}

export default MenuCreator