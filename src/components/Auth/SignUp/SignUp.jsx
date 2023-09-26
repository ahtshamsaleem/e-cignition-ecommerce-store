import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../Header';
import { InputCmp, RadioInputGender } from './components/components';
import { validateInput2 } from '../../../Utility/ValidateInput';

import { auth } from '../../../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../../redux-slices/auth-slice';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import Spinner from '../../UI/Spinner';
import { Footer } from '../../../sections';

const SignUp = () => {

    const from = useSelector(state => state.ui.uiColor.from);
    const to = useSelector(state => state.ui.uiColor.to);


    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [showPass, setShowPass] = useState(false);
    const ref = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [gender, setGender] = useState('');

    const [isValid, setIsValid] = useState({
        email: true,
        password: true,
        name: true,
        city: true,
    });


    const dispatch = useDispatch();

    const inputHandler = (event) => {
        switch (event.target.name) {
            case 'name':
                setName(event.target.value);
                setIsValid({
                    ...isValid,
                    name: validateInput2('name', event.target.value),
                });

                return;

            case 'email':
                setEmail(event.target.value);
                setIsValid({
                    ...isValid,
                    email: validateInput2('email', event.target.value),
                });
                return;
            case 'city':
                setCity(event.target.value);
                setIsValid({
                    ...isValid,
                    city: validateInput2('city', event.target.value),
                });
                return;
            case 'password':
                setPassword(event.target.value);
                setIsValid({
                    ...isValid,
                    password: validateInput2('password', event.target.value),
                });
                return;
            case 'gender':
                setGender(event.target.value);

                return;
            default:
                break;
        }
    };

    
    const submitHandler = (event) => {
        event.preventDefault();
        const userCredentials = {
            auth: auth,
            email: email,
            password: password,
        };

        const userData = {
            name,
            email,
            city,
            password,
            gender,
        };
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            setIsLoading(false);
            setError('')
            dispatch(addUser({
                uid: userCredentials.user.uid,
                email: userCredentials.user.email,


             }));

             navigate('/my-orders');
        })
        .catch(error => {
            setIsLoading(false);
            setError('Failed to signup! Email already in use');

        })
        
    };



    const eyeHandler = (e) => {
        console.log(e)
        console.log(ref)
        if (ref.current.type === 'text'){
            ref.current.type = 'password'
        } else {
            ref.current.type = 'text'
        }
        

        setShowPass((prevState) => {
            return !prevState;
        })
    }


    return (
        <>  
        {isLoading && <div className='fixed w-[100vw] h-[100vh] z-[200] flex justify-center items-center bg-gray-600/[0.1] backdrop-blur-[2px] '><div className='text-red-400 '><Spinner /></div> </div>}
            <Header />
            <section className={`w-full  py-32 px-28 xl:px-64 bg-gradient-to-r ${from} ${to} max-lg:px-8 max-lg:py-24`}>
                <div className='flex flex-row justify-center items-center bg-white rounded-xl overflow-hidden shadow-lg '>
                    <div className=' shadow-black shadow-md w-[44%] bg-center bg-[url(/src/assets/img/cart/4.jpg)] h-[500px] max-lg:h-[600px] bg-cover max-md:hidden relative'>
                        <span className='flex w-full h-full  bg-gradient-to-b  from-black/[0.3] via-transparent to-black/[0.3] '></span>
                    </div>
                    <div className='flex  justify-center py-4 px-10 w-full max-lg:p-4 md:w-[60%] lg:w-[80%]'>
                        <form
                            onSubmit={submitHandler}
                            className='flex flex-col items-center justify-center w-[60%] max-lg:w-full  '
                        >
                            <div>
                                <h2 className='text-2xl font-bold py-2 text-gray-600'>
                                    Sign up
                                </h2>
                            </div>
                            <InputCmp
                                isValid={isValid.name}
                                label='Name'
                                name='name'
                                type='text'
                                placeholder='Enter your name'
                                value={name}
                                onChange={inputHandler}
                            />

                            <InputCmp
                                isValid={isValid.email}
                                label='Email'
                                name='email'
                                type='email'
                                placeholder='Enter your email'
                                value={email}
                                onChange={inputHandler}
                            />

                            <InputCmp
                                isValid={isValid.city}
                                label='City'
                                name='city'
                                type='text'
                                placeholder='Enter your city'
                                value={city}
                                onChange={inputHandler}
                            />

                            <div className="relative w-full ">

                            <InputCmp
                                forwardRef={ref}
                                isValid={isValid.password}
                                label='Password'
                                name='password'
                                type='password'
                                placeholder='Enter your password'
                                value={password}
                                onChange={inputHandler}
                            />
                            <span className='absolute  bottom-5 right-4' onClick={eyeHandler}>{(showPass && <AiOutlineEye className='scale-150 text-black/[0.5]' />) || <AiOutlineEyeInvisible className='scale-150 text-black/[0.5]'/>}</span>
                            </div>

                            <RadioInputGender
                                gender={gender}
                                changeHandler={inputHandler}
                            />

                            <div className='py-2 '>
                                <button className=' px-10 py-2 mt-6  bg-green-600 rounded-md text-white font-bold '>
                                    Sign Up
                                </button>
                            </div>

                            <div>
                                <h3>
                                    or switch to{' '}
                                    <Link
                                        to='/sign-in'
                                        className='text-blue-700 font-semibold'
                                    >
                                        Sign in
                                    </Link>
                                </h3>
                            </div>

                            {error && (<div className='pt-4 flex flex-col items-center'><h3 className='text-red-500 font-semibold text-lg '>{error}</h3></div>)}
                        </form>
                    </div>
                </div>
            </section>

            <section className=' bg-black padding-x padding-t pb-8'>
          <Footer />
        </section>
        </>
    );
};

