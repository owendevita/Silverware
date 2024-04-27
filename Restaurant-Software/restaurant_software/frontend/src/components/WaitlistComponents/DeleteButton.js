import React from 'react'

const DeleteButton = ({ parties, setParties, name, partySize}) => {

    const clickHandler = () => {
        setParties(parties => parties.filter(item => !(item.name === name && item.party_size === partySize))); //parties.append(info(.json of party size/name))
        window.location.reload();
    }
 
  return (
    <button className="waitlist-buttons" onClick={clickHandler}>Delete</button>
  )
}

export default DeleteButton