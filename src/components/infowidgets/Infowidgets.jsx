import React from 'react'
import './infowidgets.scss';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';


export default function Infowidgets() {
  return (
    <div className='widgets-wrapper'>
      <div className="container">
        <span className="title">Revenue</span>
        <div className="amount-container">
          <span className="amount">$2,356</span>
          <span className="comparison">+3.6</span>
          <ArrowUpward className="arrow-pos" />
        </div>
        <span className="comparison-subject">Compared to last month</span>
      </div>



      <div className="container">
        <span className="title">Sales</span>
        <div className="amount-container">
          <span className="amount">$22,103</span>
          <span className="comparison">-2.3</span>
          <ArrowDownward className="arrow-neg" />
        </div>
        <span className="comparison-subject">Compared to last month</span>
      </div>




      <div className="container">
        <span className="title">Cost</span>
        <div className="amount-container">
          <span className="amount">$10,460</span>
          <span className="comparison">+3.6</span>
          <ArrowUpward className="arrow-pos" />
        </div>
        <span className="comparison-subject">Compared to last month</span>
      </div>


    </div>
  )
}
