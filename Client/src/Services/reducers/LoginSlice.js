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

const LoginFormSlice = createSlice({
    name: "login-form",
    initialState: {
        success: false,
        loginForm:{}
    },
    reducers: {
        onChangeLoginForm: (state, action) => {
            state.loginForm = {
                ...state.loginForm,
                ...action.payload
            }
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(RegisterFetch.fulfilled,(state,action)=>{
            state.loginForm = {
                ...state.loginForm,
                success: true
            }
        })
    }

});

export const{onChangeLoginForm} = LoginFormSlice.actions;
export default LoginFormSlice.reducer;