import React from 'react'

const Category = ({label, setCategory}) => {

    const handleChange = (event) => {
        setCategory(label);
    }
  
    return (
        <div>
            <label className="popup-labels">{label}:</label>
            <input type="radio" className="popup-inputs" onChange={handleChange}></input>
        </div>
  )
}

export default Category