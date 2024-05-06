import React, {useState} from 'react'
import CloseButton from './CloseButton'
import TableType from './TableType'
import SubmitButton from './SubmitButton'

const Popup = ({setPopup, setPositionMap, positionMap, layoutID}) => {
  
  const [seats, setSeats] = useState("");
  const [tableType, setTableType] = useState("");

  
  return (
    <div className='popup-outer'>
        <div className="popup-inner">
          <label className="popup-titles">Create New Wall</label>
          <CloseButton setPopup={setPopup}/>
          <TableType setTableType={setTableType}/>
          <SubmitButton
              tableType={tableType}
              setPositionMap={setPositionMap} 
              positionMap={positionMap} 
              layoutID={layoutID}
              setPopup={setPopup}
            />
        </div>
    </div>
  )
}

export default Popup