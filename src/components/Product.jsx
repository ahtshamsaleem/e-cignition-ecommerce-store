import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { star } from "../assets/icons";
import { addToCart, calculatePrice } from "../redux-slices/cart-slice";
import { setIsToast } from "../redux-slices/ui-slice";
import './Product.css'
import { toast } from 'react-toastify'
import { useState } from "react";
import {db} from './indexedDB';

const idArray = [];


const Product = ({ imgURL, title, price, description, clickHandler, bgGradient, product,   }) => {
 
    const dispatch = useDispatch();
    const navigate = useNavigate()


    const showDetailsBtnHandler = (e) => {
        e.stopPropagation();
        console.log(product);
        navigate(`/product/${product.title}`)

    }


























































    const addToCartBtnHandler = (e) => {
        e.stopPropagation();
        dispatch(addToCart({product:product}));
        dispatch(calculatePrice({id:product.id}));

        toast.success('Added to cart!', {
            position: "top-left",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });




            idArray.push(product.id)

            const productStore =  db.transaction('products', 'readwrite').objectStore('products');
          
            productStore.put({cd:'p1', cart: idArray});




















    }



    return (
        <>
            <div className={`custom-outer overflow-hidden shadow-lg flex flex-1 flex-col w-full max-sm:w-full cursor-pointer ${bgGradient ? 'bg-gradient-to-br to-slate-200/[0.5] from-gray-200/[0.5]' : null} text-center rounded-xl justify-center items-center p-5 hover:bg-gray-100   relative `} onClick={clickHandler}>
                <div className="max-lg:hidden custom-inner  backdrop-blur-[2px]  absolute h-full w-full top-0 left-0 bg-black/[0.4] flex flex-col justify-center items-center">
                    <span className="w-[50%] h-[10%]  "> <button className="w-[100%] bg-emerald-500 px-6 py-2 whitespace-nowrap rounded-md font-semibold text-white hover:bg-emerald-600 " onClick={addToCartBtnHandler}>Add to Cart</button></span>
                    <span className="w-[50%] h-[10%] "> <button className= "w-[100%] bg-purple-600 px-6 py-2 whitespace-nowrap rounded-md font-semibold text-white hover:bg-purple-700 " onClick={showDetailsBtnHandler}>View Details</button></span>
                </div>
                <img src={imgURL} alt={title} className='w-[282px] h-[282px]' />
                
                <div className='mt-4 flex justify-start gap-2'>
                    <img src={star} alt='rating icon' width={16} height={16} />
                    <p className='font-montserrat text-lg leading-normal text-slate-gray'>
                        (4.5)
                    </p>
                </div>
                <h3 className='text-xl leading-normal font-semibold font-palanquin'>
                    {title}
                </h3>
                <p className='font-semibold font-montserrat text-coral-red text-xl leading-normal'>
                    Rs.  {price}
                </p>
            </div>
        </>
    );
};

export default Product;
