import React, { useEffect, useState } from 'react'
import './Expenses.css'
import Form from '../components/expenseComp/Form'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase-config/FirebaseConfig';
import ExpenseItem from '../components/expenseComp/ExpenseItem';
import EditModal from '../components/edit/EditModal';

const Expense = (props) => {

    const [formOpen, setFormOpen] = useState(false);

    const [isDeleted, setIsDeleted] = useState(false);

    const [edit,setEdit]=useState(false);

    const [expenseList, setExpenseList] = useState([]);
    const expenseRef = collection(db, "expenses");

    useEffect(() => {
        const queryMessage = query(expenseRef, orderBy('createAt', 'desc'));
        const unsub = onSnapshot(queryMessage, (querySnapshot) => {
            const newExpenseList = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setExpenseList(newExpenseList);
        }
        );
        return () => unsub();
    }, [isDeleted])

    const onCancel = () => {
        setFormOpen(false);
    }

    const onSubmit = () => {
        setFormOpen(false);
    }

    const editHandler=()=>{
        setEdit(false);
    }

    const editStatus = (id,title,amount,date) => {
        setEdit(true);
        console.log(id);
        console.log(title);
        console.log(amount); //I left here will do it later
        console.log(date);
      };

    return (
        <>
        {edit && <EditModal title={"hi"} message={"error.message"} onConfirm={editHandler} />}
        <section className='expense'>
            <button className='add-expense-but' onClick={() => { setFormOpen(true) }} >Add Expense</button>
            {
                formOpen && <div className='expense-form'>
                    <Form onCancel={onCancel} onSubmit={onSubmit} />
                </div>
            }
            <div className='expense-chart'>
                {/* ...will do it later */}
            </div>

            <div className='expense-lists'>
                <ul className='expenses-list'>
                    {expenseList.map(expense => (<ExpenseItem key={expense.id} id={expense.id} title={expense.title} amount={expense.amount} date={expense.date} setIsDeleted={setIsDeleted} onEditStatusChanged={(id,title,amount,date)=>editStatus(id,title,amount,date)} />))}
                </ul>
            </div>

        </section>
        </>
    )
}

export default Expense