import React, { useRef } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../Header';
import { validateInput } from '../../../Utility/ValidateInput';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../../redux-slices/auth-slice';
import { auth } from '../../../firebase';
import Spinner from '../../UI/Spinner';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai'
import { Footer } from '../../../sections';

const SignIn = () => {

    const from = useSelector(state => state.ui.uiColor.from);
    const to = useSelector(state => state.ui.uiColor.to);



    const passwordRef = useRef()

    
    const [showPass, setShowPass] = useState(false);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setIsError] = useState(false);

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

    const dispatch = useDispatch();
    const navigate = useNavigate()
    




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
            auth,
            email,
            password
        }
        setIsError(false);
        setIsLoading(true);

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            setIsLoading(false);
            
             dispatch(addUser({
                uid: userCredentials.user.uid,
                email: userCredentials.user.email,


             }));
            navigate('/my-orders');

        })
        .catch(error => {
            
            setIsError(true);
            setIsLoading(false);
        })
        
    }









    const eyeHandler = (e) => {
        if (passwordRef.current.type === 'text'){
            passwordRef.current.type = 'password'
        } else {
            passwordRef.current.type = 'text'
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
                <div className='flex flex-row justify-center items-center bg-white  rounded-xl overflow-hidden shadow-lg '>
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

                                

                                <div className='relative flex py-2 justify-between w-full items-center max-lg:flex-col max-lg:items-start'>
                                    <label className='font-semibold text-lg  '>
                                        Password
                                    </label>
                                    <input
                                        onChange={inputHandler}
                                        ref={passwordRef}
                                        value={password}
                                        name='password'
                                        type='password'
                                        placeholder='Enter your password'
                                        className={`outline-none px-4 py-2 bg-gray-200 rounded-lg max-lg:w-full w-[70%] border-[2.2px] ${!isValid.password ? 'border-red-500 ' : 'border-transparent'}`}
                                    ></input>
                                    
                                    <span className='absolute  bottom-5 right-4' onClick={eyeHandler}>{(showPass && <AiOutlineEye className='scale-150 text-black/[0.6]' />) || <AiOutlineEyeInvisible className='scale-150 text-black/[0.6]'/>}</span>



                                    {/* { !showPass && <span className='absolute  bottom-5 right-4  '><AiOutlineEye className='scale-150 text-black/[0.6]' onClick={eyeHandler}/></span>}
                                    { showPass && <span className='absolute  bottom-5 right-4  '><AiOutlineEyeInvisible className='scale-150 text-black/[0.6]' onClick={eyeHandler}/></span>} */}
                                </div>

                                
                                

                                
                                <div className="py-2 ">
                                <button className='shadow-sm shadow-black/[0.4] px-10 py-2 mt-6 bg-green-600 rounded-md text-white font-bold '>Sign in</button>
                                </div>

                                <div>
                                    <h3>or switch to <Link to='/sign-up' className='text-blue-700 font-semibold'>Sign up</Link></h3>
                                </div>
                                
                                {error && (<div className='pt-4 flex flex-col items-center'><h3 className='text-red-500 font-semibold  '>Invalid email or password</h3>
                                    {/* <br></br> */}
                                    <h3 className='font-[500]'>Forgotten Password? <Link className='text-blue-600'>Click here</Link></h3>
                                                              </div>)}
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

export default SignIn;






