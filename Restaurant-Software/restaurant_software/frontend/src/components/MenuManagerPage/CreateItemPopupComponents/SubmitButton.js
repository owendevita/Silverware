import React from 'react'

const SubmitButton = ({category, name, price, menuID}) => {

  const handleClick = async() =>{
    //   fetch('/api/create/menu/', {
    //     method: 'POST',
    //     headers: {  
    //     'Content-Type': 'application/json'
    //   },
    //     body: JSON.stringify({
    //       name: name,
    //       price: price,
    //       restaurant: 1 // TO-DO: MAKE THIS USER'S RESTAURANT ID
    //     })
    //   })
    //   .then(response => {
    //     if (!response.ok) {
    //         console.log('Network response was not ok');
    //     }
    //     return response.json();
    // })
    // .then(data => {
    //     window.location.reload()
    // })
    // .catch(error => {
    //     console.error('There has been a problem with your fetch operation:', error);
    // });
    let response = await fetch(`/api/menus/${menuID}`, {method: 'GET'});
    let data = await response.json();
    const categoryData = data.items.find(item => item.category.name === category);
    console.log(data);
    //console.log(categoriesData);
    console.log(categoryData);

  }
  
  return (
    <button className="popup-buttons" onClick={handleClick}>Create New Item</button>
  )
}

export default SubmitButton