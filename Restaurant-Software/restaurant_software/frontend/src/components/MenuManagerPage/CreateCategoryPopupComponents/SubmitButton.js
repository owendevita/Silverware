import React from 'react'

const SubmitButton = ({name, menuID}) => {

  const handleClick = async() =>{
    let response = await fetch(`/api/menus/${menuID}`, {method: 'GET'});
    let data = await response.json();

    let newCategory ={
      category: {"name" : name,
      "items": []}
    }
    data.items = data.items.concat(newCategory);

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
    <button className="popup-buttons" onClick={handleClick}>Create New Category</button>
  )
}

export default SubmitButton