import { combineReducers } from "@reduxjs/toolkit";  
import FormSlice  from "../../Services/reducers/FormSlice.js";


const RootReducer = combineReducers({
    form: FormSlice
})


export default RootReducer