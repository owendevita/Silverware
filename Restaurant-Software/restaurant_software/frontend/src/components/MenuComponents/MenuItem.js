import React from 'react'

const MenuItem = ({name, price}) => {
  return (
    <div className='menu-item'>
        <div className='menu-item-name'>{name}</div><div classname='menu-item-price'>${price}</div>
    </div>
  )
}

export default MenuItem