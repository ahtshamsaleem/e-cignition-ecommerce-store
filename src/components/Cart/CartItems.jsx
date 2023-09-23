import React from 'react';
import { useState } from 'react';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import { RiDeleteBin5Line } from 'react-icons/ri';

const CartItems = () => {
    const products = useSelector((state) => state.cart.products);

    return (
        <>
            <div className='flex flex-col w-[60vw] max-md:w-[95vw]'>
                {/* <div className='pr-40 flex flex-row justify-between items-center px-10 pl-12 font-semibold max-md:px-4 max-md:pl-8'>
                    <h3 className=' '>Title</h3>
                    <div className='flex flex-row justify-between items-center w-[54%] max-md:w-[40%] max-[400px]:w-[44%]'>
                        <h3 className='inline-block'>Quantity</h3>
                        <h3 className='inline-block '>Price</h3>
                    </div>
                </div> */}
                <div>
                    <ul>
                        {products.map((item, index) => {
                            console.log(item.id, index)
                            return (
                                <li key={index} className='flex'>
                                    <CartItem
                                        id={item.id}
                                        indexId={index}
                                        imgURL={item.imgURL}
                                        title={item.title}
                                        price={item.price}
                                        description={item.description}
                                        quantity={item.quantity}
                                    />
                                    
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
