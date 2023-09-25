import React from 'react';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const CartItems = () => {
    const products = useSelector((state) => state.cart.products);

    return (
        <>
            <div className='flex flex-col w-[60vw] max-md:w-[95vw]'>
                <div>
                    <ul>
                        {products.map((item, index) => {
                            console.log(item.id, index);
                            return (
                                <li key={index} className='flex'>
                                    
                                    <CartItem id={item.id} indexId={index} imgURL={item.imgURL} title={item.title} price={item.price} description={item.description} quantity={item.quantity} />
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default CartItems;
