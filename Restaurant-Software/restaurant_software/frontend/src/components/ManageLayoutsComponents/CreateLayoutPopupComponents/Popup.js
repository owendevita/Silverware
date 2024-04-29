import React, {useState} from 'react'
import CloseButton from './CloseButton'
import Name from './Name'
import SubmitButton from './SubmitButton'


const Popup = ({restaurantID, setLayoutList, setHasLayout, layoutID, setLayoutID, setPositionMap, positionMap, setCreateLayoutPopup}) => {
  
  const [name, setName] = useState('');
  const [tableNumber, setTableNumber] = useState("");

  
  return (
    <div className='popup-outer'>
        <div className="popup-inner">
          <label className="popup-titles">Create New Layout</label>
          <CloseButton setCreateLayoutPopup={setCreateLayoutPopup}/>
          <Name setName={setName}/>
          <SubmitButton
              name={name}
              setPositionMap={setPositionMap} 
              positionMap={positionMap} 
              setLayoutID={setLayoutID}
              layoutID={layoutID}
              setCreateLayoutPopup={setCreateLayoutPopup}
              setHasLayout={setHasLayout}
              setLayoutList={setLayoutList}
              restaurantID={restaurantID}
            />
        </div>
    </div>
  )
}

export default Popup