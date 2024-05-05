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
    <div style={{ marginBottom: '10px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
        <div>Name: {name}</div>
        <div>Price: {price}</div>
        <button onClick={handleDeleteClick}>Delete</button>
    </div>
  )
}

export default MenuItem