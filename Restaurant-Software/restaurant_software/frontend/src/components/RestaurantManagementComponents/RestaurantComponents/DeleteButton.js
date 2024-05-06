import React from 'react'

const DeleteButton = ({pk, setList}) => {
  
  const handleClick = async () => {
    const deleteMethod = await fetch(`/api/restaurants/${pk}/`, {method: 'DELETE'}).then( async () => {
        let response = await fetch(`/api/restaurants/`, {method: 'GET'});
        let data = await response.json();
        setList(data);

      });
    }

  
  return (
    <button className="employee-delete-button" onClick={handleClick}>Delete</button>
  )
}

export default DeleteButton