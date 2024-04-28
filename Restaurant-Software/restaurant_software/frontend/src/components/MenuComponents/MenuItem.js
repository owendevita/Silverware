import React from 'react'

const MenuItem = ({name, price}) => {
  return (
    <div style={{ marginBottom: '10px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
        <div>Name: {name}</div>
        <div>Price: {price}</div>
    </div>
  )
}

export default MenuItem