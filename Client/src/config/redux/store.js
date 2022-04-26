import {configureStore} from '@reduxjs/toolkit';
import RootReducer from '../../Services/reducers/rootReducer.js';
import LoginSlice from '../../Services/reducers/LoginSlice.js';

export const store = configureStore({
    reducer:{
        Forms: LoginSlice
    },
})