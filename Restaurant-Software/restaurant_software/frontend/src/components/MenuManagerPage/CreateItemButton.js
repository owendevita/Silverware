import React, {useState} from 'react'

const CreateItemButton = ( {setPopup, popup} ) => {
    
    const handleClick = () => {
      setPopup(!popup);
    }
    
    return (
        <div>
            <button className='menu-create-buttons' onClick={handleClick}>Create New Item</button>
        </div>
      )
}

export default CreateItemButton