import React from 'react'

const Passsword = ({setTableType}) => {
    const handleClick = (type) => {
        setTableType(type);
    }
  
    return (
        <div>
            <label className="popup-labels">Table Type:</label>
            <button onClick={() => handleClick("vertical-divider")}>Vertical Divider</button>
            <button onClick={() => handleClick("horizontal-divider")}>Horizontal Divider</button>
            <button onClick={() => handleClick("back-wall")}>Back Wall</button>
            <button onClick={() => handleClick("side-wall")}>Side Wall</button>
        </div>
  )
}

export default Passsword