import React from 'react'
import './home.scss'
import Infowidgets from '../../components/infowidgets/Infowidgets'
import Chart from '../../components/chart/Chart'
import { userData } from '../../components/data/data'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'

export default function Home() {
  return (
    <div className='home'>
      <Infowidgets />
      <Chart title="User Analytics" data={userData} dataX="month" dataLine="amount" grid />
      <div className="widgets-container">
        <WidgetSm />
        <WidgetLg />
      </div>


    </div>
  )
}
