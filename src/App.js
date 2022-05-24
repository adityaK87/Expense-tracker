 import React,{useEffect, useState} from 'react';
 
 import './App.css';

 import ExpenseItem from './components/expenses/ExpenseItems';
 import NewExpenses from './components/NewExpenses/newExpenses';

let DUMMY__EXPENSE=[

      // {
      //   id:'e1',
      //   title:"school fee",
      //   amount:250,
      //   date: new Date()
      // },
      // {
      //   id:'e2',
      //   title:"car insurence",
      //   amount:500,
      //   date: new Date()
      // },
      // {
      //   id:'e3',
      //   title:"electricity bill",
      //   amount:100,
      //   date: new Date()
      // },
      // {
      //   id:'e4',
      //   title:"room rent",
      //   amount:1000,
      //   date: new Date()
      // }
    ];

 const App = () => {

    const [expense,setExpense] = useState(DUMMY__EXPENSE);


  //  useEffect(() => 
  //  {fetch('http://localhost/sample-api/api/read.php').then(
  //    response =>{ return response.json();}
  //    ).then(
  //     data =>{
  //       console.log(data);
  //       setExpense(data);
  //     }
  //   );
  //     },[]);

  const getExpense=(getEnteredExpenseData)=>{
    // console.log(getEnteredExpenseData)
    setExpense([getEnteredExpenseData,...expense,]);
  }

  return( 
    <div className='app__item'>
      <NewExpenses onGetExpenseData={getExpense} /> 
      {
        expense.map((item) => {
          return <ExpenseItem 
            key={item.id} 
            date={item.date}
            title={item.title}
            amount={item.amount}
          />
        })
      }
    </div>
   );
  }
 export default App;