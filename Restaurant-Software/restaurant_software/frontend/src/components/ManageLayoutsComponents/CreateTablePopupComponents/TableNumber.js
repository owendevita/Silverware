import React from 'react'

const Seats = ({setTableNumber}) => {

    const handleChange = (event) => {
        const tableNumber = parseInt(event.target.value);
        setTableNumber(tableNumber);
    }
  
    return (
        <div>
            <label className="popup-labels">Table Number:</label>
            <input className="popup-inputs" onChange={handleChange}></input>
        </div>
  )
}

export default Seats