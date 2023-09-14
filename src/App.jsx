import { Home } from "./components";
import { Routes, Route } from 'react-router-dom'
import Cart from "./components/Cart/Cart";
import Checkout from './components/Checkout/Checkout'
import Flavors from "./components/Products/Flavors";
import SignIn from "./components/Auth/SignIn/SignIn";
import SignUp from "./components/Auth/SignUp/SignUp";



const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/checkout" element={<Checkout />}/>
        <Route path="/flavors" element={<Flavors />}/>
        <Route path="/sign-in" element={<SignIn />}/>
        <Route path="/sign-up" element={<SignUp />}/>
      </Routes>
    </>
    
    
  );
};

export default App;
