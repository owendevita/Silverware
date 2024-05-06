import React, {useState, useEffect} from 'react'
import booth from '../../../static/assets/booth.png'
import table from '../../../static/assets/table.png'
import divider from '../../../static/assets/divider.png'
import sideWall from '../../../static/assets/side-wall.png'
import backWall from '../../../static/assets/back-wall.png'

const stylesheet = {
  button: {
    border: 'none',
    minWidth: '100%',
    minHeight: '100%',
    backgroundColor: 'transparent'
  }
};

const InnerDraggableBox = ({ type, currentFocusedComponent, layoutID, index, labelInfo, setCurrentFocusedComponent, positionMap}) => {
    let [info, setInfo] = useState(null);

    const onClick = () => {
      setCurrentFocusedComponent({layoutID: layoutID,index: index});
    }

    useEffect(() => {
      let list = positionMap.get(currentFocusedComponent.layoutID)
      if(list != undefined) {
        setInfo(list[index]);
      }
      
    }, [currentFocusedComponent, positionMap])
    

    const preventDragHandler = (event) => {
        event.preventDefault();
      };

  const types = {
    "booth" : <img onDragStart={preventDragHandler} style={currentFocusedComponent.index == index && currentFocusedComponent.layoutID == layoutID ? {outline: '0.2em white solid'} : {outline: 'none'}} className="boothImage" src={booth} alt="booth" />,
    "table" : <img onDragStart={preventDragHandler} style={currentFocusedComponent.index == index && currentFocusedComponent.layoutID == layoutID ? {outline: '0.2em white solid'} : {outline: 'none'}} className="tableImage" src={table} alt="table" />,
    "horizontal-divider" : <img onDragStart={preventDragHandler} style={currentFocusedComponent.index == index && currentFocusedComponent.layoutID == layoutID ? {outline: '0.2em white solid'} : {outline: 'none'}} className="horizontalDivider" src={divider} alt="horizontal-divider" />,
    "vertical-divider" : <img onDragStart={preventDragHandler} style={currentFocusedComponent.index == index && currentFocusedComponent.layoutID == layoutID ? {outline: '0.2em white solid'} : {outline: 'none'}} className="verticalDivider" src={divider} alt="vertical-divider" /> ,
    "back-wall" : <img onDragStart={preventDragHandler} style={currentFocusedComponent.index == index && currentFocusedComponent.layoutID == layoutID ? {outline: '0.2em white solid'} : {outline: 'none'}} className="backWall" src={backWall} alt="back-wall" /> ,
    "side-wall" : <img onDragStart={preventDragHandler} style={currentFocusedComponent.index == index && currentFocusedComponent.layoutID == layoutID ? {outline: '0.2em white solid'} : {outline: 'none'}} className="sideWall" src={sideWall} alt="side-wall" />,
    "label-clear" : <div onDragStart={preventDragHandler} style={currentFocusedComponent.index == index && currentFocusedComponent.layoutID == layoutID ? {outline: '0.2em white solid'} : {outline: 'none'}} className="labelClear" src={sideWall}>{labelInfo}</div>,
    "label-filled" : <div onDragStart={preventDragHandler} style={currentFocusedComponent.index == index && currentFocusedComponent.layoutID == layoutID ? {outline: '0.2em white solid'} : {outline: 'none'}} className="labelFilled" src={sideWall}>{labelInfo}</div>
  
  }

  const filledTypes = {
    "booth" : <img onDragStart={preventDragHandler} style={currentFocusedComponent.index == index && currentFocusedComponent.layoutID == layoutID ? {outline: '0.2em #DB2B39 solid'} : {outline: 'none'}} className="boothImage" src={booth} alt="booth" />,
    "table" : <img onDragStart={preventDragHandler} style={currentFocusedComponent.index == index && currentFocusedComponent.layoutID == layoutID ? {outline: '0.2em #DB2B39 solid'} : {outline: 'none'}} className="tableImage" src={table} alt="table" />,
    "horizontal-divider" : <img onDragStart={preventDragHandler} style={currentFocusedComponent.index == index && currentFocusedComponent.layoutID == layoutID ? {outline: '0.2em #DB2B39 solid'} : {outline: 'none'}} className="horizontalDivider" src={divider} alt="horizontal-divider" />,
    "vertical-divider" : <img onDragStart={preventDragHandler} style={currentFocusedComponent.index == index && currentFocusedComponent.layoutID == layoutID ? {outline: '0.2em #DB2B39 solid'} : {outline: 'none'}} className="verticalDivider" src={divider} alt="vertical-divider" /> ,
    "back-wall" : <img onDragStart={preventDragHandler} style={currentFocusedComponent.index == index && currentFocusedComponent.layoutID == layoutID ? {outline: '0.2em #DB2B39 solid'} : {outline: 'none'}} className="backWall" src={backWall} alt="back-wall" /> ,
    "side-wall" : <img onDragStart={preventDragHandler} style={currentFocusedComponent.index == index && currentFocusedComponent.layoutID == layoutID ? {outline: '0.2em #DB2B39 solid'} : {outline: 'none'}} className="sideWall" src={sideWall} alt="side-wall" />,
    "label-clear" : <div onDragStart={preventDragHandler} style={currentFocusedComponent.index == index && currentFocusedComponent.layoutID == layoutID ? {outline: '0.2em #DB2B39 solid'} : {outline: 'none'}} className="labelClear" src={sideWall}>{labelInfo}</div>,
    "label-filled" : <div onDragStart={preventDragHandler} style={currentFocusedComponent.index == index && currentFocusedComponent.layoutID == layoutID ? {outline: '0.2em #DB2B39 solid'} : {outline: 'none'}} className="labelFilled" src={sideWall}>{labelInfo}</div>
  
  }

  const clearedTypes = {
    "booth" : <img onDragStart={preventDragHandler} style={currentFocusedComponent.index == index && currentFocusedComponent.layoutID == layoutID ? {outline: '0.2em rgb(140, 202, 140) solid'} : {outline: 'none'}} className="boothImage" src={booth} alt="booth" />,
    "table" : <img onDragStart={preventDragHandler} style={currentFocusedComponent.index == index && currentFocusedComponent.layoutID == layoutID ? {outline: '0.2em rgb(140, 202, 140) solid'} : {outline: 'none'}} className="tableImage" src={table} alt="table" />,
    "horizontal-divider" : <img onDragStart={preventDragHandler} style={currentFocusedComponent.index == index && currentFocusedComponent.layoutID == layoutID ? {outline: '0.2em rgb(140, 202, 140) solid'} : {outline: 'none'}} className="horizontalDivider" src={divider} alt="horizontal-divider" />,
    "vertical-divider" : <img onDragStart={preventDragHandler} style={currentFocusedComponent.index == index && currentFocusedComponent.layoutID == layoutID ? {outline: '0.2em rgb(140, 202, 140) solid'} : {outline: 'none'}} className="verticalDivider" src={divider} alt="vertical-divider" /> ,
    "back-wall" : <img onDragStart={preventDragHandler} style={currentFocusedComponent.index == index && currentFocusedComponent.layoutID == layoutID ? {outline: '0.2em rgb(140, 202, 140) solid'} : {outline: 'none'}} className="backWall" src={backWall} alt="back-wall" /> ,
    "side-wall" : <img onDragStart={preventDragHandler} style={currentFocusedComponent.index == index && currentFocusedComponent.layoutID == layoutID ? {outline: '0.2em rgb(140, 202, 140) solid'} : {outline: 'none'}} className="sideWall" src={sideWall} alt="side-wall" />,
    "label-clear" : <div onDragStart={preventDragHandler} style={currentFocusedComponent.index == index && currentFocusedComponent.layoutID == layoutID ? {outline: '0.2em rgb(140, 202, 140) solid'} : {outline: 'none'}} className="labelClear" src={sideWall}>{labelInfo}</div>,
    "label-filled" : <div onDragStart={preventDragHandler} style={currentFocusedComponent.index == index && currentFocusedComponent.layoutID == layoutID ? {outline: '0.2em rgb(140, 202, 140) solid'} : {outline: 'none'}} className="labelFilled" src={sideWall}>{labelInfo}</div>
  
  }

return (type == "booth" || type=="table") && (info != null) ? (
    <div className="draggableItem">
      <button style={stylesheet.button} onClick={onClick}> 
        {info.has_party && filledTypes[type]}
        {!info.has_party && clearedTypes[type]}
      </button>
    </div>
  ) : (
    <div>
        {(type == "booth" || type == "table") && <button style={stylesheet.button} onClick={onClick}>{types[type]}</button>}
        {!(type == "booth" || type == "table") && types[type]}
    </div>
  )
}

export default InnerDraggableBox