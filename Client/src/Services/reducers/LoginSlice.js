import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";

export const RegisterFetch = createAsyncThunk(
    'register/post',
    async (data,{getState,dispatch})=>{
        const response = await fetch('/api/register',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        });
        const json = await response.json();
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
    password:''
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
                registerData:{
                    ...state.registerData,
                    ...action.payload
                }
            }
        },
        setRegisterError: (state, action) => {
            console.log('error',action.payload);
            // if (!action.payload) {
            //     console.log("no error");
            //     return {
            //         ...state,
            //         registerData:{
            //             ...state.registerData,
            //             error:''
            //         }
            //     }
            // }
            return {
                ...state,
                registerData:{
                    ...state.registerData,
                    error:action.payload
                }
            }
        },
        setLoginData: (state, action) => {
            state.loginData = action.payload;
        },
        setSuccess: (state, action) => {
            state.success = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setRegister: (state, action) => {
            state.register = action.payload;
        },
        setLogin: (state, action) => {
            state.login = action.payload;
        }
    },
    extraReducers: {
        [RegisterFetch.fulfilled]: (state, action) => {
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
        }
    }
});

export const {
    setRegisterData,
    setRegisterError,
    setLoginData,
    setSuccess,
    setError,
    setLoading,
    setRegister,
    setLogin
} = LoginFormSlice.actions;

export default LoginFormSlice.reducer;
        