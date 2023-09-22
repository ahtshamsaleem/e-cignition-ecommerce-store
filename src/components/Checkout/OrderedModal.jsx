import React from 'react'
import ModalCartItem from './ModalCartItem'
import Backdrop from '../UI/Backdrop'
import { RxCross2 } from 'react-icons/rx'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { emptyTheCart } from '../../redux-slices/cart-slice';
import {BsFillBagHeartFill} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'



const OrderedModal = ({products}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const closeHandler = () => {
        dispatch(emptyTheCart());
        navigate('/');
    }

 
  return (
    <Backdrop bdClickHandler={closeHandler} >
        <div className=' bg-white w-[30%] max-lg:w-[90%]   p-8 rounded-2xl max-md:p-4 overeflow-hidden relative' onClick={(e) => e.stopPropagation()}>
        <div className="absolute top-4 right-4" onClick={closeHandler}> <RxCross2 /> </div>
        <div className='flex flex-col'>
        <h2 className='font-bold text-3xl font-montserrat '>Ordered <span className='text-green-600'>Successfully</span></h2>
        <h3>Delivery Status : Pending </h3>
        <h3 className=' '>Your items will be delivered within 3-4 days <TbTruckDelivery className='inline text-green-700'/> </h3>
        <div className='overflow-hidden'> 
        <ul>
                        {products.map((item, index) => {
                            return (
                                <li key={index}>
                                    <ModalCartItem
                                        className='bg-slate-950'
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
         <h2 className='text-sm flex items-center'>Thank you for shopping with us  <BsFillBagHeartFill className='mx-1 text-green-700 scale-110 '/></h2>
         <h2 className='text-sm '>Contact us at <span className='text-black font-semibold'>03016667656</span> for any queries!</h2>
        </div>
    </div>
    </Backdrop>
  )
}

export default OrderedModal