import {configureStore} from "@reduxjs/toolkit"
import reducer from "./states/budgetSlice"



export const store = configureStore({
    reducer:{
        budget:reducer
    }
})