import React from 'react'

const LabelContent = ({setContent, content}) => {

    const handleChange = (event) => {
        const content = event.target.value;
        setContent(content);
    }
  
    return (
        <div>
            <label className="popup-labels">Text:</label>
            <input className="popup-inputs" onChange={handleChange} value={content}></input>
        </div>
  )
}

export default LabelContent