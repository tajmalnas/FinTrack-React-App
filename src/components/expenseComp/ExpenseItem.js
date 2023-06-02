import React from 'react'
import './ExpenseItem.css'
import Card from './Card'
import ExpenseDate from './ExpenseDate'
import 'primeicons/primeicons.css';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase-config/FirebaseConfig';

const ExpenseItem = (props) => {

  const onDelete = async (id) => {
    await deleteDoc(doc(db, "expenses", id));
    props.setIsDeleted(true);
  };

  const onEdit = (id,title,amount,date) => {
    console.log(id);
    props.onEditStatusChanged(id,title,amount,date);
  }

  return (
    <li>
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <h2>{props.title}</h2>
        <div className='expense-item__price'>Rs {props.amount}</div>
        <div className='expense-item-butt'>
          <button className="butt1" onClick={()=>onDelete(props.id)}><i className="pi pi-trash" style={{ fontSize: '1.25rem' ,color:'darkred' }}></i></button>
          <button className="butt2" onClick={()=>onEdit(props.id,props.title,props.amount,props.date)}><i className="pi pi-user-edit" style={{ fontSize: '1.25rem',color:'purple' }}></i></button>
      </div>
    </Card>
    </li>
  )
}

export default ExpenseItem