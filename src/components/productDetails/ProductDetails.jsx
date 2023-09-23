import React, { useEffect, useState } from "react";
import "./productDetails.css";
// import  { RxCross1 } from 'react-icons/rx'
import {RxCross2} from 'react-icons/rx'
import { useDispatch } from "react-redux";
import { addToCart, calculatePrice } from "../../redux-slices/cart-slice";
import AtcBtn from "./atcBtn/AtcBtn";
import Backdrop from "../UI/Backdrop";
import { ToastContainer } from "react-toastify";

const ProductDetails = ({ product, closeHandler }) => {
    const dispatch = useDispatch();

    const clickHandler = () => {
        dispatch(addToCart({product:product}));
        dispatch(calculatePrice({id:product.id}));
    }




    return (
        <>  
           {/* (<ToastContainer  />) */}
            <Backdrop />
            <div className="w-[100vw] h-[100vh] fixed z-50 flex justify-center items-center top-0 left-0 max-md:flex-col">
                <div className='ProductDetails bg-white/[0.8] backdrop-blur-xl rounded-xl h-auto w-auto p-4 relative'>
                    <div className="absolute top-4 right-4" onClick={closeHandler}> <RxCross2 /> </div>
                    <div className='details' key={"asdsad"}>
                        <div className='big-img'>
                            <img src={product.imgURL} alt='' />
                        </div>

                        <div className='box'>
                            <div className='row font-bold'>
                                <h2> {product.title} </h2>
                                <span>Rs. {product.price}</span>
                            </div>

                            <p>{product.description}</p>

                            {/* <button className='cart w-[100%]' onClick={clickHandler}>Add to cart</button> */}
                            <AtcBtn cbFunc={clickHandler}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;
