import {createSlice , createAsyncThunk} from '@reduxjs/toolkit';

export const getProducts = createAsyncThunk('Products/getProducts', async () => {
    const response = await fetch('/api/public/productos');
    const json = await response.json();
    return json;
});

const productsSlice = createSlice({
    name:'products',
    initialState: {
        isLoading: true,
        products: [],
        error: null,
    },
    reducers: {
        setProducts(state, action) {
            state.products = action.payload.productos;
        },
        setLoading(state, action) {
            state.isLoading = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
        }
    },
    extraReducers: {
        [getProducts.fulfilled]: (state, action) => {
            state.products = action.payload.productos;
            state.isLoading = false;
        },
        [getProducts.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getProducts.rejected]: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
    
});

export const {setProducts, setError , setLoading } = productsSlice.actions;

export default productsSlice.reducer;