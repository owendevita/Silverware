import React, {useState, useEffect} from 'react'
import CloseButton from './CloseButton'
import Name from './Name'
import Price from './Price'
import SubmitButton from './SubmitButton'
import Category from './Category'

const ItemPopup = ({map, setPopup, menuID}) => {
  
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div className='popup-outer'>
        <div className="popup-inner">
          <label className="popup-titles">Create New Item</label>
            <CloseButton setPopup={setPopup}/>
            <Name setName={setName} label={"Name"}/>
            <Price setPrice={setPrice} label={"Price"}/>
            <form>
            {map.get(menuID).map((data, index) => (
              <Category category={category} label={data.category.name} setCategory={setCategory}/>
            ))}
            </form>
            <SubmitButton
              category={category} name={name} price={price} menuID={menuID}
              />
        </div>
    </div>
  )
}

export default ItemPopup