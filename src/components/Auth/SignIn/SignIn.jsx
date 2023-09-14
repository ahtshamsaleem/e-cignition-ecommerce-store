import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header';
import { validateInput } from '../../../Utility/ValidateInput';

const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isValid, setIsValid] = useState({
        email: true,
        password: true,

    })
    const [isTouch, setIsTouch] = useState({
        name: false,
        password: false

    })




    const inputHandler = (event) => {
        switch (event.target.name) {
            case 'email':
                setEmail(event.target.value);
                validateInput(
                    'email',
                    event.target.value,
                    isTouch,
                    setIsTouch,
                    isValid,
                    setIsValid
                );

                return;

            case 'password':
                setPassword(event.target.value);
                validateInput(
                    'password',
                    event.target.value,
                    isTouch,
                    setIsTouch,
                    isValid,
                    setIsValid
                );

                return;
            default:
                break;
        }
    };



    const submitHandler = (event) => {
        event.preventDefault();

        const authObj = {
            email,
            password
        }

        console.log(authObj)
    }




    return (
        <>
            <Header />
            <section className=' w-full mt-[80px] py-28 px-28 xl:px-64 bg-gray-200 from-orange-500 to-rose-400 max-lg:p-8'>
                <div className='flex flex-row justify-center items-center bg-white rounded-xl overflow-hidden shadow-lg '>
                    <div className=' shadow-black shadow-md w-[44%] bg-center bg-[url(/src/assets/img/cart/4.jpg)] h-[500px] max-lg:h-[600px] bg-cover max-md:hidden relative' >
                        <span className='flex w-full h-full  bg-gradient-to-b  from-black/[0.3] via-transparent to-black/[0.3] '></span>
                    </div>
                    <div className='flex  justify-center p-10 w-full max-lg:p-4 md:w-[60%] lg:w-[80%]'>
                        
                            
                            <form onSubmit={submitHandler} className='flex flex-col items-center justify-center w-[60%] max-lg:w-full  '>
                            <div>
                                <h2 className='text-2xl font-bold py-6 text-gray-600' >Sign in</h2>
                            </div>
                                

                                <div className='flex py-2 justify-between w-full items-center max-lg:flex-col max-lg:items-start'>
                                    <label className='font-semibold text-lg '>
                                        Email
                                    </label>
                                    <input
                                        onChange={inputHandler}
                                        value={email}
                                        name='email'
                                        type='email'
                                        placeholder='Enter your email'
                                        className={`outline-none px-4 py-2 bg-gray-200 rounded-lg max-lg:w-full w-[70%] border-[2.2px] ${!isValid.email ? 'border-red-500 ' : 'border-transparent'}`}
                                    ></input>
                                </div>

                                

                                <div className='flex py-2 justify-between w-full items-center max-lg:flex-col max-lg:items-start'>
                                    <label className='font-semibold text-lg  '>
                                        Password
                                    </label>
                                    <input
                                        onChange={inputHandler}
                                        value={password}
                                        name='password'
                                        type='password'
                                        placeholder='Enter your password'
                                        className={`outline-none px-4 py-2 bg-gray-200 rounded-lg max-lg:w-full w-[70%] border-[2.2px] ${!isValid.password ? 'border-red-500 ' : 'border-transparent'}`}
                                    ></input>
                                </div>

                                


                                
                                <div className="py-2 ">
                                <button className='shadow-sm shadow-black/[0.4] px-10 py-2 mt-6 bg-green-600 rounded-md text-white font-bold '>Sign in</button>
                                </div>

                                <div>
                                    <h3>or switch to <Link to='/sign-up' className='text-blue-700 font-semibold'>Sign up</Link></h3>
                                </div>
                                
                                
                            </form>
                        </div>
                    </div>
               
            </section>
        </>
    );
};

export default SignIn;






