import React from 'react'

const MenuItem = ({categoryIndex, index, name, price, menuID}) => {
  const handleDeleteClick = async () => {
    let response = await fetch(`/api/menus/${menuID}`, {method: 'GET'});
    let data = await response.json();
    data.items[categoryIndex].category.items.splice(index, 1);
    fetch(`/api/menus/${menuID}/`, {
        method: 'PUT',
        headers: {  
        'Content-Type': 'application/json'
    },
        body: JSON.stringify({name: data.name, restaurant: data.restaurant, items: data.items})
    });

    window.location.reload();
  }
  
  return (
    <div className='manage-menu-item'>
        <div className='menu-item-name'>{name}</div>
        <div className='menu-item-price'>${price}</div>
        <button className='menu-item-delete-button' onClick={handleDeleteClick}>Delete</button>
    </div>
  )
}

export default MenuItem