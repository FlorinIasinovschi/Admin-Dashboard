import React from 'react'
import './topbar.scss';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';

export default function Topbar() {
  return (
    <div>
      <div className="navbar">
        <div className="left">
          <div className="wrapper">
            <h2>Admin Dashboard</h2>
          </div>
        </div>
        <div className="right">
          <div className="icon-wrapper">
            <div className="notification-container">
              <NotificationsNoneIcon className='notification-icon' />
              <span id='notification-num'>3</span>
            </div>
            <div className="language-container">
              <LanguageIcon className='language-icon' />

            </div>
            <div className="settings-container">
              <SettingsIcon className='settings-icon' />

            </div>
            <div className="profile-image">
              <img src="/images/icon-img.jpg" alt="profile-image" />
            </div>


          </div>
        </div>
      </div>

    </div>
  )
}
