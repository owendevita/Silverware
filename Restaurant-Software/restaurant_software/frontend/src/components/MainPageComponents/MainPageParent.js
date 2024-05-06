import React, { useState, useEffect, useRef } from 'react'
import DraggableBox from './DraggableBox'
import { getUserInfo } from '../../services/userService';
import OccupiedClearButton from './OccupiedClearButton';
import CheckUpButton from './CheckUpButton';
import DateSubtractor from './DateSubtractor';

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
    position: 'relative'
  },
  mainDiv:{
    width: `100vw`,
    height: `100vh`,
    position: 'relative',
    backgroundColor: `#CBBFBB`
  }
};

const Parent = () => {    
    let [layoutID, setLayoutID] = useState(null);
    let [hasLayout, setHasLayout] = useState(false);
    let [positionMap, setPositionMap] = useState(new Map());
    let [layout, setLayout] = useState(null);
    let [currentFocusedComponent, setCurrentFocusedComponent] = useState({layoutID: null, index: null});
    let [info, setInfo] = useState(null);

    const [restaurantID, setRestaurantID] = useState(null);

    const checkLayout = async () => {

      let response = await fetch(`/api/restaurants/${restaurantID}/`);
      let data = await response.json();

      if(data.current_layout && data.current_layout != '' && layoutID != data.current_layout){
        try {
          setHasLayout(false);
          setLayoutID(null);
          let response = await fetch(`/api/layouts/${data.current_layout}/`);
          let layoutData = await response.json();
          if(!response.ok){
            setHasLayout(false);
            setLayoutID(null);
            return false;
          }
          let newMap = new Map(positionMap);
          newMap.set(data.current_layout, layoutData.layout);
          setPositionMap(newMap);

          setLayout(layoutData.layout);
          setLayoutID(data.current_layout);
          setHasLayout(true);

          return true;
        } catch (error) {
          setHasLayout(false);
          return false;
        }
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
      checkLayout();
    }, [restaurantID])

    useEffect(() => {
      const intervalId = setInterval(() => {
        checkLayout();
      }, 10000); 
      return () => clearInterval(intervalId);
    }, [layoutID]);

    useEffect(() => {
      if(currentFocusedComponent != undefined && currentFocusedComponent != null && currentFocusedComponent.index != null){
          setInfo(positionMap.get(currentFocusedComponent.layoutID)[currentFocusedComponent.index])
      }
    }, [currentFocusedComponent])
    
    return hasLayout && layoutID != null ? (
    <div style={stylesheet.mainDiv}>
                  {(currentFocusedComponent.index != null && (
            positionMap.get(currentFocusedComponent.layoutID)[currentFocusedComponent.index].type == 'booth' ||
            positionMap.get(currentFocusedComponent.layoutID)[currentFocusedComponent.index].type == 'table')) 
            ? (
            <div>
              <label className="table-info-object">Table Number: {positionMap.get(currentFocusedComponent.layoutID)[currentFocusedComponent.index].table_number}</label>
              <br></br>
              <label className="table-info-object">Seats: {positionMap.get(currentFocusedComponent.layoutID)[currentFocusedComponent.index].seats}</label>
              <br></br> 
              <label className="table-info-object">Occupied: {positionMap.get(currentFocusedComponent.layoutID)[currentFocusedComponent.index].has_party.toString()}</label>
              <br></br>
              {positionMap.get(currentFocusedComponent.layoutID)[currentFocusedComponent.index].has_party && <label className="table-info-object">Time Since Checkup: {<DateSubtractor date={positionMap.get(currentFocusedComponent.layoutID)[currentFocusedComponent.index].last_checkup}/>}</label>}
              <br></br>
              {positionMap.get(currentFocusedComponent.layoutID)[currentFocusedComponent.index].has_party && <label className="table-info-object">Time Occupied: {<DateSubtractor date={positionMap.get(currentFocusedComponent.layoutID)[currentFocusedComponent.index].date_sat}/>}</label>}
              <OccupiedClearButton className="occupied-button" currentFocusedComponent={currentFocusedComponent} positionMap={positionMap} setPositionMap={setPositionMap}/>
              <CheckUpButton className="checkup-button" currentFocusedComponent={currentFocusedComponent} positionMap={positionMap} setPositionMap={setPositionMap}/>
            </div>) : 
            (<div>
              <label className="table-info-object">Table Number: </label>
              <br></br>
              <label className="table-info-object">Seats: </label>
              <br></br> 
              <label className="table-info-object">Occupied: </label>
              <br></br>
              <label className="table-info-object">Time Since Checkup: </label>
              <br></br>
              <label className="table-info-object">Time Occupied: </label>
              <OccupiedClearButton className="occupied-button" currentFocusedComponent={currentFocusedComponent} positionMap={positionMap} setPositionMap={setPositionMap}/>
              <CheckUpButton className="checkup-button" currentFocusedComponent={currentFocusedComponent} positionMap={positionMap} setPositionMap={setPositionMap}/>
            </div>)}
        <div className="home-view-layout-container" >

        
          {hasLayout && layout.map((data, index) => (
            (data.type == 'back-wall') ? (   
            <DraggableBox info={info} labelInfo={null} key={index} index={index} currentFocusedComponent={currentFocusedComponent} setCurrentFocusedComponent={setCurrentFocusedComponent} x_position={data.x} y_position={data.y} type={data.type} tableNumber={data.table_number} seats={data.seats} setPositionMap={setPositionMap} positionMap={positionMap} layoutID={layoutID}/>
            ) : (null)
          ))}
          
          {hasLayout && positionMap.get(layoutID).length > 0 && positionMap.get(layoutID).map((data, index) => (
            (data.type == 'booth' || data.type == 'table') ? (   
            <DraggableBox info={info} labelInfo={null} key={index} index={index} currentFocusedComponent={currentFocusedComponent} setCurrentFocusedComponent={setCurrentFocusedComponent} x_position={data.x} y_position={data.y} type={data.type} tableNumber={data.table_number} seats={data.seats} setPositionMap={setPositionMap} positionMap={positionMap} layoutID={layoutID}/>
            ) : (null)
          ))}

          {hasLayout && positionMap.get(layoutID).length > 0 && positionMap.get(layoutID).map((data, index) => (
            (data.type == 'horizontal-divider' || data.type == 'vertical-divider') ? (   
            <DraggableBox info={info} labelInfo={null} key={index} index={index} currentFocusedComponent={currentFocusedComponent} setCurrentFocusedComponent={setCurrentFocusedComponent} x_position={data.x} y_position={data.y} type={data.type} tableNumber={data.table_number} seats={data.seats} setPositionMap={setPositionMap} positionMap={positionMap} layoutID={layoutID}/>
            ) : (null)
          ))}
          
          {hasLayout && positionMap.get(layoutID).length > 0 && positionMap.get(layoutID).map((data, index) => (
            (data.type == 'side-wall' ) ? (   
            <DraggableBox info={info} labelInfo={null} key={index} index={index} currentFocusedComponent={currentFocusedComponent} setCurrentFocusedComponent={setCurrentFocusedComponent} x_position={data.x} y_position={data.y} type={data.type} tableNumber={data.table_number} seats={data.seats} setPositionMap={setPositionMap} positionMap={positionMap} layoutID={layoutID}/>
            ) : (null)
          ))}

          {hasLayout && positionMap.get(layoutID).length > 0 && positionMap.get(layoutID).map((data, index) => (
            (data.type == 'label-filled' || data.type == 'label-clear') ? (   
            <DraggableBox info={info} labelInfo={data.label_content} key={index} index={index} currentFocusedComponent={currentFocusedComponent} setCurrentFocusedComponent={setCurrentFocusedComponent} x_position={data.x} y_position={data.y} type={data.type} tableNumber={data.table_number} seats={data.seats} setPositionMap={setPositionMap} positionMap={positionMap} layoutID={layoutID}/>
            ) : (null)
          ))}
        </div>
    </div>
  ) : (
    <div style={stylesheet.mainDiv}>
      No layout is currently set.
    </div>
  )
}

export default Parent