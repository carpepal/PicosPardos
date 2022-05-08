import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import {setUser , setSuccess} from '../reducers/UserSlice.js';

export const RegisterFetch = createAsyncThunk(
    'register/post',
    async (data,{getState,dispatch})=>{
        const response = await fetch('http://localhost:3000/api/register',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        });
        const json = await response.json();
        if(json.token){
            dispatch(setUser(json.token))
            dispatch(setSuccess(true));
        };
        return json;
    }
)

export const LoginFetch = createAsyncThunk(
    'login/post',
    async (data , {getState,dispatch})=>{
        const response = await fetch('http://localhost:3000/api/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        });
        const json = await response.json();
        if(json.token){
            dispatch(setUser(json.token))
            dispatch(setSuccess(true));
        };
        return json;
    }
)

const initialRegisterData = {
    name:'' ,
    username:'',
    password:'' , 
    email:'' , 
    phone:'' , 
    error:''
}

const initialData = {
    username:'',
    password:'',
    error:'',
}

const LoginFormSlice = createSlice({
    name: "forms",
    initialState: {
        success:'',
        error:'',
        loading:false,
        register:false,
        login:false,
        registerData:initialRegisterData,
        loginData:initialData
    },
    reducers: {
        setRegisterData: (state, action) => {
            return {
                ...state,
                [action.payload.name]:{
                    ...state[action.payload.name],
                    ...action.payload.data
                }
            }
        },
        setRegisterError: (state, action) => {
            console.log('error',action.payload);
            return {
                ...state,
                [action.payload.name]:{
                    ...state[action.payload.name],
                    error:action.payload.data
                }
            }
        },
    },
    extraReducers: {
        //add async thunk for register
        [RegisterFetch.fulfilled]: (state, action) => {
            localStorage.setItem('token',action.payload.token);
            state.success = action.payload.message;
            state.loading = false;
            state.register = false;
            state.registerData = initialRegisterData;
            state.error = '';
        },
        [RegisterFetch.pending]: (state, action) => {
            state.loading = true;
        },
        [RegisterFetch.rejected]: (state, action) => {
            state.error = action.error;
            state.loading = false;
            state.register = false;
        },
        //add async thunk for login
        [LoginFetch.fulfilled]: (state, action) => {
            localStorage.setItem('token',action.payload.token);
            state.success = action.payload.message;
            state.loading = false;
            state.login = false;
            state.loginData = initialData;
            state.error = '';

        },
        [LoginFetch.pending]: (state, action) => {
            state.loading = true;
        },
        [LoginFetch.rejected]: (state, action) => {
            state.error = action.error;
            state.loading = false;
            state.login = false;
        }


    }
});

export const {
    setRegisterData,
    setRegisterError,
} = LoginFormSlice.actions;

export default LoginFormSlice.reducer;
        