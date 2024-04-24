import React from 'react'

const Name = ({label, setName, name}) => {

    const handleChange = (event) => {
        const nameValue = event.target.value;
        setName(nameValue);
    }
  
    return (
        <div>
            <label className="popup-labels">{label}:</label>
            <input className="popup-inputs" value={name} onChange={handleChange}></input>
        </div>
  )
}

export default Name