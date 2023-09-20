import { Home } from './components';
import { Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Flavors from './components/Products/Flavors';
import SignIn from './components/Auth/SignIn/SignIn';
import SignUp from './components/Auth/SignUp/SignUp';
import MyOrders from './components/Orders/myOrders/MyOrders';
import ProtectedRoute from './ProtectedRoute';
import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { authStateChange } from './authStateChange';



const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const unsub = authStateChange(dispatch);

        return unsub;
    }, []);

    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/flavors' element={<Flavors />} />
                <Route path='/sign-in' element={<SignIn />} />
                <Route path='/sign-up' element={<SignUp />} />
                <Route path='/my-orders' element={<ProtectedRoute> <MyOrders /> </ProtectedRoute>}/>
            </Routes>
        </>
    );
};

export default App;
