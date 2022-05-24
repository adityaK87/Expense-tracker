// import React, {useState} from 'react';
import React from 'react';
import './ExpenseItem.css'; 
import ExpenseDate from './expenseDate'

const ExpenseItem = ({date, title, amount}) => {

    // const [veryNewTitle,setVeryNewTitle]=useState("");
    // const [newTitle,setNewTitle] = useState(title);
     
    // const clickHandler = () => {
    //     // alert("Changing Title");
    //     setNewTitle(veryNewTitle);
    // }

    //  const changeHandler = (e) =>{
    //     setVeryNewTitle(e.target.value);
    // }
  
    return ( 
        <div
        className='expense-item'>
            {/* <div className='expense-item__date'>{props.date.toISOString()}</div> */}
            <ExpenseDate className='ExpenseDate' date={date} />
            <div className="expense-item__description">
                <h2>{ title }</h2>
            </div>
            <div className="expense-item__price">${amount}</div>
            {/* <input type="text"  value={veryNewTitle} onChange={ (e) =>changeHandler(e)}/>
            <button onClick={() => clickHandler()}>Change Title</button> */}
        </div>
    );
}

export default ExpenseItem; 