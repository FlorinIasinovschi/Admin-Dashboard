import React from 'react'
import './widgetSm.scss';
import { Visibility, VisibilityOff } from '@mui/icons-material';


export default function WidgetSm() {
  return (
    <div className='widgetSm-container'>
      <h3 className="title">New Join Members</h3>
      <div className="people-container">
        <div className="person-container">
          <img src="/images/person-1.jfif" alt="profile-image" className="profile-img" />
          <div className="info">
            <span className="name">Ray Jackson</span>
            <span className="job">Software Engineer</span>
          </div>
          <button className="display">
            {<Visibility class="eye-icon" color="red" />} Display</button>
        </div>
      </div>


      <div className="people-container">
        <div className="person-container">
          <img src="/images/person-1.jfif" alt="profile-image" className="profile-img" />
          <div className="info">
            <span className="name">Ray Jackson</span>
            <span className="job">Software Engineer</span>
          </div>
          <button className="display">
            {<Visibility class="eye-icon" color="red" />} Display</button>
        </div>
      </div>



      <div className="people-container">
        <div className="person-container">
          <img src="/images/person-1.jfif" alt="profile-image" className="profile-img" />
          <div className="info">
            <span className="name">Ray Jackson</span>
            <span className="job">Software Engineer</span>
          </div>
          <button className="display">
            {<Visibility class="eye-icon" color="red" />} Display</button>
        </div>
      </div>



      <div className="people-container">
        <div className="person-container">
          <img src="/images/person-1.jfif" alt="profile-image" className="profile-img" />
          <div className="info">
            <span className="name">Ray Jackson</span>
            <span className="job">Software Engineer</span>
          </div>
          <button className="display">
            {<Visibility class="eye-icon" color="red" />} Display</button>
        </div>
      </div>

    </div>
  )
}
