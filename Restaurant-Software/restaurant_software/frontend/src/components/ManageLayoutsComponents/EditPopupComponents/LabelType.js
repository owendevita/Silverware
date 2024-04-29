import React from 'react'

const LabelType = ({setLabelType}) => {
    const handleClick = (type) => {
        setLabelType(type);
    }
  
    return (
        <div>
            <label className="popup-labels">Table Type:</label>
            <button onClick={() => handleClick("label-clear")}>Clear</button>
            <button onClick={() => handleClick("label-filled")}>Filled</button>
        </div>
  )
}

export default LabelType