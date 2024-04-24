import React from 'react'

const DeleteButton = ({pk, restaurantID, setList}) => {
  
  const handleClick = async () => {
    const deleteMethod = await fetch(`/api/employees/${pk}/`, {method: 'DELETE'}).then( async () => {
        let response = await fetch(`/api/restaurants/${restaurantID}/employees/`, {method: 'GET'});
        let data = await response.json();
        setList(data);

      });
    }

  
  return (
    <button onClick={handleClick}>Delete</button>
  )
}

export default DeleteButton