import React, { Children } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItems from './CartItems';
import { totalPrice } from '../../redux-slices/cart-slice';
import { useNavigate } from 'react-router-dom';
import Checkout from '../Checkout/Checkout';
import { useState } from 'react';
import Header from '../Header';
import {bg1, bg2} from '../../assets/bg/index'
import Footer from '../../sections/Footer';


const Cart = ({ children }) => {
    const totalPriceIs = useSelector((state) => state.cart.totalPrice);
    const navigate = useNavigate();

    return (
        <>
            <Header />
                <div className='w-[100vw]  h-full overflow-hidden bg-gradient-to-r from-[#c1dfc4] to-[#deecdd]'>
                <div className={`h-auto flex flex-row justify-center items-center py-10  overflow-y-auto  `}>
                    <div className='w-[60%] h-auto flex flex-col justify-center items-center mt-10 max-md:w-[95vw]  '>
                        <div className=''>
                            <CartItems />
                        </div>
                        <div className='self-end mr-4 '>
                            <h3 className='font-medium text-black/[0.8] pr-1 items-center justify-end flex '>
                               
                                Shipping Charges : Free
                            </h3>
                            <h3 className='font-semibold py-1 items-center pr-1 justify-end flex '>
                               
                                Total Price : Rs. {totalPriceIs}
                            </h3>
                            <button
                                className='bg-gradient-to-r from-cyan-500 to-teal-400 rounded-xl px-5 py-2 text-white font-semibold shadow-md '
                                onClick={() => {
                                    navigate('/checkout');
                                }}
                            >
                                Proceed to checkout
                            </button>
                        </div>
                        {children}
                    </div>
                </div>
                </div>
                <section className=' bg-black padding-x padding-t pb-8'>
          <Footer />
        </section>
                
            
        </>
    );
};

export default Cart;

// bg-gradient-to-br from-[#4ca1af] to-[#c4e0e5]

{
    /* <div className='bg-[url(/src/assets/img/cart/4.jpg)] bg-cover  w-[100vw] h-[100vh]'> <div className='w-full h-full backdrop-blur-sm'></div> </div> */
}







//from-[#fddb92] to-[#d1fdff]