import React from 'react';
let expenseDate = ({date}) => {
    const month=date.toLocaleString('en-US',{month:'long'});
    const year=date.getFullYear ();
    const day=date.toLocaleString('en-US',{day:'2-digit'});

    return(
        <div className='expense-item__date'>
        <div className='date'>{ month }</div>
        <div className='date'>{ year }</div>
        <div className='date'>{ day }</div>
    </div>
    );
}

export default expenseDate;