import React from 'react'
import booth from '../../../static/assets/booth.png'
import table from '../../../static/assets/table.png'
import divider from '../../../static/assets/divider.png'
import sideWall from '../../../static/assets/side-wall.png'
import backWall from '../../../static/assets/back-wall.png'

const InnerDraggableBox = ({type, currentFocusedComponent, layoutID, index, labelInfo}) => {

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

return type == "booth" || type=="table" ? (
    <div className="draggableItem">
        {types[type]}
    </div>
  ) : (
    <div>
        {types[type]}
    </div>
  )
}

export default InnerDraggableBox