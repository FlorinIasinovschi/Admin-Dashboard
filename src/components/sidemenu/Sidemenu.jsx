import './sidemenu.scss';
import HomeIcon from '@mui/icons-material/Home';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FeedbackIcon from '@mui/icons-material/Feedback';
import MessageIcon from '@mui/icons-material/Message';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ReportIcon from '@mui/icons-material/Report';


import React from 'react'

export default function Sidemenu() {
  return (
    <div className="menu-container">
      <div className="section">
        <h3>Dashboard</h3>
        <ul className='section-list'>
          <li>
            <HomeIcon className='sections-icon' />
            Home
          </li>
          <li>
            <TimelineIcon className='sections-icon' />
            Analitycs
          </li>
          <li>
            <TrendingUpIcon className='sections-icon' />
            Sales
          </li>

        </ul>
      </div>

      <div className="section">
        <h3>Quick Menu</h3>
        <ul className='section-list'>
          <li>
            <PersonOutlineIcon className='sections-icon' />
            User
          </li>
          <li>
            <StorefrontIcon className='sections-icon' />
            Products
          </li>
          <li>
            <AttachMoneyIcon className='sections-icon' />
            Transaction
          </li>
          <li>
            <BarChartIcon className='sections-icon' />
            Reports
          </li>

        </ul>
      </div>

      <div className="section">
        <h3>Notifications</h3>
        <ul className='section-list'>
          <li>
            <MailOutlineIcon className='sections-icon' />
            Mail
          </li>
          <li>
            <FeedbackIcon className='sections-icon' />
            Feedback
          </li>
          <li>
            <MessageIcon className='sections-icon' />
            Messages
          </li>

        </ul>
      </div>

      <div className="section">
        <h3>Staff</h3>
        <ul className='section-list'>
          <li>
            <WorkOutlineIcon className='sections-icon' />
            Manage
          </li>
          <li>
            <TimelineIcon className='sections-icon' />
            Analitycs
          </li>
          <li>
            <ReportIcon className='sections-icon' />
            Reports
          </li>

        </ul>
      </div>

    </div>
  )
}
