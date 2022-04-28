import {configureStore} from '@reduxjs/toolkit';
import FormSlice from '../../Services/reducers/FormSlice.js';
import UserSlice from '../../Services/reducers/UserSlice.js';

export const store = configureStore({
    reducer:{
        Forms: FormSlice,
        User: UserSlice
    },
})