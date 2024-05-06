import React, {useState, useEffect} from 'react'
import CloseButton from './CloseButton'
import Seats from './Seats'
import TableType from './TableType'
import SubmitButton from './SubmitButton'
import TableNumber from './TableNumber'
import LabelContent from './LabelContent'
import LabelType from './LabelType'

const Popup = ({currentFocusedComponent, positionMap, setPositionMap, setPopup, setCurrentFocusedComponent}) => {
  
  const [info, setInfo] = useState(positionMap.get(currentFocusedComponent.layoutID)[currentFocusedComponent.index])
  const [isTable, setIsTable] = useState(false);
  const [isLabel, setIsLabel] = useState(false);
  const [seats, setSeats] = useState('');
  const [tableType, setTableType] = useState("");
  const [tableNumber, setTableNumber] = useState("");
  const [content, setContent] = useState('');
  const [type, setType] = useState('');

  useEffect(() => {
    if(info.type =="table" || info.type == "booth"){
      setIsTable(true);
      setSeats(info.seats);
      setTableNumber(info.table_number);
      setTableType(info.type);
    } else if (info.type == 'label-clear' || info.type == 'label-filled'){
      setIsLabel(true);

    }
  }, [])
  
  
  return (
    <div className='popup-outer'>
        <div className="popup-inner">
          <label className="popup-titles">Edit</label>
          <CloseButton setPopup={setPopup}/>
          {isTable && <Seats  seats={seats} setSeats={setSeats}/>}
          {isTable && <TableNumber tableNumber={tableNumber} setTableNumber={setTableNumber}/>}
          {isTable && <TableType setTableType={setTableType}/>}
          {isLabel && <LabelContent content={content} setContent={setContent}/>}
          {isLabel && <LabelType type={type} setLabelType={setType}/>}
          <SubmitButton
              setCurrentFocusedComponent={setCurrentFocusedComponent}
              type={info.type}
              seats={seats}
              tableNumber={tableNumber}
              tableType={tableType}
              content={content}
              labelType={type}
              setPositionMap={setPositionMap} 
              positionMap={positionMap} 
              layoutID={currentFocusedComponent.layoutID}
              index={currentFocusedComponent.index}
              setPopup={setPopup}
            />
        </div>
    </div>
  )
}

export default Popup