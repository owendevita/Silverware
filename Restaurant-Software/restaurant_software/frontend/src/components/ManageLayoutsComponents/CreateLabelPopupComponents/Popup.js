import React, {useState} from 'react'
import CloseButton from './CloseButton'
import LabelContent from './LabelContent'
import LabelType from './LabelType'
import SubmitButton from './SubmitButton'


const Popup = ({setPopup, setPositionMap, positionMap, layoutID}) => {
  
  const [content, setContent] = useState('');
  const [type, setType] = useState('');


  
  return (
    <div className='popup-outer'>
        <div className="popup-inner">
          <label className="popup-titles">Create New Label</label>
          <CloseButton setPopup={setPopup}/>
          <LabelContent setContent={setContent}/>
          <LabelType setLabelType={setType}/>
          <SubmitButton
              content={content}
              type={type}
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