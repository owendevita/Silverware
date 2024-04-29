import React, { useState, useEffect, useRef } from 'react'
import DraggableBox from './DraggableBox'
import SaveButton from './SaveButton'
import DeleteButton from './DeleteButton'
import CreateTableButton from './CreateTableButton'
import CreateWallButton from './CreateWallButton'
import DropdownMenuParent from './DropdownMenu/DropdownMenuParent'
import { getUserInfo } from '../../services/userService';
import CreatePopup from './CreateLayoutPopupComponents/Popup'
import EditPopup from './EditPopupComponents/Popup'
import EditButton from './EditButton'
import CreateLabelButton from './CreateLabelButton'
import DeleteComponent from './DeleteComponent'

const stylesheet = {
  delete_button: {
    backgroundColor: '#b90007'
  },
  draggable_box: {
    cursor: 'grab'
  },
  box:{
    border: '10px solid black',
    width: `100%`,
    height: '100%',
    overflow: 'hidden',
    position: 'relative'
  },
  mainDiv:{
    overflow: 'hidden',
    width: `100vw`,
    height: `100vh`,
    position: 'relative',
    backgroundColor: `#CBBFBB`
  }
};

const Parent = () => {    
    let [layoutID, setLayoutID] = useState(null);
    let [hasLayout, setHasLayout] = useState(false);
    let [layoutList, setLayoutList] = useState([]);
    let [positionMap, setPositionMap] = useState(new Map());
    let [createLayoutPopup, setCreateLayoutPopup] = useState(false);
    let [editPopup, setEditPopup] = useState(false);
    let [currentFocusedComponent, setCurrentFocusedComponent] = useState({layoutID: null, index: null});

    const [restaurantID, setRestaurantID] = useState(null);

    const checkLayouts = async () => {

      let response = await fetch(`/api/restaurants/${restaurantID}/layouts/`);
      let data = await response.json();

      setLayoutList(data);

      if(data && data.length > 0) {
  
        const firstElement = data[0];
        setLayoutID(firstElement.id);
        
        const newMap = new Map(positionMap)
        
        for(let i = 0; i < data.length; i++){
          newMap.set(data[i].id, data[i].layout);
          console.log(data[i].layout);
          
        }
        setPositionMap(newMap);
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
    <div style={stylesheet.mainDiv}>
        <DropdownMenuParent setCurrentFocusedComponent={setCurrentFocusedComponent} positionMap={positionMap} setPositionMap={setPositionMap} restaurantID={restaurantID} setHasLayout={setHasLayout} hasLayout={hasLayout} setLayoutID={setLayoutID} layoutID={layoutID} layoutList={layoutList} setLayoutList={setLayoutList} createLayoutPopup={createLayoutPopup} setCreateLayoutPopup={setCreateLayoutPopup}/>
        {createLayoutPopup && <CreatePopup restaurantID={restaurantID} setLayoutList={setLayoutList} setHasLayout={setHasLayout} setLayoutID={setLayoutID} setPositionMap={setPositionMap} positionMap={positionMap} setCreateLayoutPopup={setCreateLayoutPopup} createLayoutPopup={createLayoutPopup} layoutID={layoutID}/>}
        {hasLayout && 
        <div>
          <CreateTableButton setPositionMap={setPositionMap} positionMap={positionMap} layoutID={layoutID}/>
          <CreateWallButton setPositionMap={setPositionMap} positionMap={positionMap} layoutID={layoutID}/>
          <CreateLabelButton setPositionMap={setPositionMap} positionMap={positionMap} layoutID={layoutID}/>
        </div>}
        <SaveButton positionMap={positionMap} restaurantID={restaurantID} layoutID={layoutID} setLayoutID = {setLayoutID} hasLayout = {hasLayout} setHasLayout = {setHasLayout} />
        <DeleteButton setCurrentFocusedComponent={setCurrentFocusedComponent} setLayoutList={setLayoutList} restaurantID={restaurantID} style={stylesheet.delete_button} hasLayout = {hasLayout} layoutID={layoutID} setHasLayout={setHasLayout}  setLayoutID={setLayoutID} />
        {(currentFocusedComponent.index != null && (
        positionMap.get(currentFocusedComponent.layoutID)[currentFocusedComponent.index].type == 'booth' ||
        positionMap.get(currentFocusedComponent.layoutID)[currentFocusedComponent.index].type == 'table' ||
        positionMap.get(currentFocusedComponent.layoutID)[currentFocusedComponent.index].type == 'label-clear' ||
        positionMap.get(currentFocusedComponent.layoutID)[currentFocusedComponent.index].type == 'label-filled'
        )
        ) && 
            <EditButton positionMap={positionMap} currentFocusedComponent={currentFocusedComponent} setEditPopup={setEditPopup} />
         }
        {(currentFocusedComponent.index != null) && 
            <DeleteComponent style={stylesheet.delete_button} currentFocusedComponent={currentFocusedComponent} setCurrentFocusedComponent={setCurrentFocusedComponent} positionMap={positionMap} setPositionMap={setPositionMap} />
          }

        {editPopup && <EditPopup setCurrentFocusedComponent={setCurrentFocusedComponent} positionMap={positionMap} setPositionMap={setPositionMap} currentFocusedComponent={currentFocusedComponent} setPopup={setEditPopup} />}
        <div style={stylesheet.box} >
          
          {hasLayout && positionMap.get(layoutID).length > 0 && positionMap.get(layoutID).map((data, index) => (
            (data.type == 'back-wall') ? (   
            <DraggableBox labelInfo={null} key={index} index={index} currentFocusedComponent={currentFocusedComponent} setCurrentFocusedComponent={setCurrentFocusedComponent} x_position={data.x} y_position={data.y} type={data.type} tableNumber={data.table_number} seats={data.seats} setPositionMap={setPositionMap} positionMap={positionMap} layoutID={layoutID}/>
            ) : (null)
          ))}
          
          {hasLayout && positionMap.get(layoutID).length > 0 && positionMap.get(layoutID).map((data, index) => (
            (data.type == 'booth' || data.type == 'table') ? (   
            <DraggableBox labelInfo={null} key={index} index={index} currentFocusedComponent={currentFocusedComponent} setCurrentFocusedComponent={setCurrentFocusedComponent} x_position={data.x} y_position={data.y} type={data.type} tableNumber={data.table_number} seats={data.seats} setPositionMap={setPositionMap} positionMap={positionMap} layoutID={layoutID}/>
            ) : (null)
          ))}

          {hasLayout && positionMap.get(layoutID).length > 0 && positionMap.get(layoutID).map((data, index) => (
            (data.type == 'horizontal-divider' || data.type == 'vertical-divider') ? (   
            <DraggableBox labelInfo={null} key={index} index={index} currentFocusedComponent={currentFocusedComponent} setCurrentFocusedComponent={setCurrentFocusedComponent} x_position={data.x} y_position={data.y} type={data.type} tableNumber={data.table_number} seats={data.seats} setPositionMap={setPositionMap} positionMap={positionMap} layoutID={layoutID}/>
            ) : (null)
          ))}
          
          {hasLayout && positionMap.get(layoutID).length > 0 && positionMap.get(layoutID).map((data, index) => (
            (data.type == 'side-wall' ) ? (   
            <DraggableBox labelInfo={null} key={index} index={index} currentFocusedComponent={currentFocusedComponent} setCurrentFocusedComponent={setCurrentFocusedComponent} x_position={data.x} y_position={data.y} type={data.type} tableNumber={data.table_number} seats={data.seats} setPositionMap={setPositionMap} positionMap={positionMap} layoutID={layoutID}/>
            ) : (null)
          ))}

          {hasLayout && positionMap.get(layoutID).length > 0 && positionMap.get(layoutID).map((data, index) => (
            (data.type == 'label-filled' || data.type == 'label-clear') ? (   
            <DraggableBox labelInfo={data.label_content} key={index} index={index} currentFocusedComponent={currentFocusedComponent} setCurrentFocusedComponent={setCurrentFocusedComponent} x_position={data.x} y_position={data.y} type={data.type} tableNumber={data.table_number} seats={data.seats} setPositionMap={setPositionMap} positionMap={positionMap} layoutID={layoutID}/>
            ) : (null)
          ))}
          
        </div>
    </div>
  ) : (
    <div style={stylesheet.mainDiv}>
      <DropdownMenuParent positionMap={positionMap} setPositionMap={setPositionMap} restaurantID={restaurantID} setHasLayout={setHasLayout} hasLayout={hasLayout} setLayoutID={setLayoutID} layoutID={layoutID} layoutList={layoutList} setLayoutList={setLayoutList} createLayoutPopup={createLayoutPopup} setCreateLayoutPopup={setCreateLayoutPopup}/>
      {createLayoutPopup && <CreatePopup restaurantID={restaurantID} setLayoutList={setLayoutList} setHasLayout={setHasLayout} setLayoutID={setLayoutID} setPositionMap={setPositionMap} positionMap={positionMap} setCreateLayoutPopup={setCreateLayoutPopup} createLayoutPopup={createLayoutPopup} layoutID={layoutID}/>}
    </div>
  )
}

export default Parent