//item
import React, { useEffect } from 'react'

const ChefItem = ({items, table_number, complete, onRemove, onToggleComplete}) => {
    console.log("complete?: ", complete);
  return (
    <div className="chef-order-item">
        <div className='chef-order-content-title'>Order items:</div> {items}
        <div className='chef-order-content-title'>Table number:</div> {table_number}
        <div className='chef-order-content-title'>Order has been completed:</div> {complete ? 'Yes' : 'No'}
        <br></br>
        <button className='toggle-completion-btn' onClick={onToggleComplete}>Toggle Completion</button>
        <button className='remove-order-btn' onClick={onRemove}>Remove Order</button>
    </div>
  )
}

export default ChefItem