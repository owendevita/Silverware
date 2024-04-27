import React, { useState, useEffect } from 'react'
import DraggableBox from './DraggableBox'
import SaveButton from './SaveButton'
import DeleteButton from './DeleteButton'
import CreateButton from './CreateButton'
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
    let [positionMap, setPositionMap] = useState(new Map());

    const [restaurantID, setRestaurantID] = useState(null);
    

    const checkLayouts = async () => {

      let response = await fetch(`/api/restaurants/${restaurantID}/layouts/`);
      let data = await response.json();

      // setLayoutList((prevLayoutList) => [...prevLayoutList, data]);
      setLayoutList(data);

      if(data && data.length > 0) {
  
        const firstElement = data[0];
        setLayoutID(firstElement.id);
        console.log(firstElement.id);
        
        
        const newMap = new Map(positionMap)
        
        for(let i = 0; i < data.length; i++){
          newMap.set(data[i].id, data[i].layout);
          console.log(data[i].layout);
          setPositionMap(newMap)
        }

        setHasLayout(true);
      }
  
  
    }

    const userInfo = async () =>{
      const token_data = await getUserInfo();
      setRestaurantID(token_data.restaurant);
  }
    
    useEffect(() => {
        userInfo();
    }, [])

    useEffect(() => {
      checkLayouts();
    }, [restaurantID])
    
    return layoutID ? (
    <div>
        <DropdownMenuParent positionMap={positionMap} setPositionMap={setPositionMap} restaurantID={restaurantID} setHasLayout={setHasLayout} hasLayout={hasLayout} setLayoutID={setLayoutID} layoutID={layoutID} layoutList={layoutList} setLayoutList={setLayoutList}/>

        {hasLayout && positionMap.get(layoutID).length > 0 && positionMap.get(layoutID).map((data, index) => (
          <DraggableBox index={index} x_position={data.x} y_position={data.y} type={data.type} seats={data.seats} setPositionMap={setPositionMap} positionMap={positionMap} layoutID={layoutID}/>
        ))}
        {hasLayout && <CreateButton layoutID={layoutID} />}
        <SaveButton positionMap={positionMap} restaurantID={restaurantID} layoutID={layoutID} setLayoutID = {setLayoutID} hasLayout = {hasLayout} setHasLayout = {setHasLayout} />
        <DeleteButton setLayoutList={setLayoutList} restaurantID={restaurantID} style={stylesheet.delete_button} hasLayout = {hasLayout} layoutID={layoutID} setHasLayout={setHasLayout}  setLayoutID={setLayoutID} />
    </div>
  ) : (
    <div>No layout found.</div>
  )
}

export default Parent