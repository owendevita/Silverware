import React from 'react'

const Seats = ({seats, setSeats}) => {

    const handleChange = (event) => {
        if(event.target.value == ''){
            setSeats('');
        } else {
            const seatCount = parseInt(event.target.value);
            setSeats(tableNumber);
        }
    }
  
    return (
        <div>
            <label className="popup-labels">Seats:</label>
            <input className="popup-inputs" onChange={handleChange} value={seats}></input>
        </div>
  )
}

export default Seats