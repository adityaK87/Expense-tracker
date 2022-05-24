import React ,{useState} from 'react';
import './expenseForm.css';
const ExpenseForm = ({onSaveExpenseData}) => {

    const [enteredTitle,setEnteredTitle]=useState(""); 
    const [enteredAmount,setEnteredAmount]=useState("");
    const [enteredDate,setEnteredDate]=useState("");

    const titleChangeHandler = (e) => { // this function executes/runs when title changes.
        setEnteredTitle(e.target.value)
    };

    const amountChangeHandler = (e) =>{ // this function executes/runs when amount changes.
        setEnteredAmount(e.target.value)
    };

    const dateChangeHandler = (e) =>{ // this function executes/runs when date changes.
        setEnteredDate(e.target.value)
    };

     const submitHandler = (e) =>{  // this function executes/runs when we submit the form.
         e.preventDefault();

         const expenseData={  // object containing title, amount, date.
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate) ,
            
         }
         
        onSaveExpenseData(expenseData);  // this function is declared somewhere else. But, used here for passing data from this compenent/child (expenseForm.js)
        // to parent component(newExpenses.js)

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

        console.log(expenseData);
     };
    return(
        <form onSubmit={(e)=>{submitHandler(e)}}>
            <div className='new-expense__controls'>

                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={(e)=>{titleChangeHandler(e)}} required/>
                </div>

                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={(e)=>{amountChangeHandler(e)}} required/>
                </div>

                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" value={enteredDate} onChange={(e)=>{dateChangeHandler(e)}}  />
                </div>

            </div>
            <div className='new-expense__action'>
                    <button type='submit'> Add Expense</button> 
            </div>
        </form>
    );
}
export default ExpenseForm;