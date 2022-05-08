import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
    success: "",
    error: "",
    isloading: false,
    isAdminloading: false,
    token: "",
    isAdmin: false,
};

export const verifyLogin = createAsyncThunk(
    "Login/verify",
    async (data, { getState, dispatch }) => {
        let token = localStorage.getItem("token");
        const response = await fetch("http://localhost:3000/api/verify", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(token),
        });
        const json = await response.json();
        return json;
    }
);

export const verifyAdminRole = createAsyncThunk(
    "Login/verifyAdmin",
    async (data, { getState, dispatch }) => {
        let token = localStorage.getItem("token");
        const response = await fetch("http://localhost:3000/api/verifyAdmin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(token),
        });
        const json = await response.json();
        return json;
    }
);
const UserSlice = createSlice({
    name: "auth",
    initialState: initialstate,
    reducers: {
        setUser(state, action) {
            state.token = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
        },
        setSuccess(state, action) {
            state.success = action.payload;
        }
        
    },
    extraReducers: {
        //verifica si el login es correcto
        [verifyLogin.pending]: (state, action) => {
            state.isloading = true;
        },
        [verifyLogin.fulfilled]: (state, action) => {
            state.isloading = false;
            state.success = action.payload.success;
            state.token = action.payload.token;
            state.error = '';
        },
        [verifyLogin.rejected]: (state, action) => {
            state.isloading = false;
            state.error = action.payload;
        },

        //verifica si el usuario es administrador
        [verifyAdminRole.pending]: (state, action) => {
            state.isAdminloading = true;
        },
        [verifyAdminRole.fulfilled]: (state, action) => {
            state.isAdminloading = false;
            state.isAdmin = action.payload.isAdmin;
            state.error = '';
        },
        [verifyAdminRole.rejected]: (state, action) => {
            state.isAdminloading = false;
            state.error = action.payload;
        }
    }
});

export const {setUser , setError , setSuccess}  = UserSlice.actions;

export default UserSlice.reducer;