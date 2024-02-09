import { createSlice } from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid'


const expensesFromStorage = JSON.parse(localStorage.getItem("expenses")) || [
    { id: uuidv4(), name: 'Shopping', cost: 50 },
    { id: uuidv4(), name: 'Holiday', cost: 300 },
    { id: uuidv4(), name: 'Transportation', cost: 70 },
    { id: uuidv4(), name: 'Fuel', cost: 40 },
    { id: uuidv4(), name: 'Child Care', cost: 500 },
]
const budgetFromStorage = localStorage.getItem("budget") !== null ? JSON.parse(localStorage.getItem("budget")): 20000

const initialBudget={
    budget:budgetFromStorage,
    expenses:expensesFromStorage
}

const budgetSlice = createSlice({
    name:"budget",
    initialState : initialBudget,
    reducers:{
        add_expense : (state,action) =>{ // burada expense'in kendisini yolluyoruz
            state.expenses.push(action.payload)
            localStorage.setItem("expenses",JSON.stringify(state.expenses.map(item=>item)))
        },
        remove_expense : (state,action) =>{ // burada id yolluyoruz
          state.expenses = state.expenses.filter(expense => expense.id !== action.payload)
          localStorage.setItem("expenses",JSON.stringify(state.expenses.map(item=>item)))

        },
        set_budget : (state,action) =>{
            state.budget =  action.payload
            localStorage.setItem("budget",JSON.stringify(state.budget))
        },
        
    }
})

export const {add_expense,remove_expense,set_budget}=budgetSlice.actions;
export  default budgetSlice.reducer;