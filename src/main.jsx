import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './redux-slices/cart-slice'
import ordersReducer from './redux-slices/orders-slice'
import authReducer from './redux-slices/auth-slice'
import uiReducer from './redux-slices/ui-slice'


const store = configureStore({
    reducer: {
        cart: cartReducer,
        orders: ordersReducer,
        auth: authReducer,
        ui: uiReducer
    }
})


ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
        

);
