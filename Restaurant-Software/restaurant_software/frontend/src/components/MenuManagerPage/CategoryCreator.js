import React from 'react'
import MenuCreator from './MenuCreator'



const CategoryCreator = ({categories, index, menuID}) => {
  const handleDeleteClick = async () => {
    let response = await fetch(`/api/menus/${menuID}`, {method: 'GET'});
    let data = await response.json();
    console.log(data.items);
    data.items.splice(index, 1);
    console.log(data.items);
    fetch(`/api/menus/${menuID}/`, {
        method: 'PUT',
        headers: {  
        'Content-Type': 'application/json'
    },
        body: JSON.stringify({name: data.name, restaurant: data.restaurant, items: data.items})
    });

    window.location.reload();
  }

  const handleMoveUpClick = async () => {
    let response = await fetch(`/api/menus/${menuID}`, {method: 'GET'});
    let data = await response.json();
    if(index > 0){
      const temp = data.items[index];
      data.items[index] = data.items[index - 1]
      data.items[index - 1] = temp;
      fetch(`/api/menus/${menuID}/`, {
          method: 'PUT',
          headers: {  
          'Content-Type': 'application/json'
      },
          body: JSON.stringify({name: data.name, restaurant: data.restaurant, items: data.items})
      });
      window.location.reload();
    }
      
  }

  const handleMoveDownClick = async () => {
    let response = await fetch(`/api/menus/${menuID}`, {method: 'GET'});
    let data = await response.json();
    if(index < data.items.length - 1){
      const temp = data.items[index];
      data.items[index]= data.items[index + 1]
      data.items[index + 1] = temp;
      fetch(`/api/menus/${menuID}/`, {
          method: 'PUT',
          headers: {  
          'Content-Type': 'application/json'
      },
          body: JSON.stringify({name: data.name, restaurant: data.restaurant, items: data.items})
      });
      window.location.reload();
    }
  }

  return (
          <div>
            <div>Category: {categories.category.name}</div>
            <button onClick={handleDeleteClick}>Delete</button>
            <button onClick={handleMoveUpClick}>↑</button>
            <button onClick={handleMoveDownClick}>↓</button>
            <MenuCreator index={index} items={categories.category.items} menuID={menuID}/>
          </div>
    
  )
}

export default CategoryCreator
