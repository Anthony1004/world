import React, { useState } from 'react';
import Header from './components/Header';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Visualization from './components/Visualization';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [visualizationData, setVisualizationData] = useState([]);

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, expense]);
    updateVisualizationData([...expenses, expense]);
  };

  const updateVisualizationData = (data) => {
    const visualizationData = data.map((expense) => ({
      date: expense.date,
      amount: parseFloat(expense.amount),
    }));
  
    console.log(visualizationData); // Add this line to log the visualization data
  
    setVisualizationData([...visualizationData]);
  };

  return (
    <div>
      <Header />
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseList expenses={expenses} />
      <Visualization data={visualizationData} />
    </div>
  );
};

export default App;
