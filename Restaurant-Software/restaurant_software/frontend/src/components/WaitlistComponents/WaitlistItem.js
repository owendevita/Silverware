import React from 'react'

const WaitlistItem = ({name, partySize}) => {
  return (
    <div>
        <div>Name: {name}</div>
        <div>Party Size: {partySize}</div>
    </div>
  )
}

export default WaitlistItem