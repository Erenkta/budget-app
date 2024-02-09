import React from "react";
import { useSelector } from "react-redux";

export default function RemainingBudget({spent}) {

    const budget = useSelector((state)=>state.budget.budget)

  return (
    <div className="remain-budget">
      <text>Remaining ($) : {budget-spent}</text>
    </div>
  );
}
