import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
    success: "",
    error: "",
    isloading: false,
    token: "",
    isAdmin: false,
};

export const verifyLogin = createAsyncThunk(
    "Login/verify",
    async (data, { getState, dispatch }) => {
        let token = localStorage.getItem("token");
        const response = await fetch("/api/verify", {
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
        const response = await fetch("/api/verifyAdmin", {
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
    name: "user",
    initialState: initialstate,
    reducers: {
        setUser(state, action) {
            state.token = action.payload.token;
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
            state.error = '';
        },
        [verifyLogin.rejected]: (state, action) => {
            state.isloading = false;
            state.error = action.payload;
        },

        //verifica si el usuario es administrador
        [verifyAdminRole.pending]: (state, action) => {
            state.isloading = true;
        },
        [verifyAdminRole.fulfilled]: (state, action) => {
            state.isloading = false;
            state.isAdmin = action.payload.isAdmin;
            state.error = '';
        },
        [verifyAdminRole.rejected]: (state, action) => {
            state.isloading = false;
            state.error = action.payload;
        }
    }
});

export const {setUser , setError}  = UserSlice.actions;

export default UserSlice.reducer;