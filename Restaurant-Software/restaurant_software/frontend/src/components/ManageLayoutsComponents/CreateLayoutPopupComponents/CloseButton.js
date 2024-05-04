import React from 'react'

const CloseButton = ({setCreateLayoutPopup}) => {

    const handleClick = () => {
        setCreateLayoutPopup(false);
    }

    return (
        <button className="close-buttons" onClick={handleClick}>Close</button>
  )
}

export default CloseButton