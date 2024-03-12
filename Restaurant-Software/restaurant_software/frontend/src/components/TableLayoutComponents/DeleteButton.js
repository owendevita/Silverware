import React from 'react'

const button_style = {
    button: {
      backgroundColor: '#f44336'
    }
  }

const DeleteButton = ({ hasLayout, layoutID, setHasLayout, setPosition }) => {

    const clickHandler = () => {
        if(hasLayout) {
            fetch(`/api/layouts/${layoutID}/`, {method: 'DELETE'}).then(() => {
                setHasLayout(false);
                setPosition({ x: 0, y: 0 });
            });

    }
}

  return (
    <button onClick={clickHandler} style={button_style.button}>Delete</button>
  )
}

export default DeleteButton