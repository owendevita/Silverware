import React, {useState} from 'react'

const CreateItemButton = ( {setPopup, popup} ) => {
    
    const handleClick = () => {
      setPopup(!popup);
    }
    
    return (
        <div>
            <button onClick={handleClick}>Create New Item</button>
        </div>
      )
}

export default CreateItemButton