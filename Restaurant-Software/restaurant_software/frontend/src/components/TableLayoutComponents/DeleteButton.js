import React from 'react'

const DeleteButton = ({ style, hasLayout, layoutID, setHasLayout, setPosition, setLayoutID }) => {

    const clickHandler = () => {
        if(hasLayout) {
            fetch(`/api/layouts/${layoutID}/`, {method: 'DELETE'}).then( async () => {
            
              let response = await fetch(`/api/restaurants/1/layouts/`);
              let data = await response.json();
          
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
    <button onClick={clickHandler} style={style}>Delete</button>
  )
}

export default DeleteButton