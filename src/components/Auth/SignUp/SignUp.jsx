import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header';
import { InputCmp, RadioInputGender } from './components/components';

const SignUp = () => {








    const inputHandler = () => {
        
    }








    const submitHandler = (event) => {

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
                                <h2 className='text-2xl font-bold py-2 text-gray-600'>Sign up</h2>
                            </div>
                                <InputCmp label='Name' name='name' type='text' placeholder='Enter your name' />

                                
                                <InputCmp label='Email' name='email' type='email' placeholder='Enter your email' />
                                
                                <InputCmp label='City' name='city' type='text' placeholder='Enter your city' />

                                <InputCmp label='Password' name='password' type='password' placeholder='Enter your password' />

                               

                            

                                <RadioInputGender />


                                
                                <div className="py-2 ">
                                <button className=' px-10 py-2 mt-6  bg-green-600 rounded-md text-white font-bold '>Sign Up</button>
                                </div>

                                <div>
                                    <h3>or switch to <Link to='/sign-in' className='text-blue-700 font-semibold'>Sign in</Link></h3>
                                </div>
                                
                                
                            </form>
                        </div>
                    </div>
               
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
