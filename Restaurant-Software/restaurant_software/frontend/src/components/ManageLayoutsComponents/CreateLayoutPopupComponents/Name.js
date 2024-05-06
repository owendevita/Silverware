import React from 'react'

const Seats = ({setName}) => {

    const handleChange = (event) => {
        const nameValue = event.target.value;
        setName(nameValue);
    }
  
    return (
        <div>
            <label className="popup-labels">Name:</label>
            <input className="popup-inputs" onChange={handleChange}></input>
        </div>
  )
}

export default Seats