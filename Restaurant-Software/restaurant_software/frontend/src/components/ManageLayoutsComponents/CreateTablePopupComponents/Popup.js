import React, {useState} from 'react'
import CloseButton from './CloseButton'
import Seats from './Seats'
import TableType from './TableType'
import SubmitButton from './SubmitButton'
import TableNumber from './TableNumber'

const Popup = ({setPopup, setPositionMap, positionMap, layoutID}) => {
  
  const [seats, setSeats] = useState('');
  const [tableType, setTableType] = useState("");
  const [tableNumber, setTableNumber] = useState("");

  
  return (
    <div className='popup-outer'>
        <div className="popup-inner">
          <label className="popup-titles">Create New Table</label>
          <CloseButton setPopup={setPopup}/>
          <Seats setSeats={setSeats}/>
          <TableNumber setTableNumber={setTableNumber}/>
          <TableType setTableType={setTableType}/>
          <SubmitButton
              seats={seats}
              tableNumber={tableNumber}
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