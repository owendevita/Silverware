import React from 'react'

const MenuItem = ({name, price}) => {
  return (
    <div>
        <div>Name: {name}</div>
        <div>Price: {price}</div>
    </div>
  )
}

export default MenuItem