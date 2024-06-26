import React from 'react'
import '../styles/TablesPage.css'
import TableLayoutParent from '../components/ManageLayoutsComponents/TableLayoutParent'
import '../styles/LoginPage.css'
import '../styles/LayoutPages.css'

const stylesheet = {
  mainDiv:{
    overflow: 'hidden',
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