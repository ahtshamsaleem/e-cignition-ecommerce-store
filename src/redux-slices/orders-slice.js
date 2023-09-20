import { createSlice, createAsyncThunk } from '@reduxjs/toolkit' 
import axios from 'axios'




export const createOrder = createAsyncThunk('orders/createOrder', async (order) => {
    
    axios.post('https://e-cignition-ecommerce-store-default-rtdb.firebaseio.com/orders.json',  order)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
})





export const fetchOrders = createAsyncThunk('orders/fetchOrders', async () => {
    const orders = axios.get('https://e-cignition-ecommerce-store-default-rtdb.firebaseio.com/orders.json')
    .then((response) => {
        
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
    reducers:{},

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





// export const { createOrder } = ordersSlice.actions;


export default ordersSlice.reducer;