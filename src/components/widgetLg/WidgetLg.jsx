import React from 'react'
import './widgetLg.scss'

const StatusBtn = ({ type }) => {
  return (type == "Approved" ? <button className={"btn-status " + type} > {type}</button > :
    type == "Pending" ? <button className={"btn-status " + type}>{type}</button> :
      type == "Declined" ? <button className={"btn-status " + type}>{type}</button> : null)



}

export default function WidgetLg() {
  return (
    <div className='widgetLg-container'>
      <h3 className="title">Latest transactions</h3>
      <table className='transactions-table'>
        <tr className='main-row'>
          <td>Customer</td>
          <td>Date</td>
          <td>Amount</td>
          <td>Status</td>
        </tr>

        <tr className='transaction-unit'>
          <td className='user'><img src="/images/person-2.jfif" alt="" /> Jhon Warwick</td>
          <td>2 June 2021</td>
          <td className='amount'>$158.85</td>
          <td className='btn-cell'>
            <StatusBtn type="Approved" />
          </td>
        </tr>


        <tr className='transaction-unit'>
          <td className='user'><img src="/images/person-2.jfif" alt="" /> Jhon Warwick</td>
          <td>2 June 2021</td>
          <td className='amount'>$158.85</td>
          <td className='btn-cell'>
            <StatusBtn type="Pending" />
          </td>
        </tr>


        <tr className='transaction-unit'>
          <td className='user'><img src="/images/person-2.jfif" alt="" /> Jhon Warwick</td>
          <td>2 June 2021</td>
          <td className='amount'>$158.85</td>
          <td className='btn-cell'>
            <StatusBtn type="Declined" />
          </td>
        </tr>



        <tr className='transaction-unit'>
          <td className='user'><img src="/images/person-2.jfif" alt="" /> Jhon Warwick</td>
          <td>2 June 2021</td>
          <td className='amount'>$158.85</td>
          <td className='btn-cell'>
            <StatusBtn type="Approved" />
          </td>
        </tr>






      </table>
    </div>
  )
}
