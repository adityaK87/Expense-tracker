import React from 'react';
import './newExpenses.css';
import ExpenseForm from './expenseForm';

const NewExpenses = ({onGetExpenseData}) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        console.log(enteredExpenseData);
        onGetExpenseData(enteredExpenseData);
    };
    

    return (
       <div className='new-expenses'>
         <ExpenseForm  onSaveExpenseData={saveExpenseDataHandler} />
       </div>
    );
     
}
export default NewExpenses;