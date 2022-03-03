import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setShow(true);
  };

  const [show, setShow] = useState(true);

  function mostrar() {
    setShow(false);
  }

  return (
    <div className="new-expense">
      <button onClick={mostrar}>Add New Expense</button>
      {show === false && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={() => setShow(true)}
        />
      )}
    </div>
  );
};

export default NewExpense;
