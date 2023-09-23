import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuantity, totalPrice, calculatePrice, deleteFromCart } from "../../redux-slices/cart-slice";
import {products} from '../../constants'
import { RiDeleteBin5Line } from 'react-icons/ri'

const CartItem = ({imgURL, title, price, description, quantity, indexId, id }) => {

   const dispatch = useDispatch()
 let initialPrice;
    const onChangeHandler = (e) => {
        
        console.log(price)
            dispatch(setQuantity( {indexId: indexId, value:e.target.value}));
            dispatch(calculatePrice({id: id}))
            
    }

    useEffect(() => {

        // const initialPriceObj = products.filter((item, index) => {
        //     return id === index;
        // })

        //  initialPrice = initialPriceObj[0].price;
        // console.log(initialPriceObj)
        // console.log(initialPrice)





        dispatch(totalPrice())
    }, [price])




    const deleteHandler = () => {
        dispatch(deleteFromCart(indexId));
        dispatch(totalPrice())


    }







    return (
        <>
             <div className=' rounded-md w-full h-16 bg-slate-100 flex justify-between  items-center px-6 py-4 mb-8 shadow-md max-md:px-3 max-md:text-sm'>
            <div className="flex justify-between items-center ">
                <div className="mr-2">
                    <img src={imgURL} width={50} height={50} />
                </div>
                <div className="flex flex-col max-h-[40px] w-[220px] overflow-hidden max-md:max-w-[120px]">
                    <h2 className=''> {title} </h2>
                    <p className='font-light text-xs text-black/[0.6] '> {description} </p>
                </div>
                <div>
                    
                </div>
            </div>
            <div className="flex flex-row justify-between items-center w-[35%]">
                <div className=''>
                    <input
                        className='w-9 bg-transparent border border-black outline-none rounded-sm pl-2  '
                        type='number'
                        placeholder="1"
                        value={quantity}
                        onChange={onChangeHandler}
                    />
                </div>
                <div className="flex flex-row">
                    <h2 className="flex flex-row font-semibold flex-nowrap whitespace-nowrap">Rs. {price} </h2>
                </div>
            </div>
            
        <RiDeleteBin5Line className="w-[10%] self-center translate-x-5 scale-150 max-md:scale-[1.3] max-md:translate-x-2  text-red-700 cursor-pointer "  onClick={deleteHandler}/>
        </div>
        {/* <button className="p-4 bg-red-500 inline-block " onClick={deleteHandler}>Delete</button> */}
        </>
       
    );
};

export default CartItem;
