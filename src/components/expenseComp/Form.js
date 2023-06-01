import React, { useState } from 'react'
import {toast} from 'react-toastify';
import './Form.css'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../../firebase-config/FirebaseConfig';
const Form = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const expenseRef = collection(db, 'expenses');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const submitHandler = async (event) => {
        event.preventDefault();

        if(enteredTitle === '' || enteredAmount === '' || enteredDate === ''){
            // alert('Please enter all the fields');
            toast.error('Please enter all the fields', { position: toast.POSITION.TOP_CENTER });
            return;
        }
      
        await addDoc(expenseRef,{
            title: enteredTitle,
            date: enteredDate,
            amount: +enteredAmount,
            createAt: serverTimestamp(),
            userPhoto: auth.currentUser.photoURL,
            userN: auth.currentUser.displayName,
        });

        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');
        props.onSubmit();
    }

    return (
        <>
            <form onSubmit={submitHandler} >
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                    </div>
                </div>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
                    </div>
                </div>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input type="date" min="2019-01-01" max="2023-12-31" value={enteredDate} onChange={dateChangeHandler} />
                    </div>
                </div>
                <div className='new-expense__actions'>
                    <button type="button" onClick={props.onCancel}>Cancel</button>
                    <button type="submit" >Add button</button>
                </div>
            </form>
        </>
    )
}

export default Form