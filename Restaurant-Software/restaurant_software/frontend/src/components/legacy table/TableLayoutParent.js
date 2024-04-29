import React, { useState, useEffect } from 'react'
import DraggableBox from './DraggableBox'
import SaveButton from './SaveButton'
import DeleteButton from './DeleteButton'
import DropdownMenuParent from './DropdownMenu/DropdownMenuParent'
import { getUserInfo } from '../../services/userService';

const stylesheet = {
  delete_button: {
    backgroundColor: '#b90007'
  },
  draggable_box: {
    cursor: 'grab'
  }
};

const Parent = () => {    
    let [layoutID, setLayoutID] = useState(null);
    let [hasLayout, setHasLayout] = useState(false);
    let [layoutList, setLayoutList] = useState([]);

    const [restaurantID, setRestaurantID] = useState(null);
    

    const checkLayouts = async () => {

      let response = await fetch(`/api/restaurants/${restaurantID}/layouts/`);
      let data = await response.json();
      
      setLayoutList(data);

      if(!data || data.length == 0) {
       
        setHasLayout(false);
  
      } else {
  
        const firstElement = data[0];
  
        console.log("SETTING INITIAL ID");
        setLayoutID(firstElement.id);
        setHasLayout(true);
  
      }
  
  
    }

    const userInfo = async () =>{
      const token_data = await getUserInfo();
      setRestaurantID(token_data.restaurant);
  }
    
    useEffect(() => {
        userInfo();
        checkLayouts();
    }, [])
    


    

    return (
    <div>
        <DropdownMenuParent restaurantID={restaurantID} setHasLayout={setHasLayout} hasLayout={hasLayout} setLayoutID={setLayoutID} layoutID={layoutID} layoutList={layoutList} setLayoutList={setLayoutList}/>
        <div></div>
        <DraggableBox restaurantID={restaurantID} style={stylesheet.draggable_box}  hasLayout={hasLayout} layoutID={layoutID} />
        <div></div>
        <SaveButton restaurantID={restaurantID} layoutID={layoutID} setLayoutID = {setLayoutID} hasLayout = {hasLayout} setHasLayout = {setHasLayout} />
        <div></div>
        <DeleteButton restaurantID={restaurantID} style={stylesheet.delete_button} hasLayout = {hasLayout} layoutID={layoutID} setHasLayout={setHasLayout}  setLayoutID={setLayoutID} />
    </div>
  )
}

export default Parent