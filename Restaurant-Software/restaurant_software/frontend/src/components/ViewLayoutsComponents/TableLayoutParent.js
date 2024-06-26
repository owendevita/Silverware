import React, { useState, useEffect, useRef } from 'react'
import DraggableBox from './DraggableBox'
import DropdownMenuParent from './DropdownMenu/DropdownMenuParent'
import { getUserInfo } from '../../services/userService';

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
    let [currentFocusedComponent, setCurrentFocusedComponent] = useState({layoutID: null, index: null});
    let [info, setInfo] = useState(null);

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

    useEffect(() => {
      if(currentFocusedComponent != undefined && currentFocusedComponent != null && currentFocusedComponent.index != null){
          setInfo(positionMap.get(currentFocusedComponent.layoutID)[currentFocusedComponent.index])
      }
    }, [currentFocusedComponent])
    
    return layoutID ? (
    <div style={stylesheet.mainDiv}>
        <DropdownMenuParent setCurrentFocusedComponent={setCurrentFocusedComponent} positionMap={positionMap} setPositionMap={setPositionMap} restaurantID={restaurantID} setHasLayout={setHasLayout} hasLayout={hasLayout} setLayoutID={setLayoutID} layoutID={layoutID} layoutList={layoutList} setLayoutList={setLayoutList}/>
        <div className="view-layout-container" >
          {(currentFocusedComponent.index != null && (
            positionMap.get(currentFocusedComponent.layoutID)[currentFocusedComponent.index].type == 'booth' ||
            positionMap.get(currentFocusedComponent.layoutID)[currentFocusedComponent.index].type == 'table')) 
            && 
            <div className="table-info">
              <label className="table-info-object">Seats: {positionMap.get(currentFocusedComponent.layoutID)[currentFocusedComponent.index].seats}</label> 
              <label className="table-info-object">Table Number: {positionMap.get(currentFocusedComponent.layoutID)[currentFocusedComponent.index].table_number}</label>
            </div>}

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
      There are no layouts to view.
    </div>
  )
}

export default Parent