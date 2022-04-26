import { combineReducers } from "@reduxjs/toolkit";  
import LoginFormSlice  from "../../Services/reducers/LoginSlice.js";


const RootReducer = combineReducers({
    form: LoginFormSlice
})


export default RootReducer