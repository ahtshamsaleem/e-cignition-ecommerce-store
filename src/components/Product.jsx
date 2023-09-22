import React from "react";
import { star } from "../assets/icons";
import './Product.css'

const Product = ({ imgURL, title, price, description, clickHandler, bgGradient }) => {


    return (
        <>
            <div className={`custom-outer overflow-hidden shadow-lg flex flex-1 flex-col w-full max-sm:w-full cursor-pointer ${bgGradient ? 'bg-gradient-to-br to-slate-200/[0.5] from-gray-200/[0.5]' : null} text-center rounded-xl justify-center items-center p-5 hover:bg-gray-100   relative `} onClick={clickHandler}>
                <div className="max-md:hidden custom-inner  backdrop-blur-[2px]  absolute h-full w-full top-0 left-0 bg-black/[0.4] flex flex-col justify-center items-center">
                    <span className="w-[50%] h-[10%]  "> <button className="w-[100%] bg-emerald-500 px-6 py-2 whitespace-nowrap rounded-md font-semibold text-white ">Add to Cart</button></span>
                    <span className="w-[50%] h-[10%] "> <button className= "w-[100%] bg-purple-600 px-6 py-2 whitespace-nowrap rounded-md font-semibold text-white">View Details</button></span>
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
