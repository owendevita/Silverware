import React from 'react'

const CloseButton = ({setPopup}) => {

    const handleClick = () => {
        setPopup(false);
    }

    return (
        <button className="close-buttons" onClick={handleClick}>Close</button>
  )
}

export default CloseButton