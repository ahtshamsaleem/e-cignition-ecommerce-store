import { useEffect } from 'react';
import { Home } from './components';
import { Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Flavors from './components/Products/Flavors';
import SignIn from './components/Auth/SignIn/SignIn';
import SignUp from './components/Auth/SignUp/SignUp';
import MyOrders from './components/Orders/myOrders/MyOrders';
import ProtectedRoute from './ProtectedRoute';

import { useDispatch, useSelector } from 'react-redux';
import { authStateChange } from './authStateChange';
import AdminOrders from './components/Orders/adminOrders/AdminOrders';
import ProductPage from './components/ProductPage/ProductPage';
import Pods from './components/Products/Pods';
import { addToCart, calculatePrice } from './redux-slices/cart-slice';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { products } from './constants';
import { getCartDataDB } from './Utility/getCartDataDB';
import { initDB } from './components/indexedDB';

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        getCartDataDB(initDB, dispatch, addToCart, calculatePrice, products);
        const unsub = authStateChange(dispatch);

        return unsub;
    }, []);

    const isAdmin = useSelector((state) => state.auth.isAdmin);
    let orders = <MyOrders />;

    if (isAdmin) {
        orders = <AdminOrders />;
    } else {
        orders = <MyOrders />;
    }

    return (
        <>
            <ToastContainer />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/flavors' element={<Flavors />} />
                <Route path='/pods' element={<Pods />} />
                <Route path='/sign-in' element={<SignIn />} />
                <Route path='/sign-up' element={<SignUp />} />
                <Route path='/product/:id' element={<ProductPage />} />
                <Route path='/my-orders' element={<ProtectedRoute> {orders} </ProtectedRoute>} />
            </Routes>
        </>
    );
};

export default App;
