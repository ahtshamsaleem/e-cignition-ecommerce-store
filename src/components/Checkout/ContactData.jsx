import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './checkout.css';
import { createOrder, getOrderNumber, punchOrderNumber } from '../../redux-slices/orders-slice'
import { useDispatch, useSelector} from 'react-redux'

import Spinner from '../UI/Spinner';

import { useHref, useNavigate } from 'react-router-dom';
import OrderedModal from './OrderedModal';
import { initDB } from '../indexedDB';

const ContactData = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const orderId = useSelector(state => state.orders.orderNumber)
 const isLoading = useSelector(state => state.orders.isLoading)

    const orderedProducts = useSelector((state) => state.cart.products);
    const totalPrice = useSelector((state) => state.cart.totalPrice);

    const [orderModal, setOrderModal] = useState(false)

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [address2, setAddress2] = useState('');
    const [isValid, setIsValid] = useState({
        name: true,
        phone: true,
        email: true,
        address: true,
        address2: true,
    })

    const [isTouch, setIsTouch] = useState({
        name: false,
        phone: false,
        email: false,
        address: false,
        address2: false,
    })


    const ref = useRef();
    const form = useRef()


  const validateInput = (inputName, value) => {
        switch (inputName) {
            case 'name':
                setIsTouch({...isTouch, name: true})
                if (value.trim() === '' && isTouch.name === true) {
                    setIsValid({...isValid, name:false})
                } else {
                    setIsValid({...isValid, name:true})
                }
                return value;
            case 'phone':
                setIsTouch({...isTouch, phone: true})
                if (value.trim() === '' && isTouch.phone === true) {
                    setIsValid({...isValid, phone:false})
                } else {
                    setIsValid({...isValid, phone:true})
                }
                return value;
            case 'email':
                setIsTouch({...isTouch, email: true})
                if (value.trim() === '' && isTouch.email === true) {
                    setIsValid({...isValid, email:false})
                } else {
                    setIsValid({...isValid, email:true})
                }
                return value;
            case 'address':
                setIsTouch({...isTouch, address: true})
                if (value.trim() === '' && isTouch.address === true) {
                    setIsValid({...isValid, address:false})
                } else {
                    setIsValid({...isValid, address:true})
                }
                return value;
            default:
                break;
        }
    }











    const onChangeHandler = (event) => {
        switch (event.target.name) {
            case 'name':
                setName(validateInput('name', event.target.value));
                return;
            case 'phone':
                setPhone(validateInput('phone', event.target.value));
                return;
            case 'email':
                setEmail(validateInput('email', event.target.value));
                return;
            case 'address':
                setAddress(validateInput('address', event.target.value));
                return;
            case 'address2':
                setAddress2(event.target.value);
                return;

            default:
                break;
        }
    };



  

    const onSubmitHandler = (event) => {
        event.preventDefault();

        const contactInfo = {
            name,
            phone,
            email,
            address,
            address2,
        };

        const order = {
            orderId,
            orderedProducts,
            contactInfo,
            totalPrice,
            email
        };
        
        dispatch(createOrder(order));
        dispatch(punchOrderNumber())
        setOrderModal(true);

        clearIndexDbHandler()
        

        
    };
    

    useEffect(() => {

        
        form.current.scrollIntoView(false, {behavior: 'smooth'});

        dispatch(getOrderNumber());
    }, [])



    const clearIndexDbHandler = () => {
        initDB().then((db) => {
            const transaction = db.transaction('products', 'readwrite');
                const objectStore = transaction.objectStore('products');
                const request = objectStore.delete('p1');

                request.onsucces = () => {
                    console.log('index deleted DB')
                }
        })
    }





    return (
        <>  

            {orderModal && <OrderedModal products={orderedProducts} />}
            {
                isLoading ? Spinner : (
                    <div className='outer w-full mt-5 max-md:w-[90vw] pb-10' id='contact' ref={form}>
                <form onSubmit={onSubmitHandler} >
                    <div ref={ref} className=' inner w-full flex flex-col p-8 max-md:px-4 max-md:py-8 rounded-lg shadow-black/[0.4] shadow-md  bg-gray-100/[0.2] ' >
                    <div className='wrapper xwidth flex flex-col items-start mb-2 '>
                                <label htmlFor='name' 
                                    className=''
                                >Name</label>
                                <input
                                    className={` ${!isValid.name ? 'bg-red-100 border-red-500  focus:border-red-500 border-2 shadow-md' : 'border-2 border-transparent bg-gray-100 focus:bg-white shadow-md focus:border-blue-500  '} `}
                                    placeholder='Name'
                                    type='text'
                                    name='name'
                                    onChange={onChangeHandler}
                                    value={name}
                                />
                            </div>

                            <div className='wrapper xwidth flex flex-col items-start mb-2 '>
                                <label htmlFor='phone'>Phone</label>
                                <input
                                    className={` ${!isValid.phone ? 'bg-red-100 border-red-500  focus:border-red-500 border-2 shadow-md' : 'border-2 border-transparent bg-gray-100 focus:bg-white shadow-md focus:border-blue-500'}`}
                                    
                                    type='text'
                                    placeholder='Phone No.'
                                    name='phone'
                                    onChange={onChangeHandler}
                                    value={phone}
                                />
                            </div>

                        <div className='wrapper flex flex-col items-start mb-2'>
                            <label htmlFor='name'>Email</label>
                            <input
                                className={`${!isValid.email ? 'bg-red-100 border-red-500  focus:border-red-500 border-2 shadow-md' : 'border-2 border-transparent bg-gray-100 focus:bg-white shadow-md focus:border-blue-500'}`}
                                type='email'
                                placeholder='Email'
                                name='email'
                                onChange={onChangeHandler}
                                value={email}
                            />
                        </div>

                        <div className='wrapper flex flex-col items-start mb-2'>
                            <label htmlFor='Address'>Address</label>
                            <input
                                className={`${!isValid.address ? 'bg-red-100 border-red-500  focus:border-red-500 border-2 shadow-md' : 'border-2 border-transparent bg-gray-100 focus:bg-white shadow-md focus:border-blue-500'}`}
                                type='text'
                                placeholder='Address Line 1'
                                name='address'
                                onChange={onChangeHandler}
                                value={address}
                            />
                        </div>

                        <div className='wrapper flex flex-col items-start mb-2 '>
                            <label htmlFor='AddressLine2'>Adress Line 2</label>
                            <input
                                className='bg-gray-100 focus:bg-white border-2 border-transparent shadow-md focus:border-blue-500'
                                type='text'
                                placeholder='Address Line 2'
                                name='address2'
                                onChange={onChangeHandler}
                                value={address2}
                            />
                        </div>

                        
                    </div>
                    <div className="w-full flex justify-center"> 
                    <button className='w-[100%] h-auto bg-gradient-to-r from-cyan-500 to-teal-400 font-semibold py-2 text-white text-lg tracking-wide rounded-md shadow-sm shadow-black/[0.5]  hover:bg-gradient-to-r hover:from-cyan-500/[0.8] hover:to-teal-400/[0.8] hover:text-white mt-4'>Place Order</button></div>
                </form>
            </div>
                )
            }
            
        </>
    );
};

export default ContactData;
