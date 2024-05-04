//item
import React, { useEffect } from 'react'

const ChefItem = ({items, table_number, complete, onRemove, onToggleComplete}) => {
    console.log("complete?: ", complete);
  return (
    <div>
        <div>Order items: {items}</div>
        <div>Table number: {table_number}</div>
        <div>Order has been completed: {complete ? 'Yes' : 'No'}</div>
        <button onClick={onToggleComplete}>Toggle Completion</button>
        <button onClick={onRemove}>Remove Order</button>
    </div>
  )
}

export default ChefItem