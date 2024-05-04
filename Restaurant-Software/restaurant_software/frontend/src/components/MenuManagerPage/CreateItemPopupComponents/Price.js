import React from 'react'

const Price = ({label, setPrice}) => {

    const handleChange = (event) => {
        const priceValue = event.target.value;
        setPrice(priceValue);
    }
  
    return (
        <div>
            <label className="popup-labels">{label}:</label>
            <input className="popup-inputs" onChange={handleChange}></input>
        </div>
  )
}

export default Price