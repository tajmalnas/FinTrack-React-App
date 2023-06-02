import React, { useState } from 'react'
import Card from '../expenseComp/Card'
import './EditModal.css'
import { Fragment } from 'react'
import { db } from '../../firebase-config/FirebaseConfig'
import { doc, updateDoc } from 'firebase/firestore';
import { toast } from 'react-toastify'

const EditModal = (props) => {

    const [title, setTitle] = useState(props.title || '');
    const [amount, setAmount] = useState(props.amount || '');
    const [date, setDate] = useState(props.date || '');

    const onUpdated = async (id) => {
        toast.success( "Your Expense Is Updated Now",{
            position: "top-center",
            autoClose: 1500,
        });
        const updatedExpense = doc(db, "expenses", id);
        await updateDoc(updatedExpense, {
            title: title,
            amount: amount,
            date: date,
        })
        console.log(id);
        console.log(title);
        console.log(amount);
        console.log(date);
        props.onConfirm();
    }

    return (
        <Fragment>
            <div className="backdrop" onClick={props.onConfirm} />
            <Card className="modal">
                <header className="header">
                    <h2>Update The Expense</h2>
                </header>
                <div className="content">
                    <label htmlFor="title"  >Title</label>
                    <input type="text" id="title" defaultValue={title} onChange={(e) => setTitle(e.target.value)} />
                    <label htmlFor="amount">Amount</label>
                    <input type="number" id="amount" defaultValue={amount} onChange={(e) => setAmount(e.target.value)} />
                    <label htmlFor="date">Date</label>
                    <input type="date" id="date" defaultValue={date} onChange={(e) => setDate(e.target.value)} />
                </div>
                <footer className="actions">
                    <button onClick={(id) => onUpdated(props.id)}>Okay</button>
                </footer>
            </Card>
        </Fragment>
    )
}

export default EditModal