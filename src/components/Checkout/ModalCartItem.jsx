import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuantity, totalPrice, calculatePrice } from "../../redux-slices/cart-slice";
import {products} from '../../constants'

const CartItem = ({imgURL, title, price, description, quantity, indexId, id }) => {

   const dispatch = useDispatch()
//  let initialPrice;
//     const onChangeHandler = (e) => {
        
//         console.log(price)
//             dispatch(setQuantity( {indexId: indexId, value:e.target.value}));
//             dispatch(calculatePrice({id: id}))
            
//     }

    useEffect(() => {



        dispatch(totalPrice())
    }, [price])


    return (
        <div className='text-sm w-full h-16 bg-slate-100 flex justify-between items-center px-2 py-2 mb-4 shadow-md max-md:px-6 max-md:text-sm rounded-lg '>
            <div className="flex justify-between items-center ">
                <div className="mr-2">
                    <img src={imgURL} width={50} height={50} />
                </div>
                <div className="flex flex-col max-h-[40px] w-[180px]  overflow-hidden max-md:max-w-[120px]">
                    <h2 className=''> {title} </h2>
                   
                    <p className='font-light text-xs text-black/[0.6] '> {description} </p>
                </div>
                
            </div>
            <div className="flex flex-row justify-between items-center w-[35%]">
                <div className='px-2'>
                    <h2>{quantity}</h2>
                </div>
                <div className="flex flex-row">
                    <h2 className="flex flex-row flex-nowrap whitespace-nowrap">Rs. {price} </h2>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
