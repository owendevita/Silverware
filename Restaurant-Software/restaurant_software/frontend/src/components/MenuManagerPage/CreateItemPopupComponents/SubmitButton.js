import React from 'react'

const SubmitButton = ({category, name, price, menuID}) => {

  const handleClick = async() =>{
    let response = await fetch(`/api/menus/${menuID}`, {method: 'GET'});
    let data = await response.json();
    const categoryData = data.items.find(item => item.category.name === category);
    const categoryIndex = data.items.findIndex(item => item.category.name === category);

    let newItem ={
      "name" : name,
      "item_price": price
    }
    categoryData.category.items = categoryData.category.items.concat(newItem);
    data.items[categoryIndex] = categoryData;

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
    <button className="popup-buttons" onClick={handleClick}>Create New Item</button>
  )
}

export default SubmitButton