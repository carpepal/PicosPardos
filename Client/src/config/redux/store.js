import {configureStore} from '@reduxjs/toolkit';
import FormSlice from '../../Services/reducers/FormSlice.js';
import UserSlice from '../../Services/reducers/UserSlice.js';
import ProductsSlice from '../../Services/reducers/ProductsSlice.js';

export const store = configureStore({
    reducer:{
        Forms: FormSlice,
        auth: UserSlice,
        products: ProductsSlice
    },
})