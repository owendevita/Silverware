import React from 'react'

const DeleteMenuButton = ({ style, hasMenu, menuID, setHasMenu, setMenuID }) => {

    const clickHandler = () => {
        if(hasMenu) {
            fetch(`/api/restaurants/${menuID}/menus/`, {method: 'DELETE'}).then( async () => {
            
              let response = await fetch('/api/restaurants/1/menus/');
              let data = await response.json();
          
              if(!data || data.length == 0) {
               
                setHasMenu(false);
                setMenuID(null);

              } else {
                setMenuID(data[0].id);
                setHasMenu(true);
              }
            });

    }
}

  return (
    <button onClick={clickHandler} style={style}>Delete Menu</button>
  )
}

export default DeleteMenuButton