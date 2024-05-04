import React from 'react'

const Seats = ({seats, setSeats}) => {

    const handleChange = (event) => {
        const seatCount = parseInt(event.target.value);
        setSeats(seatCount);
    }
  
    return (
        <div>
            <label className="popup-labels">Seats:</label>
            <input className="popup-inputs" onChange={handleChange} value={seats}></input>
        </div>
  )
}

export default Seats