export default SignUp;

// import React from 'react';
// import Header from '../../Header';

// const SignUp = () => {
//     return (
//         <>
//             <Header />
//             <section className=' w-full mt-[80px] p-28 bg-gradient-to-tr from-teal-500 to-teal-700 max-md:p-8'>
//                 <div className='flex flex-row justify-center items-center bg-white rounded-xl overflow-hidden  '>
//                     <div className='basis-[30%] bg-center bg-[url(/src/assets/img/cart/4.jpg)] h-[600px] bg-cover max-md:hidden '>
//                         {/* <img
//                     width={200}
//                     src='/src/assets/img/cart/1.jpg' className='object-cover w-full h-[300px]' /> */}
//                     </div>
//                     <div className='flex basis-[10%]  justify-center  p-10 '>
//                         <div className='flex flex-col justify-center items-center  '>
//                             <div>
//                                 <h2 className='text-2xl font-bold '>Sign Up</h2>
//                             </div>
//                             <form>

//                                 <div className='flex flex-row items-center p-4 justify-between'>
//                                     <label className='font-semibold text-lg  '>
//                                         Name
//                                     </label>
//                                     <input
//                                         type='text'
//                                         placeholder='Name'
//                                         className='outline-none px-4 py-2 bg-gray-200 rounded-md '
//                                     ></input>
//                                 </div>

//                                 <div className='flex flex-row items-center p-4 justify-between '>
//                                     <label className='font-semibold text-lg '>
//                                         Email
//                                     </label>
//                                     <input
//                                         type='email'
//                                         placeholder='Enter your email'
//                                         className='outline-none px-4 py-2 bg-gray-200 rounded-md '
//                                     ></input>
//                                 </div>

//                                 <div className='flex flex-row items-center p-4 justify-between '>
//                                     <label className='font-semibold text-lg '>
//                                         City
//                                     </label>
//                                     <input
//                                         type='text'
//                                         placeholder='Enter your city'
//                                         className='outline-none px-4 py-2 bg-gray-200 rounded-md '
//                                     ></input>
//                                 </div>

//                                 <div className='flex flex-row items-center p-4 justify-between '>
//                                     <label className='font-semibold text-lg '>
//                                         Password
//                                     </label>
//                                     <input
//                                         type='password'
//                                         placeholder='Enter your password'
//                                         className='outline-none px-4 py-2 bg-gray-200 rounded-md '
//                                     ></input>
//                                 </div>

//                                 <div className="flex flex-row items-center p-4 ">
//                                 <button>Sign Up</button>
//                                 </div>

//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// };

// export default SignUp;
