import React from 'react'

const Passsword = ({setTableType}) => {
    const handleClick = (type) => {
        setTableType(type);
    }
  
    return (
        <div>
            <label className="popup-labels">Table Type:</label>
            <button onClick={() => handleClick("booth")}>Booth</button>
            <button onClick={() => handleClick("table")}>Table</button>
        </div>
  )
}

export default Passsword