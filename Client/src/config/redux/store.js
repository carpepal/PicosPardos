import { getDefaultMiddleware } from '@reduxjs/toolkit';
import {configureStore} from '@reduxjs/toolkit';
import RootReducer from '../../Services/reducers/rootReducer.js';

export const store = configureStore({
    reducer: RootReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ['form/initForm', 'form/changeValue', "form/setErrors", "form/validateForm"]
        }
    })
})