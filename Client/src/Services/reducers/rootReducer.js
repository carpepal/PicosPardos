import { combineReducers } from "@reduxjs/toolkit";
import { reducer as FormReducer} from 'redux-form'  


const RootReducer = combineReducers({
    form: FormReducer
})


export default RootReducer