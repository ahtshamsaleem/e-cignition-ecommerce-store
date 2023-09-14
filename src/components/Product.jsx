import React from "react";
import { star } from "../assets/icons";

const Product = ({ imgURL, title, price, description, clickHandler, bgGradient }) => {


    return (
        <>
            <div className={`shadow-lg flex flex-1 flex-col w-full max-sm:w-full cursor-pointer ${bgGradient ? 'bg-gradient-to-br to-slate-200/[0.5] from-gray-200/[0.5]' : null} text-center rounded-xl justify-center items-center p-5`} onClick={clickHandler}>
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
