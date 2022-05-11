import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

const postOrders = createAsyncThunk("carrito/postOrder", async (pedido) => {
    const response = await fetch("/api/public/pedidos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            product: pedido.lista,
            estado: "pendiente",
        }),
    }).then((res) => res.json()).then((data) => console.log(data));
});


const CarritoSlice = createSlice({
    name: "carrito",
    initialState: {
        lista: [],
        total: 0,
        loading: false,
        error: null
    },
    reducers: {
        addProducto: (state, action) => {
            let product = state.lista.find(producto => producto._id === action.payload._id);
            if(product){
                state.lista.map(producto => {if(producto._id === action.payload._id){producto.cantidad += 1}});
            }else{
                state.lista.push({...action.payload, cantidad: 1});
            }
        },
        removeProducto: (state, action) => {
            let product = state.lista.find(producto => producto._id === action.payload._id);
            if(product){
                product.cantidad -= 1;
                if(product.cantidad === 0){
                    state.lista = state.lista.filter(producto => producto._id !== action.payload._id);
                }
            }
        },
        clearLista: (state) => {
            state.lista= [];
        },
        getProductCount: (state) => {
            let count = 0;
            state.lista.forEach(producto => {
                count += producto.cantidad;
            }
            );
            state.total = count;
        },
        setLoading: (state, action) => {
            state.loading= action.payload;
        },
        setError: (state, action) => {
            state.error= action.payload;
        },
        setLista: (state, action) => {
            state.lista= action.payload;
        },
        setTotal: (state, action) => {
            state.total= action.payload;
        },
    },
    extraReducers: {
        [postOrders.fulfilled]: (state, action) => {
            state.lista= [];
            state.total= 0;
        },
        [postOrders.rejected]: (state, action) => {
            state.error= action.payload;
        },
    }

});

export const { addProducto, removeProducto, clearLista, setLoading, setError, setLista, setTotal } = CarritoSlice.actions;
export default CarritoSlice.reducer;