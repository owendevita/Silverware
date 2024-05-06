import React from 'react'

const LabelContent = ({setContent}) => {

    const handleChange = (event) => {
        const content = event.target.value;
        setContent(content);
    }
  
    return (
        <div>
            <label className="popup-labels">Text:</label>
            <input className="popup-inputs" onChange={handleChange}></input>
        </div>
  )
}

export default LabelContent