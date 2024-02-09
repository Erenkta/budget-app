import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import RemainingBudget from "./RemainingBudget";
import { set_budget } from "../redux/states/budgetSlice";


export default function BudgetInfo({expenses}) {
    let budget = useSelector((state)=>state.budget.budget)
    const [editMode,setEditMode] = useState(false);
    const [newBudget,setNewBudget] = useState(budget);

    const spent = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

  localStorage.setItem("spent",spent)

    const dispatch = useDispatch()


  return (
    <div className="budget-container">
      <div className="current-budget">
        <text>Budget ($):</text>
        <input
          type="number"
          readOnly={!editMode}
          value={newBudget}
          onChange={(e) => {setNewBudget(e.target.value)}}
          style={{
            width: "75px",
            margin: "0px 20px 0px 10px",
            backgroundColor: "transparent",
          }}
        />
        {editMode ? (
          <button
            onClick={() => {
            setEditMode(false);
            dispatch(set_budget(newBudget))
            }}
            className="btn btn-success border-black"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => {
              setEditMode(true);
              
            }}
            className="btn btn-primary border-black"
          >
            Edit
          </button>
        )}
      </div>
        <RemainingBudget spent={spent}/>
      <div className="spent-budget">
        <text>Spent ($) : {spent} </text>
      </div>
    </div>
  );
}
