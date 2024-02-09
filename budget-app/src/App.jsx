import React, { useState } from "react";
import "./App.css";
import ProductItem from "./Components/ProductItem";
import {useSelector} from "react-redux"
import BudgetInfo from "./Components/BudgetInfo";
import AddExpense from "./Components/AddExpense";

export default function App() {
  const expenses = useSelector((state)=>state.budget.expenses)





  return (
    <>
      <h2> My Budget Planner</h2>
      {/*  Budget info*/}
      <BudgetInfo expenses={expenses}  />
      {/* Expenses Table Div */}
      <div className="shopping-container">
        <div className="container text-center">
          <h2 style={{textAlign:"start",marginBottom:"10px"}}>Expenses</h2>
          {expenses.map((item) => (
            <>
              <ProductItem key={item.id} item={item} />
            </>

          ))}
        </div>
      </div>
      <AddExpense/>
    </>
  );
}
