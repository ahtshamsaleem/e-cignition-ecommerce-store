import { createSlice, createAsyncThunk } from '@reduxjs/toolkit' 
import axios from 'axios'




export const createOrder = createAsyncThunk('orders/createOrder', async (order) => {
    
    axios.post('https://e-cignition-ecommerce-store-default-rtdb.firebaseio.com/orders.json',  order)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
})





export const fetchOrders = createAsyncThunk('orders/fetchOrders', async (email, {getState}) => {
    let url = `https://e-cignition-ecommerce-store-default-rtdb.firebaseio.com/orders.json?orderBy="email"&equalTo="${email}"`
    if (getState().auth.isAdmin) {
        url = `https://e-cignition-ecommerce-store-default-rtdb.firebaseio.com/orders.json`;
    }
    const orders = axios.get(url)
    .then((response) => {
        console.log(response)
        return response.data;
    })
    
    return orders;
})
















const initialState = {
    orders: [],
    isLoading: false
}



const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers:{
        removeAllOrders : (state) => {
            state.orders = [];
        }
    },

    extraReducers: {
        [createOrder.pending] : (state) => {
            state.isLoading = true;
        },

        [createOrder.fulfilled] : (state) => {
            state.isLoading = false;
        },

        [createOrder.rejected] : (state) => {
            state.isLoading = false;
        },



        [fetchOrders.pending] : (state) => {
            state.isLoading = true;
        },

        [fetchOrders.fulfilled] : (state, action) => {
            
            state.isLoading = false;
        
            const ordersArr = Object.values(action.payload)

            for (let item of ordersArr) {
                let totalQuantity=0;
               
                item.orderedProducts?.forEach((item) => {
                        totalQuantity = totalQuantity + item.quantity;
                })




                const order = {
                    orderId: Math.random(),
                    numberOfProducts: totalQuantity,
                    totalPrice: item.totalPrice,
                    deliveryStatus: 'pending'

                }
                
                state.orders.push(order)
            }
            
        },

        [fetchOrders.rejected] : (state) => {
            state.isLoading = false;
        }
    }

})




export const {removeAllOrders} = ordersSlice.actions;


export default ordersSlice.reducer;