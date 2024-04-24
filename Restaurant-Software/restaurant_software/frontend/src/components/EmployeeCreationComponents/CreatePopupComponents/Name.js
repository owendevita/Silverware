import React from 'react'

const Name = ({label, setName}) => {

    const handleChange = (event) => {
        const nameValue = event.target.value;
        setName(nameValue);
    }
  
    return (
        <div>
            <label className="popup-labels">{label}:</label>
            <input className="popup-inputs" onChange={handleChange}></input>
        </div>
  )
}

export default Name