import React from 'react'

const DeleteButton = ({menuID, setMenuID}) => {
  
  const handleClick = async () => {
    const deleteMethod = await fetch(`/api/menus/${menuID}`, {method: 'DELETE'}).then( async () => {
        let response = await fetch(`/api/restaurants/1/menus/`, {method: 'GET'});
        let data = await response.json();
        if (data.length > 0) {
          setMenuID(data[0].id);
        } else {
          setMenuID(null);
        }
        window.location.reload();
      });
    }
  
  return (
    <button className='menu-delete-button' onClick={handleClick}>Delete Menu</button>
  )
}

export default DeleteButton