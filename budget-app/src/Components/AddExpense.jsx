import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { add_expense } from "../redux/states/budgetSlice";

export default function AddExpense() {
  const dispatch = useDispatch();
  const spent = localStorage.getItem("spent")
  const budget = JSON.parse(localStorage.getItem("budget"))
  const [name, setName] = useState();
  const [cost, setCost] = useState();
  const expense = {
    id: 0,
    name: "",
    cost: 0,
  };

  const onSave = () => {
    if(spent > budget){
      alert("Sınır aşıldı. Lütfen bütçenizi arttırın.")
    }else{
      if(name !== "null" && cost >0){
        const copy = expense;
        copy.id = uuidv4();
        copy.name = name;
        copy.cost = parseInt(cost);
        dispatch(add_expense(copy));
      }else{
        alert("Lütfen Harcama ismini ya da tutarını kontrol edin")
      }

      //document.getElementById("expense").reset();
    }

  };
  return (
    <div className="add-section">
      <h2>Add Expense Here</h2>
      <div>
        <form id="expense">
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="me-3"
            placeholder="Expense Name"
          />
          <input
            onChange={(e) => {
              setCost(e.target.value);
            }}
            type="number"
            placeholder="Price"
          />
          <span style={{ fontSize: "25px" }}>$</span>
        </form>
      </div>
      <button 
        onClick={() => {
          onSave();
        }}
        className="btn btn-primary mt-2 mb-2"
      >
        Save
      </button>
    </div>
  );
}
