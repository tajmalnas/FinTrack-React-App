import React from 'react'
import './ExpenseItem.css'
import Card from './Card'
import ExpenseDate from './ExpenseDate'
import 'primeicons/primeicons.css';

const ExpenseItem = (props) => {
  return (
    <li>
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <h2>{props.title}</h2>
        <div className='expense-item__price'>Rs {props.amount}</div>
        <div className='expense-item-butt'>
          <button className="butt1" onClick={props.onDelete}><i className="pi pi-trash" style={{ fontSize: '1.25rem' ,color:'darkred' }}></i></button>
          <button className="butt2" onClick={props.onEdit}><i className="pi pi-user-edit" style={{ fontSize: '1.25rem',color:'purple' }}></i></button>
      </div>
    </Card>
    </li>
  )
}

export default ExpenseItem