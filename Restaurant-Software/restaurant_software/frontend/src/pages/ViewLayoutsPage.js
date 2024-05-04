import React from 'react'
import '../styles/TablesPage.css'
import TableLayoutParent from '../components/ViewLayoutsComponents/TableLayoutParent'

const stylesheet = {
  mainDiv:{
    overflow: 'hidden'
  }
};

const MainPage = () => {
  return (
    <div style={stylesheet.mainDiv} className="page">
      <TableLayoutParent />
    </div>
  )
}

export default MainPage