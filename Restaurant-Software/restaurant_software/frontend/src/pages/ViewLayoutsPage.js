import React from 'react'
import '../styles/TablesPage.css'
import TableLayoutParent from '../components/ViewLayoutsComponents/TableLayoutParent'

const stylesheet = {
  mainDiv:{
    overflow: 'hidden',
    width: `100vw`,
    height: `100vh` 
  }
};

const MainPage = () => {
  return (
    <div style={stylesheet.mainDiv}>
      <TableLayoutParent />
    </div>
  )
}

export default MainPage