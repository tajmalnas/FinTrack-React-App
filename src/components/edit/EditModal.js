import React from 'react'
import Card from '../expenseComp/Card'
import './EditModal.css'
import { Fragment } from 'react'

const EditModal = (props) => {
    return (
        <Fragment>
            <div className="backdrop" onClick={props.onConfirm} />
            <Card className="modal">
                <header className="header">
                    <h2>Update The Expense</h2>
                </header>
                <div className="content">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" />
                    <label htmlFor="amount">Amount</label>
                    <input type="number" id="amount" />
                    <label htmlFor="date">Date</label>
                    <input type="date" id="date" />
                </div>
                <footer className="actions">
                    <button onClick={props.onConfirm}>Okay</button>
                </footer>
            </Card>
        </Fragment>
    )
}

export default EditModal