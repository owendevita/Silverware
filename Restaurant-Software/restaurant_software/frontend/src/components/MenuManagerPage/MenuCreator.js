import React, { useState, useEffect } from 'react'
import MenuItem from './MenuItem'

const MenuCreator = ({items}) => {

  useEffect(() => {
    console.log("itemstest: ", items);
  }, []);
    
    return (
    <div>
       {items.map((data) => (
          <MenuItem name={data.name} price={data.item_price} />
        ))}
    </div>
  )
}

export default MenuCreator