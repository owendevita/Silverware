import React from 'react'
import LogoutButton from './LogoutButton'
import SettingsPage from '../../styles/SettingsPage.css'

const SettingsParent = () => {
  return (
    <div>
      <h1 className="settings-title">Settings</h1>
      <LogoutButton />
    </div>
  )
}

export default SettingsParent