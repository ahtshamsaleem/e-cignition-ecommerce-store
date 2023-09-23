import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../constants/index';
import AtcBtn from '../productDetails/atcBtn/AtcBtn';
import Header from '../Header';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, calculatePrice } from '../../redux-slices/cart-slice';

const ProductPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    const resArr = products.filter((item) => {
        return item.title === id;
    });


    const [selectedImage, setSelectedImage] = useState(resArr[0].imgURL)



const imageSelectHandlerOuter = (s) => {
    const imageSelectHandler = () => {
        setSelectedImage(s)
       
    }
    return imageSelectHandler
}

    const addToCartHandler = () => {
        dispatch(addToCart({product:resArr[0]}));
        dispatch(calculatePrice({id:resArr[0].id}));
    }



    return (
        <>
            <Header />
            <section className='w-full h-full  mt-28 flex justify-around max-lg:flex-col lg:p-20 items-center '>
                <div className='lg:w-[50%] flex justify-center mb-16'>
                    <div className='lg:w-[500px]   p-8 relative border-black'>
                        <img
                            src={selectedImage}
                            className='object-contain '
                        />

                    <div className='absolute -bottom-20 left-0 flex '>
                        {resArr[0].imgs?.map((img) => {
                            return (
                                <img key={img} src={img}  className='w-20 h-20 mx-2 border rounded-xl cursor-pointer hover:brightness-95  ' onClick={imageSelectHandlerOuter(img)}/>
                            )
                        })}

                        
                        {/* <img src={resArr[0].img2} className='w-20 h-20 mx-2 border rounded-xl cursor-pointer hover:brightness-95'  onClick={imageSelectHandlerOuter(resArr[0].img2)}/>
                        <img src={resArr[0].img3} className='w-20 h-20 mx-2 border rounded-xl cursor-pointer hover:brightness-95'  onClick={imageSelectHandlerOuter(resArr[0].img3)}/> */}
                    </div>
                    </div>
                </div>
                <div className='p-10 lg:w-[50%] '>
                    <h2 className='text-4xl font-bold p-2 '>
                        {resArr[0].title}
                    </h2>
                    <h3 className='text-xl font-semibold p-1 text-red-700'>
                        Rs. {resArr[0].price}

                        <p className='text-black/[0.7] inline px-5 line-through '>Rs. 9899</p>
                    </h3>
                    <h4 className='text-xl font-semibold p-1'>
                        Quantity. {resArr[0].quantity}
                    </h4>
                    <div className='text-xl font-semibold p-1'>
                        <label className='pr-2'>Color</label>
                        <select className='text-xl font-semibold px-6'>
                            <option>Black</option>
                            <option>Blue</option>
                            <option>Purple</option>
                            <option>Red</option>
                        </select>
                    </div>

                    <div className="py-4"><AtcBtn cbFunc={addToCartHandler}/></div>

                    <p className='text-md  p-2'>
                        Description :  {resArr[0].description}
                    </p>
                </div>
            </section>
        </>
    );
};

export default ProductPage;
