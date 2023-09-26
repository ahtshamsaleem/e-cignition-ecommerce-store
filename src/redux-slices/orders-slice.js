import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const punchOrderNumber = createAsyncThunk(
    'orders/punchOrderNumber',
    async (s, { getState }) => {
        const oldOrderNumber = getState().orders.orderNumber;

        const newOrderNumber = oldOrderNumber + 1;
        const orderNumber = {
            orderNumber: newOrderNumber,
        };
        axios
            .post(
                'https://e-cignition-ecommerce-store-default-rtdb.firebaseio.com/orderNumber.json',
                orderNumber
            )
            .then((res) => res)
            .catch((err) => err);
    }
);

export const getOrderNumber = createAsyncThunk(
    'orders/getOrderNumber',
    async () => {
        const orderNumber = axios
            .get(
                'https://e-cignition-ecommerce-store-default-rtdb.firebaseio.com/orderNumber.json'
            )
            .then((res) => res.data)
            .catch((err) => err);

        return orderNumber;
    }
);

export const createOrder = createAsyncThunk(
    'orders/createOrder',
    async (order) => {
        axios
            .post(
                'https://e-cignition-ecommerce-store-default-rtdb.firebaseio.com/orders.json',
                order
            )
            .then((res) =>res)
            .catch((err) => err);
    }
);

export const fetchOrders = createAsyncThunk(
    'orders/fetchOrders',
    async (email, { getState }) => {
        let url = `https://e-cignition-ecommerce-store-default-rtdb.firebaseio.com/orders.json?orderBy="email"&equalTo="${email}"`;
        if (getState().auth.isAdmin) {
            url = `https://e-cignition-ecommerce-store-default-rtdb.firebaseio.com/orders.json`;
        }
        const orders = axios.get(url).then((response) => {
            return response.data;
        });

        return orders;
    }
);

const initialState = {
    orders: [],
    isLoading: false,
    orderNumber: 100,
};

const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        removeAllOrders: (state) => {
            state.orders = [];
        },
    },

    extraReducers: {
        [createOrder.pending]: (state) => {
            state.isLoading = true;
        },

        [createOrder.fulfilled]: (state) => {
            state.isLoading = false;
        },

        [createOrder.rejected]: (state) => {
            state.isLoading = false;
        },

        [fetchOrders.pending]: (state) => {
            state.isLoading = true;
        },

        [fetchOrders.fulfilled]: (state, action) => {
            state.isLoading = false;

            const ordersArr = Object.values(action.payload);

            for (let item of ordersArr) {
                let totalQuantity = 0;

                item.orderedProducts?.forEach((item) => {
                    totalQuantity = totalQuantity + item.quantity;
                });

                
                const order = {
                    orderId: `EC-${item.orderId}`,
                    numberOfProducts: totalQuantity,
                    totalPrice: item.totalPrice,
                    deliveryStatus: 'pending',
                    contactInfo: item.contactInfo,
                    orderedProducts: item.orderedProducts,
                };

                state.orders.push(order);
            }
        },

        [fetchOrders.rejected]: (state) => {
            state.isLoading = false;
        },

        [getOrderNumber.fulfilled]: (state, action) => {
            const orderNumberArr = Object.values(action.payload);

            state.orderNumber =
                orderNumberArr[orderNumberArr.length - 1].orderNumber;
        },
    },
});

export const { removeAllOrders } = ordersSlice.actions;

export default ordersSlice.reducer;
