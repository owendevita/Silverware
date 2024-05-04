import React, { useState, useEffect } from 'react'
import MenuItem from './MenuItem'

const MenuCreator = ({items}) => {

  useEffect(() => {
  }, []);
    
    return (
    <div>
       {items.map((data, index) => (
          <MenuItem name={data.name} price={data.item_price} index={index} />
        ))}
    </div>
  )
}

export default MenuCreator