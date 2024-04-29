import React from 'react'

const DeleteButton = ({ setCurrentFocusedComponent, setLayoutList, style, hasLayout, layoutID, setHasLayout, restaurantID, setLayoutID }) => {

    const clickHandler = () => {
        if(hasLayout) {
            fetch(`/api/layouts/${layoutID}/`, {method: 'DELETE'}).then( async () => {
            
              let response = await fetch(`/api/restaurants/${restaurantID}/layouts/`);
              let data = await response.json();
              setLayoutList(data);
              setCurrentFocusedComponent({layoutID: null, index: null});

              if(!data || data.length == 0) {
                setHasLayout(false);
                setLayoutID(null);

              } else {
                setLayoutID(data[0].id);
                setHasLayout(true);
              }
            });
    }
}

  return (
    <button onClick={clickHandler} style={style}>Delete Layout</button>
  )
}

export default DeleteButton